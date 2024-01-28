export {Cv, BlankCv}

function BlankCv() {
    return (
        <div className="CV">
            <h1>Preview</h1>
            <h2>Personal Information</h2>
            <p><b>Full Name: </b></p>
            <p><b>Email: </b></p>
            <p><b>Phone: </b></p>
            <br></br>
            <h2>Education</h2>
            <p><b>Institution Name: </b></p>
            <p><b>Degree Name: </b></p>
            <p><b>Start Date: </b></p>
            <p><b>End Date: </b></p>
            <br></br>
            <h2>Work Experience</h2>
            <p><b>Company Name: </b></p>
            <p><b>Position Level: </b></p>
            <p><b>Start Date: </b></p>
            <p><b>End Date: </b></p>
            <p><b>Job Description: </b></p>
        </div>
    )
}

function Cv(probs) {
    
    return (
        <div className="CV">
            <h1>Preview</h1>
            <h2>Personal Information</h2>
            <p><b>Full Name: </b>{`${probs.firstName} ${probs.lastName}`}</p>
            <p><b>Email: </b>{probs.email}</p>
            <p><b>Phone: </b>{probs.phone}</p>
            <br></br>
            <h2>Education</h2>
            <p><b>Institution Name: </b>{probs.instiName}</p>
            <p><b>Degree Name: </b>{probs.degreeName}</p>
            <p><b>Start Date: </b>{probs.startDate}</p>
            <p><b>End Date: </b>{probs.endDate}</p>
            <br></br>
            <h2>Work Experience</h2>
            <p><b>Company Name: </b>{probs.companyName}</p>
            <p><b>Position Level: </b>{probs.positionTitle}</p>
            <p><b>Start Date: </b>{probs.jobStartDate}</p>
            <p><b>End Date: </b>{probs.jobEndDate}</p>
            <p><b>Job Description: </b>{probs.description}</p>
            <br></br>
            <button onClick={probs.handleEdit}>Edit</button>
        </div>
    )
}

