import Watches from './Items';

const PUBLIC_URL = process.env.PUBLIC_URL || 'http://localhost:3000';

function Shop() {
    return (
        <div className="shop">
            <h1>This is a shop page</h1>
            {Watches.map(element => {
                return (
                    
                    <div key={'watch-' + element.id} className="card-item">
                        {console.log('hello')}
                        <img src={PUBLIC_URL + element.src} key={'watch-img-' + element.id} alt=""/>
                    </div>
                )
            })}
        </div>
    );
}

export default Shop;

