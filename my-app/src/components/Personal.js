import "../styles/Personal.css"

function PersonalInfo(probs) {
    return (
        <div class="personal">
            <h1>Personal Data</h1>
            <form id="personal">
                <label htmlFor="firstName">First Name</label>
                <input id="firstName" value={probs.firstName}
                onChange={(e) => probs.setFirstName(e.target.value)}>
                </input>

                <label htmlFor="lastName">Last Name</label>
                <input id="lastName" value={probs.lastName}
                onChange={(e) => probs.setLastName(e.target.value)}>
                </input>

                <label htmlFor="email">Email</label>
                <input type="email" id="email" value={probs.email}
                onChange={(e) => probs.setEmail(e.target.value)}>
                </input>

                <label htmlFor="phone">Phone</label>
                <input type="tel" id="phone" value={probs.phone}
                onChange={(e) => probs.setPhone(e.target.value)}>
                </input>
            </form>
        </div>
    )
}

export default PersonalInfo;