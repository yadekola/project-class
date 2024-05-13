import './List.css'


const List = () => {

    return (

        <div className="flyerbigListContainer">
            <div className="fkyerList">


                <h1>Featured Listings</h1>

                
                <i class='bx bx-plus'></i>

                <div className="ListBtn">
                    <div className="headertext">
                        <p>All Items (5125)</p>
                    </div>
                    <div className="headertext">
                        <p>Residential Spaces (64)</p>
                    </div>
                    <div className="headertext">
                        <p>Sports Venues</p>
                    </div>               
                    <div className="headertext">
                        <p>Meeting Spaces</p>
                    </div>
                    <div className="headertext">
                        <p>Vans & Buses</p>    
                    </div>
                    <div className="headertext">
                        <p>Cars & SUVs</p>
                    </div>
                    <div className="headertext">
                        <p>Lorries & Industrial Vehicles</p>
                    </div>
                    <div className="headertext">
                        <i class='bx bxs-chevron-right'></i>
                    </div>
                </div>
            </div>

            

        </div>
    )
}


export default List