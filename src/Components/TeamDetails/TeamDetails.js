import React from 'react';
import Hooks ,{ useState,useEffect } from 'react';
import { useParams } from 'react-router';

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

   
    return (
        <div>
            <h3>
              {teamInfo.strTeam}
              

            </h3>
            <img src={teamInfo.strTeamBanner}></img>

        </div>
    );
};

export default TeamDetails;