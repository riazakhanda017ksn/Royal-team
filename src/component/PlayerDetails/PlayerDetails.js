import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './PlayerDetails.css'
import female from '../Photo/female.png'
import male from '../Photo/male.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlag, faFutbol, faLink, faMapMarkerAlt, faMarsStroke, faNewspaper} from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const PlayerDetails = () => {
    const { idLeague } = useParams()
    const [players, setPlayers] = useState([])
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`
        fetch(url)
            .then(res => res.json())
            .then(data => setPlayers(data.leagues[0]))
    }, [idLeague])
    const { strLogo, strGender, strLeague,strCountry,
        intFormedYear,strDescriptionEN,strDescriptionFR,
        strWebsite,strFacebook,strTwitter,strYoutube,strRSS,strBanner} = players

    let images;
    if (strGender) {
        images = male
    } else {
        images = female
    }


    return (

        <div className='background'>
            <img className='position-change' src={strBanner} alt=""/>
            <div className='image-Customize'>

                <img src={strLogo} alt="" />
            </div>
           
                <div className="container">
                <div className="banner-background">  
                    <div className="row">
                        <div className="col-lg-6">
                          <div className="team-introduce mt-3">
                              <h2>{strLeague}</h2>
                              <h4> <span><FontAwesomeIcon icon={faMapMarkerAlt} /></span>  Founded :  {intFormedYear}</h4>
                              <h4> <span><FontAwesomeIcon icon={faFlag} /></span>     Country:{strCountry}</h4>
                              <h4> <span><FontAwesomeIcon icon={faFutbol} /></span>    Sport Type : Football </h4>
                               <h4> <span><FontAwesomeIcon icon={faMarsStroke} /></span>     Gender: {strGender}</h4>
                          </div>
                        </div>
                        <div className="col-lg-6">
                        <div className="img-div">
                            <img src={images} alt=""/>
                        </div>
                        </div>
                    </div>
                   
                </div>
            </div>
            <div className="container">
            <div className="row">
                        <div className="col-lg-12">
                           <div className="description ">
                           <p className="text-justify">{strDescriptionEN}</p>

                           <p className='mt-4 text-justify'>
                             {strDescriptionFR}
                           </p>
                           </div>
                        </div>
                    </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="social-part text-center ">
                            <a href={strWebsite}> <FontAwesomeIcon icon={faLink}/>   </a>
                            <a href={strFacebook}> <FontAwesomeIcon icon={faFacebook}/> </a>
                            <a href={strTwitter}> <FontAwesomeIcon icon={faTwitter}/>  </a>
                            <a href={strYoutube}> <FontAwesomeIcon icon={faYoutube}/>  </a>
                             <a href={strFacebook}><FontAwesomeIcon icon={faInstagram}/> </a>
                            <a href={strRSS}> <FontAwesomeIcon icon={faNewspaper}/>   </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlayerDetails;