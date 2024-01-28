

function EducationForm(probs) {
    return (
        <div class="education">
            <h1>Education</h1>
            <form id="education">
                <label htmlFor="instiName">Institution Name</label>
                <input id="instiName" value={probs.instiName}
                onChange={(e) => probs.setInstiName(e.target.value)}>
                </input>

                <label htmlFor="degreeName">Degree Name</label>
                <input id="degreeName" value={probs.degreeName}
                onChange={(e) => probs.setDegreeName(e.target.value)}>
                </input>

                <label htmlFor="startDate">Start Date</label>
                <input type="date" id="startDate" value={probs.startDate} 
                onChange={(e) => probs.setStartDate(e.target.value)}>
                </input>

                <label htmlFor="endDate">End Date</label>
                <input type="date" id="endDate" value={probs.endDate}
                onChange={(e) => probs.setEndDate(e.target.value)}>
                </input>
            </form>
        </div>
    )
}

export default EducationForm;