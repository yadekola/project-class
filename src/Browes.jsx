import './Browes.css'

const Browes = () => {

    return (
        <div className="flyerbigBrowes">
            <h1>Browes From Top Categories</h1>

            <div className="bigBrowes">
                
                <div className="iconsbrowes">
                    <i className='bx bx-like'id="iconslike" ></i>
                    <p>Holiday Rentals</p>
                </div>

                <div className="iconsbrowes">  
                    <i className='bx bx-home' id="iconshome" ></i> 
                    <p>Event Spaces</p>
                </div>

                <div className="iconsbrowes">
                    <i class='bx bxs-compass' id="iconscomp"></i>
                    <p>Residential Spaces</p>
                </div>
                    

                <div className="iconsbrowes">
                    <i className='bx bx-dollar' id="iconsdoll"></i>  
                    <p>Commercial Properties</p>
                </div>
                <div className="iconsbrowes">
                    <i className='bx bx-dots-horizontal-rounded' id="iconsdot"></i>
                    <p>More</p>
                </div>

            </div>
           
        </div>
    )
}



export default Browes