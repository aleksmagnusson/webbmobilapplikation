import React from 'react'
import { useLoaderData } from 'react-router-dom'


function Repositories() {
    const data = useLoaderData();

    console.log(data);
    return (
        <div>
            <h1>Repositories</h1>
            <ul>
                {
                    data.map(repo => (
                        <li key={repo.id} style={{ textDecoration: "none" }}>
                            <a href={repo.html_url}>
                                {repo.name} (stars: {repo.stargazers_count}, forks:{" "}
                                {repo.forks_count})
                            </a>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Repositories