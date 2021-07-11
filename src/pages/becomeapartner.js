import React from "react";
import Navbar from "../components/navbar"
import Footer from "../components/footer"

const BecomeAPartner = () => {
    return (
        <div>
            <Navbar scroll={true}/>
            <main style={{paddingTop: '6rem'}}>
                <h1 style={{textAlign: 'center'}}>Become our Out Of Home partner</h1>
                <h3 style={{textAlign: 'center'}}>Media owners are our partners</h3>
                <h5 style={{textAlign: 'center'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum risus diam, ut lacinia tortor vulputate vitae
                </h5>
                <div>
                    Some thing to write here
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default BecomeAPartner