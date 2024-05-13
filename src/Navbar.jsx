import { Link } from "react-router-dom"
import Images from "./assets/images/logo 1.png"       
import Images1 from "./assets/images/user.png"       
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <nav>

                <div className="Navlogo">
                    <img src={Images} alt="" />
                </div>

                <div className="Navlink">
                    <li><Link>Home</Link></li>
                    <li><Link>Rentals</Link></li>
                    <li><Link>Categories</Link></li>
                    <li><Link>About Us</Link></li>
                    <li><Link>Contact</Link></li>
                    <li><Link>Blog</Link></li>
                    {/* <Link></Link> */}
                </div>

                <div className="Btncontainer">
                    <button className="Btn1"><img src={Images1} alt="" />Sign in</button>
                    <button className="Btn2"><span>+</span>Post Listing</button>
                </div>
            </nav>

           
        </div>
    )
}


export default Navbar;