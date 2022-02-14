import { Link } from 'gatsby'
import React from 'react'
import LayOut from '../components/LayOut'

const Error = () => {
    return (
        <LayOut>
            <main className="error-page">
                <div className="error-container">

                    <h1>Page not found</h1>
                    <Link to="/" className="btn">Back Home</Link>
                </div>
            </main>
        </LayOut>
    )
}

export default Error
