import { Link } from 'react-router-dom';
const Navbar = () => {
    return ( <div className="Navbar">
        <div className="navbar">
                <div className="logo">
                    <p>Logo</p>
                </div>
                <div className="links">
                   <Link to="/">Home</Link>
                   <Link to="/products/">Products</Link>
                   <Link to="products/">Cart</Link>
                </div>
            </div>
    </div> );
}
 
export default Navbar;