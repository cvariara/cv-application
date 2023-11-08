import { useState } from "react";
import WorkIcon from "@mui/icons-material/Work";

function Work({ onWorkSubmit }) {
  const [company, setCompany] = useState("Microsoft");
  const [position, setPosition] = useState("Software Engineer");
  const [responsibilities, setResponsibilities] = useState(
    "Handle making code."
  );
  const [startDate, setStartDate] = useState("Sep 2021");
  const [endDate, setEndDate] = useState("Jun 2023");

  const handleChange = (e) => {
    switch (e.target.name) {
      case "company":
        setCompany(e.target.value);
        break;
      case "position":
        setPosition(e.target.value);
        break;
      case "responsibilities":
        setResponsibilities(e.target.value);
        break;
      case "startDate":
        const start = getMonthYear(e.target.value);
        setStartDate(start);
        break;
      case "endDate":
        const end = getMonthYear(e.target.value)
        setEndDate(end);
        break;
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
    onWorkSubmit({ company, position, responsibilities, startDate, endDate });
  };

  return (
    <div className="form work-form">
      <div className="form-header">
        <WorkIcon style={{ fontSize: "32px" }} />
        <p>Work Experience</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="company">Company:</label>
          <input
            type="text"
            name="company"
            id="company"
            placeholder="Microsoft"
            value={company}
            onChange={handleChange}
          />
        </div>
        <div className="form-row">
          <label htmlFor="position">Position Title:</label>
          <input
            type="text"
            name="position"
            id="position"
            placeholder="Software Engineer"
            value={position}
            onChange={handleChange}
          />
        </div>
        <div className="form-row">
          <label htmlFor="responsibilties">Job Responsibilities:</label>
          <textarea
            name="responsibilties"
            id="responsibilties"
            cols="30"
            rows="10"
            value={responsibilities}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="form-row">
          <label htmlFor="startDate">Start Date:</label>
          <input
            type="month"
            name="startDate"
            id="startDate"
            value={startDate}
            onChange={handleChange}
          />
        </div>
        <div className="form-row">
          <label htmlFor="endDate">End Date:</label>
          <input
            type="month"
            name="endDate"
            id="endDate"
            value={endDate}
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

export default Work;
