import './Home.css'
import image1 from "./assets/images/image1.png"



const Home = () => {
    return (
        <div>
            <section>

                <div className="flyerheadrContainer">
                    
                    <div className="headerContainer">
                        <h1>Discover Your <span>Perfect Rental</span></h1>
                        <p>Rent Cars, Houses, and items in just a Few Clicks</p>
                    </div>

                    

                
                    <div className="biginputContainer">
                        <div className="flyerBtn">
                            <button className='flyerbtn1'>Places</button>
                            <button className='flyerbtn2'>Rides</button>
                            <button className='flyerbtn2'>Things</button>
                        </div>
                        <div className="bigboxinput">

                            <div className="inputflyer">  
                                <div className="locaicon">

                                    <i className='bx bx-search'></i>
                                </div>

                                <div className="locaicon">
                                    
                                    <input className='secarchinput' type="text" placeholder="Search for car,houses and more" />
                                </div>

                            </div>

                            <div className="boxinput">  
                                <div className="locaicon">
                                    
                                    <i class='bx bx-location-plus'></i>
                                </div>  

                                <div className="locaicon">
                                    
                                    <input  className='locationinput' type="text" placeholder="Selact Location"  /> 
                                </div>  

                                <div className="locaicon">
                                    
                                    <i className='bx bxs-chevron-down' ></i>
                                </div>  

                                <div className="locaicon">
                                    
                                    <i className='bx bx-search' id='boxicon'></i>
                                </div>  


                            </div>

                        </div>
                        
                    </div>

                </div>

            </section>


        </div>
    )
}

export default Home;