import React from 'react'

const Card = ({info}) => {
    console.log(info)
    const {avatar_url, login, html_url} = info
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src= {avatar_url} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{login}</h5>
                <a target="_blank" href={html_url} className="btn btn-primary">
                    Go githubaddress
                </a>
            </div>
        </div>

    )
}

export default Card