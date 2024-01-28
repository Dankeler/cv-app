function Job(probs) {
    return (
        <div class="job">
            <h1>Job data</h1>
            <form id="job">
                <label htmlFor="companyName">Company Name</label>
                <input id="companyName" value={probs.companyName}
                onChange={(e) => probs.setCompanyName(e.target.value)}>
                </input>

                <label htmlFor="positionTitle">Position Title</label>
                <input id="positionTitle" value={probs.positionTitle}
                onChange={(e) => probs.setPositionTitle(e.target.value)}>
                </input>

                <label htmlFor="jobStartDate">Start Date</label>
                <input type="date" id="jobStartDate" value={probs.jobStartDate} 
                onChange={(e) => probs.setJobStartDate(e.target.value)}>
                </input>

                <label htmlFor="jobEndDate">End Date</label>
                <input type="date" id="jobEndDate" value={probs.jobEndDate}
                onChange={(e) => probs.setJobEndDate(e.target.value)}>
                </input>

                <label htmlFor="description">Job Description</label>
                <textarea rows="5" cols="33" id="description" value={probs.description}
                onChange={(e) => probs.setDescription(e.target.value)}>
                </textarea>
            </form>
        </div>
    )
}

export default Job;