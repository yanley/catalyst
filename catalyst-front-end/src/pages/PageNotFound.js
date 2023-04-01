import {Link} from 'react-router-dom'

function PageNotFound() {
    return (
        <div className="PageNotFound">
            <h1>Page Not Found</h1>
            <p>Sorry, we can't find that page. Try going back <Link to="/">home</Link> instead.</p>
        </div>
    )
}

export default PageNotFound