import React, { useState } from 'react';
import Content from './Content';
import { Watches, Wallets, Other } from './Items';



function Shop() {
    const [showWatches, setShowWatches] = useState(true);
    const [showWallets, setShowWallets] = useState(true);
    const [showOther, setShowOther] = useState(false);
    
    function show(showItems, items, title) {
        if (showItems) {
            return ( <Content items={items} title={title} /> )
        }
    }


    return (
        <div className="shop">
            <div className="side">
                <label htmlFor="watches-box">Watches</label>
                <input type="checkbox" id="watches-box" checked={showWatches} onChange={e => setShowWatches(!showWatches)} />
                <label htmlFor="wallets-box">Wallets</label>
                <input type="checkbox" id="wallets-box" checked={showWallets} onChange={e => setShowWallets(!showWallets)} />
                <label htmlFor="other-box">Other</label>
                <input type="checkbox" id="other-box" checked={showOther} onChange={e => setShowOther(!showOther)} />
            </div>
            <div className="content">

                <h1>shop</h1>
                {show(showWatches, Watches, 'Watches')}
                {show(showWallets, Wallets, 'Wallets')}
                {show(showOther, Other, 'Other')}

            </div>

        </div>
    );
}

export default Shop;

