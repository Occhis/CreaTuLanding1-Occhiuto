import CardWidget from "./CardWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            flexDirection: 'row',
            padding: '1rem 2rem'
        }}>
            <Link to="/">
                <h3 className="logo-title">TIENDA MULTIFACÉTICA</h3>
            </Link>
            
            <div style={{ display: 'flex', gap: '1rem' }}>
                <Link to="/category/Recitales">
                    <button>Recitales</button>
                </Link>
                <Link to="/category/accesorios">
                    <button>Accesorios</button>
                </Link>
                <Link to="/category/electronica">
                    <button>Electrónica</button>
                </Link>
            </div>
            
            <CardWidget />
        </nav>
    );
}

export default NavBar;