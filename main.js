// main.js — simple client-side personal AI that queries products.json
(async function(){
  const messagesEl = document.getElementById('messages');
  const inputEl = document.getElementById('input');
  const sendBtn = document.getElementById('send');
  const categoriesEl = document.getElementById('categories');
  const productCountEl = document.getElementById('product-count');

  let productsData = null;
  try {
    const res = await fetch('products.json');
    productsData = await res.json();
  } catch (err) {
    appendBotMessage('Could not load products.json — open the page from the repository root so the file can be fetched.');
    console.error(err);
    return;
  }

  // Build a flat list of products (with category context)
  const productList = [];
  const categories = [];
  (productsData.product_categories || []).forEach(cat => {
    categories.push({name: cat.category_name, pages: cat.page_range});
    if (Array.isArray(cat.subcategories)) {
      cat.subcategories.forEach(sub => {
        if (Array.isArray(sub.products)) {
          sub.products.forEach(p => {
            productList.push(Object.assign({}, p, {category: cat.category_name, subcategory: sub.subcategory_name}));
          });
        }
      });
    }
  });

  productCountEl.textContent = productList.length;

  // Render categories list
  categoriesEl.innerHTML = categories.map(c=>{
    return `<button class="cat">${escapeHtml(c.name)}</button>`;
  }).join('');
  categoriesEl.querySelectorAll('.cat').forEach((btn, i)=>{
    btn.addEventListener('click', ()=>{
      userMessage(`Show products in ${categories[i].name}`);
      handleQuery(`show products in ${categories[i].name}`);
    });
  });

  // Utilities
  function escapeHtml(s){ return (s+'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

  function appendUserMessage(text){
    const el = document.createElement('div'); el.className='msg user'; el.innerHTML = `<div class="bubble user">${escapeHtml(text)}</div>`; messagesEl.appendChild(el); messagesEl.scrollTop = messagesEl.scrollHeight;
  }
  function appendBotMessage(html){
    const el = document.createElement('div'); el.className='msg bot'; el.innerHTML = `<div class="bubble bot">${html}</div>`; messagesEl.appendChild(el); messagesEl.scrollTop = messagesEl.scrollHeight;
  }

  function userMessage(text){ appendUserMessage(text); }

  // Very small fuzzy search: token match count + field priority
  function searchProducts(query, limit=8){
    const q = (query||'').toLowerCase().trim();
    if (!q) return [];
    const tokens = q.split(/\s+/).filter(Boolean);
    const scored = productList.map(p=>{
      const hay = ((p.product_name||'') + ' ' + (p.aws_code||'') + ' ' + (p.category||'') + ' ' + (p.subcategory||'')).toLowerCase();
      let score = 0;
      tokens.forEach(t=>{
        if (hay.includes(t)) score += 10;
        if ((p.product_name||'').toLowerCase().startsWith(t)) score += 5;
      });
      return {p, score};
    }).filter(r=>r.score>0).sort((a,b)=>b.score-a.score);
    return scored.slice(0,limit).map(r=>r.p);
  }

  function formatProductCard(p){
    return `<div class="card"><div class="card-title">${escapeHtml(p.product_name||'')}</div>
      <div class="card-row"><span class="k">AWS:</span> <span class="v">${escapeHtml(p.aws_code||'—')}</span></div>
      <div class="card-row"><span class="k">Page:</span> <span class="v">${escapeHtml(p.page_no||'—')}</span></div>
      <div class="card-row"><span class="k">Category:</span> <span class="v">${escapeHtml(p.category||'—')}</span></div>
      <div class="card-row"><span class="k">Sub:</span> <span class="v">${escapeHtml(p.subcategory||'—')}</span></div>
    </div>`;
  }

  function handleQuery(query){
    const q = (query||'').toLowerCase();
    // Intent: list categories
    if (q.includes('category') || q.includes('categories') || q.match(/^list|show categories/)){
      const html = '<b>Categories:</b><ul>' + categories.map(c=>`<li>${escapeHtml(c.name)} (${escapeHtml(c.pages||'')})</li>`).join('') + '</ul>';
      appendBotMessage(html);
      return;
    }

    // Intent: find by AWS code exact
    const awsMatch = query.match(/\b([A-Za-z0-9\- ]{2,})\b/);

    // Search products
    const results = searchProducts(query);
    if (results.length === 0){
      appendBotMessage('No matching products found. Try a different name, AWS code (e.g. E7018) or a partial term.');
      return;
    }

    // Build response with product cards
    const cards = results.map(p=>formatProductCard(p)).join('');
    appendBotMessage(`<div><b>Found ${results.length} result(s):</b></div>` + cards);
  }

  // Wire UI
  sendBtn.addEventListener('click', ()=>{
    const v = inputEl.value.trim(); if (!v) return; inputEl.value=''; userMessage(v); handleQuery(v);
  });
  inputEl.addEventListener('keydown', (e)=>{
    if (e.key === 'Enter' && !e.shiftKey){ e.preventDefault(); sendBtn.click(); }
  });

  // Welcome
  appendBotMessage('Hello — I am your local Dayita personal assistant. Ask about products, AWS codes, pages, or type "list categories".');

})();
