//use navling to navigate the user from howe to userboard and check if the user is admin
//navigate admin to his admin page
//use the logic as we have used on login page 
 


export const Home=()=>{
    return (
        <>
            <main>
                <section className="section-hero">
                    <div className="container grid grid-two-cols">
                        <div className="hero-content">
                            <p>
                                We have made claim managment system application
                            </p>
                            <h1>welcome to claim managment system </h1>
                            <p>
                                !!!!!!!!!!!!!!!here we go !!!!!!!!!!!!!!!!!!
                            </p>
                            <div className="btn btn-group">
                                <a href="/contact">
                                    <button className="btn">connect now</button>
                                </a>
                                <a href="/services">
                                    <button className="btn secondary-btn">learn more</button>
                                </a>
                            </div>
                        </div>
                        <div className="hero-image">
                            <img
                             src="img2.avif" 
                             alt="lets code"
                             width="400" 
                             height="300"/>
                        </div>
                    </div>
                </section>
            </main>
            <section className="section-analytics">
                <div className="container grid grid-four-cols">
                    <div className="div1">
                        <h2>Captain</h2>
                        <p>RamAnsh</p>
                        <p>Sir</p>
                    </div>
                    <div className="div1">
                        <h2>P1</h2>
                        <p>ASHUTOSH KUMAR PATHAKr</p>
                    </div>
                    <div className="div1">
                        <h2>P2</h2>
                        <p>NAINA GUPTA</p>
                    </div>
                    <div className="div1">
                        <h2>P3</h2>
                        <p>ROHAN GOYAL</p>
                        
                    </div>
                </div>
            </section>
            <section className="section-hero">
                    <div className="container grid grid-two-cols">
                        <div className="hero-image">
                                <img
                                src="img2.avif" 
                                alt="lets code"
                                width="400" 
                                height="300"/>
                            </div>
                        </div>
                        <div className="hero-content">
                            <p>
                                We are proud of you.
                            </p>
                            <h1>This is my first project on cms </h1>
                            <p>
                                !!!!!!!!!!!!!!!there you go !!!!!!!!!!!!!!!!!!
                            </p>
                            <div className="btn btn-group">
                                <a href="/contact">
                                    <button className="btn">connect now</button>
                                </a>
                                <a href="/services">
                                    <button className="btn secondary-btn">learn more</button>
                                </a>
                            </div>
                        </div>

                </section>

        
        </>
    )
}