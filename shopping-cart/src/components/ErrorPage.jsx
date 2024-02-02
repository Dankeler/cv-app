import {Link} from "react-router-dom"


const ErrorPage = () => {
    return (
        <div>
            <h1>Error!</h1>
            <h2>This page does not exist</h2>
            <Link to="MainPage">
                Go back to home
            </Link>
        </div>
    )
}

export default ErrorPage;