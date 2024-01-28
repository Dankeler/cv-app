import './styles/App.css';
import PersonalInfo from "./components/Personal"
import EducationForm from "./components/Education"
import Job from "./components/Job"
import { Cv, BlankCv } from "./components/CVKURWA";
import {useState} from "react";

export default function Parent() {
  // CV
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")

  // Education

  const [instiName, setInstiName] = useState("")
  const [degreeName, setDegreeName] = useState("")
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")

  // Job

  const [companyName, setCompanyName] = useState("")
  const [positionTitle, setPositionTitle] = useState("")
  const [jobStartDate, setJobStartDate] = useState("")
  const [jobEndDate, setJobEndDate] = useState("")
  const [description, setDescription] = useState("")

  const [submitValues, setSubmitValues] = useState(true)

  const handleSubmit = () => {
    setSubmitValues(true)
  }

  const handleEdit = () => {
    setSubmitValues(false)
  }

  return (
    <div className="container">
      {submitValues ? null : (
        <div className="all-forms">
          <PersonalInfo 
            firstName={firstName}
            lastName={lastName}
            email={email}
            phone={phone}

            setFirstName={setFirstName}
            setLastName={setLastName}
            setEmail={setEmail}
            setPhone={setPhone}
          />
          <EducationForm
            instiName={instiName}
            degreeName={degreeName}
            startDate={startDate}
            endDate={endDate}

            setInstiName={setInstiName}
            setDegreeName={setDegreeName}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
          />
          <Job 
            companyName={companyName}
            positionTitle={positionTitle}
            jobStartDate={jobStartDate}
            jobEndDate={jobEndDate}
            description={description}

            setCompanyName={setCompanyName}
            setPositionTitle={setPositionTitle}
            setJobStartDate={setJobStartDate}
            setJobEndDate={setJobEndDate}
            setDescription={setDescription}
          />
          <button onClick={handleSubmit}>Chuj</button>
        </div>)}
             



      {!submitValues && <BlankCv/>}
      {submitValues && <Cv 
                          firstName={firstName} 
                          lastName={lastName}
                          email={email}
                          phone={phone}

                          instiName={instiName}
                          degreeName={degreeName}
                          startDate={startDate}
                          endDate={endDate}

                          companyName={companyName}
                          positionTitle={positionTitle}
                          jobStartDate={jobStartDate}
                          jobEndDate={jobEndDate}
                          description={description}
                          handleEdit={handleEdit}
                          />}

    </div>
  )
}