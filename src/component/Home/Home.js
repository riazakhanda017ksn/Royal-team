import React, { useEffect, useState } from 'react';
import Details from '../Details/Details';
import './Home.css'


const Home = () => {
    const [teams, setTeams] = useState([])
    useEffect(() => {
        const url = "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League"
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setTeams(data.teams))

    }, [])
    const team =teams.slice(0,15)

    return (

        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        {
                            team.map(tm => <Details league={tm}></Details>)
                        }

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;