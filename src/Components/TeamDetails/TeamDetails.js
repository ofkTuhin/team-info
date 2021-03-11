import React from 'react';
import Hooks ,{ useState,useEffect } from 'react';
import { useParams } from 'react-router';
import './teamDeails.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, } from '@fortawesome/free-solid-svg-icons'
import { faFacebook} from '@fortawesome/free-brands-svg-icons'


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
    },[])
    const {intFormedYear,strTeamBanner,strCountry,strSport,strGender,strTeamFanart4}=teamInfo

   
    return (
        <div>
            
              
            <img src={strTeamBanner}></img>

            <div className="team-info">
            <div className="container">
                <div className="row">
                   <div className="info" >
                      <div className="container">
                          <div className="row">
                          <div className="col-lg-6 col-sm-12">
                           <div className="teamDetails">
                               <p>Founded:{intFormedYear}</p>
                               <p>Country:{strCountry}</p>
                               <p>Sport type: {strSport}</p>
                               <p>Gender: {strGender}</p>
                           </div>
                       </div>
                       <div className="col-lg-6 col-sm-12">
                           <div className="teamImage">

                               <img src={strTeamFanart4}></img>

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
                   
                       <a href="#" className="social"><FontAwesomeIcon icon={ faFacebook} className="icon"></FontAwesomeIcon></a>
                       
                   </div>
                </div>
            </div>

            </div>

        </div>
    );
};

export default TeamDetails;