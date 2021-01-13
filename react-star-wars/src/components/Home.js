import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Home = () => {

    const [starwarsData, setStarwarsData] = useState([])

    useEffect(() => {
        axios.get("https://swapi.dev/api/starships/")
            .then((res) => {
                setStarwarsData(res.data.results)
            })
    }, [])

    const display = () => (
        starwarsData.map((data, i) => {
            console.log(data)
            return (
                    <div key={i} className="col s6">
                        <div id="all-info" className="card-panel teal lighten-2">
                            <div className="card-content white-text">
                                <span className="card-title">{data.name}</span>
                            </div>
                            <div className="card-action">
                                <Link className="more" to={{
                                    pathname: `/starship/${i}`,
                                    state: { data }
                                }}
                                    key={data.name}
                                >
                                    More Information
                            </Link>
                            </div>
                        </div>
                    </div>
            )
        })
    )

    return (
        <div>
            <h1>Starwars Starships</h1>
            {display()}
        </div>
    )
}

export default Home
