import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, } from '@fortawesome/free-solid-svg-icons'
import './Team.css'
import { Link } from 'react-router-dom';


const Team = (props) => {
 const {strTeam,strTeamBadge,strSport,idTeam,strGender}=props.teams
 let button ;
 let gender=strGender
 console.log(gender)
 if(gender==="Male")
 {
     button=<Link to={`/teamdetails/${idTeam}`}> <button className="btn btn-primary"> Explore<FontAwesomeIcon icon={ faArrowRight} className="icon"></FontAwesomeIcon></button></Link>
 }
 else{
    button=<Link to="/home"> <button className="btn btn-primary"> Explore<FontAwesomeIcon icon={ faArrowRight} className="icon"></FontAwesomeIcon></button></Link>

 }
    
    return (
        <div className="col-lg-3 col-md-6 col-sm-12">
           <div className="team">
           <img src={strTeamBadge} alt="image"></img>
            <h4>{strTeam}</h4>
            <p>Sport Type {strSport}</p>
          
              
              {
              button 
              }  
          
        </div>
        </div>
    );
};

export default Team;