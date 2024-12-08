import React from "react";

const homeStyle = {
  backgroundColor: "transparent",
  textAlign: "center", 
  margin: "0", 
  paddingTop: "100px", 
  letterSpacing: "2.5px"
}
const jumbHead = {
  color: "#4CAF50",
  fontWeight: "bold",
  fontSize: "4rem",
}
const para = {
  color: "white",
  fontSize: "1.01rem"
}

const Home = () => {
  return (
    <div className="home" style={homeStyle}>
      <h1 style={jumbHead}>Welcome to Smokewise</h1>
      <p style={para}>Your one-stop shop for premium smoking products, wines, and accessories.</p>
    </div>
  );
};

export default Home;