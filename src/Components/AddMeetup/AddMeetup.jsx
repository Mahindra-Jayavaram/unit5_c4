// User should be able to add/create new meetups 
import { useEffect, useState } from "react";
import axios from "axios";

export const AddMeetup = () => {
const [meetups, setMeetups] = useState({
  title: "",
  location : "",
  data : "",
  time :"",
  theme : "",
  description : "",
  image : "",
});

const handleChange = (e)=>{
  const {className, value} = e.target;

  setMeetups({
    ...meetups,
    [className] : value,
  })
}

const handleSubmit = (e)=>{
  e.preventDefault();

  axios.post("http://localhost:8080/meetups",meetups).then(()=>{
    alert("meet created succesfully")
  })
}


  return (
    <div className="addMeetupContainer">
      <form onSubmit={handleSubmit}>
        <h1>Add Meetup</h1>
        <label>title</label>
        <input type="text" className="title" value={meetups.title} onChange={handleChange} required />
        <label>Location</label>
        <select value={meetups.location} className="location" onChange={handleChange}>
          <option value=""></option>
          <option value="bangalore">Bangalore</option>
          <option value="kolkata">Kolkata</option>
          <option value="delhi">Delhi</option>
          <option value="mumbai">Mumbai</option>
        </select>
        <br />
        <label>date</label>
        <input
          type="text"
          className="date"
          onChange={handleChange}
          value={meetups.date}
          placeholder="format YYYY-MM-DD"
          required
        />
        <br />
        <label>time</label>
        <input
          type="text"
          className="time"
          value={meetups.time}
          onChange={handleChange}
          placeholder="format HH:MM"
          required
        />
        <br />
        <label>Theme</label>
        <select value={meetups.theme} className="theme" onChange={handleChange}>
          <option value="">-----------</option>
          <option value="technology">Technology</option>
          <option value="food">Food</option>
          <option value="movies">Movies</option>
          <option value="culture">Culture</option>
          <option value="art">Art</option>
          <option value="drama">Drama</option>
        </select>
        <label>description</label>
        <input
          type="text"
          className="description"
          value={meetups.description}
          onChange={handleChange}
          placeholder="Description"
          required
        />
        <br />
        <label>Image</label>
        <input
          type="text"
          className="image"
          value={meetups.image}
          onChange={handleChange}
          required
        />
        <br />
        <input className="submitMeetupForm" type="submit" />
      </form>
    </div>
  );
};
