import React from "react";

function Header (){
    const headerStyle = {
        color: "#ffffff",
        backgroundImage: 'url("https://ak6.picdn.net/shutterstock/videos/2757836/thumb/1.jpg")',
        backgroundSize: "cover",
        height:"70vh",
        opacity:"0.8",
        textAlign: "center",
        marginBottom: "10px",
    }
    return(
        <div className="jumbotron jumbotron-fluid" style={headerStyle}>
          <div className="container  header">
            <h1 style={{fontSize:"80px", fontWeight:"bolder"}}><span><i class="fa fa-address-book-o" aria-hidden="true" style={{fontSize:"80px"}}></i></span>  EMPLOYEE DIRECTORY</h1>
          </div>
       </div>
    )
}

export default Header;