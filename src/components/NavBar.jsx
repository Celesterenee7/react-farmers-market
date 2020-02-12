import React from "react";
import Banner from './banner.jpg';
import { Link } from 'react-router-dom';

function NavBar(){

 var image = {
   backgroundPosition: "center",
   backgroundRepeat: "no-repeat",
   backgroundSize: "cover",
   width: "100%",


 }

  return (
    <div>
    <img src={Banner} alt="banner" style={image} />
    <Link to="/">Home</Link> | <Link to="/producelist">View Seasonal Produce</Link>
    </div>
  );
}
export default NavBar;
