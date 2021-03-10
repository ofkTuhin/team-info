import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './Team.css'
import { Link } from 'react-router-dom';


const Team = (props) => {
 const {strTeam,strTeamBadge,strSport,idTeam}=props.teams
    
    return (
        <div className="col-lg-3 col-md-6 col-sm-12">
           <div className="team">
           <img src={strTeamBadge}></img>
            <h4>{strTeam}</h4>
            <p>Sport Type {strSport}</p>
           <Link to={`/teamdetails/${idTeam}`}> <button className="btn btn-primary"> Explore<FontAwesomeIcon icon={ faArrowRight} className="icon"></FontAwesomeIcon></button></Link>
        </div>
        </div>
    );
};

export default Team;