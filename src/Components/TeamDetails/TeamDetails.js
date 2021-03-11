import React from 'react';
import { useState,useEffect } from 'react';
import { useParams } from 'react-router';
import './teamDeails.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faFacebook, faTwitter,faYoutube} from '@fortawesome/free-brands-svg-icons'
import maleImage from '../../images/male.png'
import femaleImage from '../../images/female.png'
import { faFlag, faFutbol, faHistory, faMars } from '@fortawesome/free-solid-svg-icons';




const TeamDetails = () => {
    const {idTeam}=useParams()
    const [teamInfo,setTeamInfo]=useState([])
    useEffect(() =>{
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`)
        .then(res=>res.json())
        .then(data=>{ 
            
            setTeamInfo(data.teams[0])
            console.log(teamInfo)
           
            
          
        })
    },[idTeam,teamInfo])
    const {intFormedYear,strTeamBanner,strCountry,strSport,strGender,strFacebook,strTwitter,strYoutube}=teamInfo
    let teamImage;
    let gender=strGender

 if( gender==="Male")
 {
     teamImage=<img src={maleImage} alt="Male"></img>
 }
 else{
    teamImage=<img src={femaleImage} alt="Female"></img>

 }

   
    return (
        <div>
            
              
            <img src={strTeamBanner} alt="Team"></img>

            <div className="team-info">
            <div className="container">
                <div className="row">
                   <div className="info" >
                      <div className="container">
                          <div className="row">
                          <div className="col-lg-7 col-sm-12">
                           <div className="teamDetails">
                               <p><FontAwesomeIcon icon={ faHistory} ></FontAwesomeIcon> Founded: {intFormedYear}</p>
                               <p><FontAwesomeIcon icon={ faFlag} ></FontAwesomeIcon> Country: {strCountry}</p>
                               <p><FontAwesomeIcon icon={ faFutbol} ></FontAwesomeIcon> Sport type: {strSport}</p>
                               <p><FontAwesomeIcon icon={ faMars} ></FontAwesomeIcon>   Gender: {strGender}</p>
                           </div>
                       </div>
                       <div className="col-lg-5 col-sm-12">
                           <div className="teamImage">

                               {teamImage}
                                   
                               
                           </div>
                       </div>
                          </div>
                      </div>
                   </div>
                   <div className="teamStatus">
                       <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                       
                       <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                   </div>
                   <div className="favIcon">
                   
                       <a  className="social"href={strFacebook}><FontAwesomeIcon icon={ faFacebook} className="socialIcon"></FontAwesomeIcon></a>
                       <a  className="social"href={strTwitter}><FontAwesomeIcon icon={ faTwitter} className="socialIcon"></FontAwesomeIcon></a>
                       <a  className="social"href={strYoutube}><FontAwesomeIcon icon={ faYoutube} className="socialIcon"></FontAwesomeIcon></a>
                       
                   </div>
                </div>
            </div>

            </div>

        </div>
    );
};

export default TeamDetails;