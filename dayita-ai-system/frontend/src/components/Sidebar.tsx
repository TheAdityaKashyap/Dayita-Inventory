import React from 'react';

const Sidebar: React.FC = () => {
    return (
        <aside className="sidebar">
            <div className="search-history">
                <h3><i className="fas fa-history"></i> Recent Searches</h3>
                <ul className="history-list" id="history-list">
                    {/* Will be populated dynamically */}
                </ul>
            </div>
            <div className="quick-queries">
                <h3><i className="fas fa-bolt"></i> Quick Queries</h3>
                <ul className="queries-list" id="queries-list">
                    <li className="query-item">Find welding electrodes</li>
                    <li className="query-item">Search by AWS code</li>
                    <li className="query-item">Products on page 100</li>
                    <li className="query-item">CNM(SPLM 2 details</li>
                </ul>
            </div>
            <div className="filter-by">
                <h3><i className="fas fa-filter"></i> Filter By</h3>
                <ul className="filter-list" id="filter-list">
                    <li className="filter-item">AWS Certified</li>
                    <li className="filter-item">Page Range</li>
                    <li className="filter-item">Electrodes</li>
                    <li className="filter-item">Weld Metal</li>
                </ul>
            </div>
        </aside>
    );
};

export default Sidebar;