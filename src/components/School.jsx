import { useState } from "react";
import SchoolIcon from '@mui/icons-material/School';

function School({ onSchoolSubmit }) {
  const [school, setSchool] = useState("Harvard College");
  const [major, setMajor] = useState("Computer Science");
  const [gradDate, setGradDate] = useState("May 2024");
  const [location, setLocation] = useState("Cambridge, Massachusetts");

  const handleChange = (e) => {
    switch (e.target.name) {
      case "school":
        setSchool(e.target.value);
        break;
      case "major":
        setMajor(e.target.value);
        break;
      case "gradDate":
        const grad = getMonthYear(e.target.value);
        setGradDate(grad);
        break;
      case "location":
        setLocation(e.target.value);
    }
  };

  const getMonthYear = (val) => {
    const month = val.substring(5);
    const year = val.substring(0, 4);
    switch (month) {
      case "01":
        return `Jan ${year}`;
      case "02":
        return `Feb ${year}`;
      case "03":
        return `Mar ${year}`;
      case "04":
        return `Apr ${year}`;
      case "05":
        return `May ${year}`;
      case "06":
        return `Jun ${year}`;
      case "07":
        return `Jul ${year}`;
      case "08":
        return `Aug ${year}`;
      case "09":
        return `Sep ${year}`;
      case "10":
        return `Oct ${year}`;
      case "11":
        return `Nov ${year}`;
      case "12":
        return `Dec ${year}`;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSchoolSubmit({ school, major, gradDate, location });
  };

  return (
    <div className="form school-form">
      <div className="form-header">
        <SchoolIcon style={{fontSize: '32px'}} />
        <p>Education Experience</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="school">School Name:</label>
          <input
            type="text"
            name="school"
            id="school"
            placeholder="Harvard College"
            value={school}
            onChange={handleChange}
          />
        </div>
        <div className="form-row">
          <label htmlFor="major">Major:</label>
          <input
            type="text"
            name="major"
            id="major"
            placeholder="Computer Science"
            value={major}
            onChange={handleChange}
          />
        </div>
        <div className="form-row">
          <label htmlFor="location">City, State:</label>
          <input
            type="text"
            name="location"
            id="location"
            placeholder="Cambridge, Massachusetts"
            value={location}
            onChange={handleChange}
          />
        </div>
        <div className="form-row">
          <label htmlFor="gradDate">Graduation Date:</label>
          <input
            type="month"
            name="gradDate"
            id="gradDate"
            value={gradDate}
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

export default School;
