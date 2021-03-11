import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './Details.css'
import { useHistory } from 'react-router';
import { Card } from 'react-bootstrap';
const Details = (props) => {
    const { strTeam, idLeague, strTeamLogo } = props.league
    let history = useHistory()
    const HandleClick = (idLeague) => {
        history.push(`/details/${idLeague}`)
    }
   

  
    return (
        <div className='background-color'>
            <div className="container-section">
                <Card style={{ width: '17rem', height: "290px", paddingTop: '30px' }}>
                    <Card.Img variant="top" src={strTeamLogo} />
                    <Card.Body>
                        <Card.Title><h4>{strTeam}</h4></Card.Title>
                        <Card.Text>
                            <p><span>Sports type: Football</span></p>
                        </Card.Text>
                        <button  className="btn btn-primary" onClick={() => HandleClick(idLeague)}>Explore <span className='text-light'><FontAwesomeIcon icon={faArrowRight} /></span> </button>
                    </Card.Body>
                </Card>

            </div>
        </div>
    );
};

export default Details;