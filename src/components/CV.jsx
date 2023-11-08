function CV({ personInfo, schoolInfo, workInfo }) {
  return (
    <div className="cv">
      <div className="header">
        <h2 className="person-name">
          {personInfo.firstName} {personInfo.lastName}
        </h2>
        <h4 className="person-info">
          {personInfo.address} | {personInfo.email} | {personInfo.phoneNumber}
        </h4>
      </div>
      <div className="school">
        <h3 className="cv-title">Education</h3>
        <div className="bar"></div>
        <div className="school-info">
          <div className="school-name">{schoolInfo.school}</div>
          <div className="school-location">{schoolInfo.location}</div>
          <div className="school-major">
            <span className="bold">Degree:</span> {schoolInfo.major}
          </div>
          <div className="school-graddate">{schoolInfo.gradDate}</div>
        </div>
      </div>
      <div className="work">
        <h3 className="cv-title">Work Experience</h3>
        <div className="bar"></div>
        <div className="work-info">
          <div className="work-name-position"><span className="work-name">{workInfo.company}</span>, {workInfo.position}</div>
          <div className="work-resp">{workInfo.responsibilities}</div>
          <div className="work-dates">
            <div className="work-start-date">{workInfo.startDate}</div>
            -
            <div className="work-end-date">{workInfo.endDate}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CV;
