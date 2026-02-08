import { Product } from '../models/Product';

export class SearchService {
    private products: Product[];

    constructor(products: Product[]) {
        this.products = products;
    }

    public searchByName(query: string): Product[] {
        const lowerCaseQuery = query.toLowerCase();
        return this.products.filter(product => 
            product.product_name.toLowerCase().includes(lowerCaseQuery)
        );
    }

    public searchByAWSCode(awsCode: string): Product[] {
        return this.products.filter(product => 
            product.content.toLowerCase().includes(awsCode.toLowerCase())
        );
    }

    public searchByPage(pageNum: string): Product[] {
        return this.products.filter(product => 
            product.page === `page_${pageNum}.txt`
        );
    }

    public search(query: string): Product[] {
        const resultsByName = this.searchByName(query);
        const resultsByAWSCode = this.searchByAWSCode(query);
        const resultsByPage = this.searchByPage(query);

        return [...new Set([...resultsByName, ...resultsByAWSCode, ...resultsByPage])];
    }
}