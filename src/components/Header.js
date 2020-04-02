import React from "react";

function Header (){
    const headerStyle = {
        padding: "30px 0",
        color: "#ffffff",
        width: "100%",
        textAlign: "center",
        backgroundColor: "#111D45",
        marginBottom: "10px",
        borderBottom: "5px solid red"
    }
    return(
        <div className="header" style={headerStyle}>
            <h1>Employee Directory</h1>
        </div>
    )
}

export default Header;