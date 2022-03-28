import { useEffect, useState } from "react";
import axios from "axios";

export const LoginSignUp = () => {

const [loginUser, setLoginUser] = useState ([])
const [userData, setUserdata] = useState({
  name : "",
  password : ""
})  
const [users, setUsers] = useState({
  name : "",
  password : "",
  location : "",
  intrest : "",
  technology : "",
  food : "",
  movies : "",
  culture : "",
  art : "",
  drama : "",
  image : "", 
})

const handleChange = (e) =>{
  const {className , value, type, checked} = e.target;

  setUsers({
    ...users, 
    [className] : type === "checkbox"? checked: value
  })
}

const handleSubmit = (e) =>{
  e.preventDefault();

  console.log(users);

  axios.post("http://localhost:8080/users",users).then(() =>{
    alert("Signup Succesfully")
  });
}
useEffect(()=>{
  getData();
},[])

const getData = ()=>{
  axios.get("http://localhost:8080/users").then((res) =>{
    setLoginUser(res.data);
  })
}
const handleLogin = (e)=>{
  e.preventDefault();

  console.log(loginUser)
  userData.name === loginUser.name && userData.password === loginUser.password ? alert("enter valid creadientiels") : alert("login succesfull") 
  
}
const loginForm = (e)=>{
  const {className , value} = e.target;

  console.log(className,value)
  setUserdata({
    ...userData, 
    [className] : value
  })
}

  return (
    <div className="loginSignUp">
      <form className="signUp" onSubmit={handleSubmit}>
        <h1>SignUp</h1>
        <label>name</label>
        <input
          type="text"
          className="name"
          value={users.name}
          onChange={handleChange}

          required
        />
        <br />
        <label>password</label>
        <input
          type="text"
          className="password"
          value={users.password}
          onChange={handleChange}
          required
        />
        <br />
        <select value={users.location} className="location" onChange={handleChange}>
          <option value="">Select the Location</option>
          <option value="bangalore">Bangalore</option>
          <option value="kolkata">Kolkata</option>
          <option value="delhi">Delhi</option>
          <option value="mumbai">Mumbai</option>
        </select> <br />
        <label>Interests</label>
        <br />
        <label>technology</label>
        <input
          type="checkbox"
          className="technology"
          value={users.technology}
          onChange={handleChange}
        />
        <br />
        <label>food</label>
        <input type="checkbox" className="food" value={users.food} onChange={handleChange} />
        <br />
        <label>movies</label>
        <input type="checkbox" className="movies" value={users.movies} onChange={handleChange} />
        <br />
        <label>culture</label>
        <input type="checkbox" className="culture" value={users.culture} onChange={handleChange} />
        <br />
        <label>art</label>
        <input type="checkbox" className="art" value={users.art} onChange={handleChange} />
        <br />
        <label>drama</label>
        <input type="checkbox" className="drama" value={users.drama} onChange={handleChange} />
        <br />
        <label>image</label>
        <input
          type="text"
          className="image"
          value={users.image}
          onChange={handleChange}
          required
        />
        <br />
        <input type="submit" className="submitSignUpForm" />
      </form>
      <form className="login" onSubmit={handleLogin}>
        <h1>Login</h1>
        <label>name</label>
        <input
          type="text"
          className="name"
          value={userData.name}
          onChange={loginForm}
          required
        />
        <br />
        <label>password</label>
        <input
          type="text"
          className="password"
          value={userData.password}
          onChange={loginForm}
          required
        />
        <br />
        <input type="submit" className="submitLoginForm" />
      </form>
    </div>
  );
};
