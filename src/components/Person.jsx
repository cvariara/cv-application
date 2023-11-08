import { useState } from "react";
import PersonIcon from '@mui/icons-material/Person';
import { Height } from "@mui/icons-material";

function Person({ onPersonSubmit }) {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Doe");
  const [email, setEmail] = useState("john.doe@gmail.com");
  const [phoneNumber, setPhoneNumber] = useState("888-888-8888");
  const [address, setAddress] = useState("New York, USA");

  const handleChange = (e) => {
    console.log(e.target.value);
    switch (e.target.name) {
      case "firstName":
        setFirstName(e.target.value);
        break;
      case "lastName":
        setLastName(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      case "phoneNumber":
        setPhoneNumber(e.target.value);
        break;
      case "address":
        setAddress(e.target.value);
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onPersonSubmit({ firstName, lastName, email, phoneNumber, address });
  };

  return (

    <div className="form person-form">
      <div className="form-header">
        <PersonIcon style={{fontSize: '32px'}} />
        <p>General Information</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="John"
            value={firstName}
            onChange={handleChange}
          />
        </div>
        <div className="form-row">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Doe"
            value={lastName}
            onChange={handleChange}
          />
        </div>
        <div className="form-row">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="john.doe@gmail.com"
            value={email}
            onChange={handleChange}
          />
        </div>
        <div className="form-row">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="text"
            name="phoneNumber"
            id="phoneNumber"
            placeholder="888-888-8888"
            value={phoneNumber}
            onChange={handleChange}
          />
        </div>
        <div className="form-row">
          <label htmlFor="address">City, State:</label>
          <input
            type="text"
            name="address"
            id="address"
            placeholder="City, State"
            value={address}
            onChange={handleChange}
          />
        </div>
        <button className="form-row save" type="submit">
          Save
        </button>
      </form>
    </div>
  );
}

export default Person;
