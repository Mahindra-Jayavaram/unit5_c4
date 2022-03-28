import { Link } from "react-router-dom";
// import { style } from "styled-components"

export const Navbar = () => {
  return (
    <>

    <nav style={{
      display : "flex",
      justifyContent : "center",
      backgroundColor : "gray",
      height: "50px",
      marginTop : "10px"
    }}>

    

    <div className="navbar" style={{
      // width : "100%",
      display : "flex",
      gap : "20px",
      marginTop : "10px",
      
    }} 
    >
      <Link className="navbarHome" to={"/"}>
        Home
      </Link>
      <Link className="navbarLoginSignUp" to={"/loginsignup"}>
        Login/Sign Up
      </Link>
      <Link className="meetup" to={"/Events"}>
        Events
      </Link>
      <Link className="addmeetup" to={"/addmeetup"}>
        Add Meet UP
      </Link>
      <Link className="404" to={"/404"}>
      </Link>
    </div>
    </nav>
    </>
  );
};
