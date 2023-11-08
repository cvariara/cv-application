import { useState } from "react";
import Person from "./components/Person";
import School from "./components/School";
import Work from "./components/Work";
import CV from "./components/CV";
import "./App.css";

function App() {
  const [personInfo, setPersonInfo] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@gmail.com",
    phoneNumber: "888-888-8888",
    address: "New York, USA",
  });
  const [schoolInfo, setSchoolInfo] = useState({
    school: "Harvard College",
    major: "Computer Science",
    location: "Cambridge, Massachusetts",
    gradDate: "May 2024",
  });
  const [workInfo, setWorkInfo] = useState({
    company: "Microsoft",
    position: "Software Engineer",
    responsibilities: "Handle making code.",
    startDate: "Sep 2021",
    endDate: "Jun 2023",
  });

  const handlePersonSubmit = (data) => {
    setPersonInfo(data);
  };
  const handleSchoolSubmit = (data) => {
    setSchoolInfo(data);
  };
  const handleWorkSubmit = (data) => {
    setWorkInfo(data);
  };

  return (
    <div className="container">
      <div className="forms-container">
        <div className="forms">
          <Person onPersonSubmit={handlePersonSubmit} />
          <School onSchoolSubmit={handleSchoolSubmit} />
          <Work onWorkSubmit={handleWorkSubmit} />
        </div>
      </div>
      <div className="cv-container">
        <CV
          personInfo={personInfo}
          schoolInfo={schoolInfo}
          workInfo={workInfo}
        />
      </div>
    </div>
  );
}

export default App;
