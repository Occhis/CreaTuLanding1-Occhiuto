import CardWidget from "./CardWidget/CardWidget";

const NavBar = () => {
    return (
        <nav>
            <h3>Ecommerce Store</h3>
            <div>
            <button>Ropa</button>
            <button>Accesorios</button> 
            <button>Electronica</button> 
            </div>
            <div className="CardWidget"></div>
            <CardWidget />
        </nav>
    );
}
export default NavBar;