import React from 'react';
import Hooks ,{ useState,useEffect } from 'react';
import { useParams } from 'react-router';
import './teamDeails.css'

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
            <h3>
              {teamInfo.strTeam}
              

            </h3>
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
                </div>
            </div>

            </div>

        </div>
    );
};

export default TeamDetails;