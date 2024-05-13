import image24 from "./assets/images/image24.png"
import image26 from "./assets/images/image26.png"
import image27 from "./assets/images/image27.png"
import './Listhome.css'



const Listhome = () => {

    return (
        <div className="FlyerlisthomeContainer">
            <div className="HomelistContainer">
                <div className="homeimg">
                    <img src={image24} alt="" />
                    <p>For Rent</p>
                </div>

                <div className="textlistContainer">
                    <h6><span>85,000 LKR</span>/Month</h6>
                    <h1>Luxury villa in Rego Park</h1>
                </div>
                <div className="bigListContainer">
                    <div className="bedrooms">
                        3 Bedrooms    
                    </div>
                    <div className="bedrooms">
                        2 Bedrooms
                    </div>
                    <div className="bedrooms">
                        2500 Square FT
                    </div>
                </div>
                <div className="cardname">
                    <div className="nameContainer">
                        <img scr="" alt="" />
                    </div>
                    <div className="nameContainer">
                        <h2>Anne Liza</h2>
                        <p>Property Seller</p>
                    </div>
                    <div className="nameContainer">
                        <i class='bx bx-heart'></i>
                    </div>
                </div>
            </div>
        
        </div>
    )
}

export default Listhome