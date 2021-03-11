import React from 'react';
import Team from '../Team/Team';
import Hooks ,{ useState,useEffect } from 'react';
import Banner from '../Bnner/Banner';

const Home = () => {
    const [team,setTeam]=  useState([])
    useEffect(() =>{
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            const teams=data.teams
            setTeam(teams)
           
            
        })
    },[])
    return (
        <div>

            <Banner></Banner>
            
                
               <div className="container">
                   <div className="row">
                   {  team.map(tm => <Team teams={tm}></Team>)}
                   </div>
               </div>
                
                
            
           
            
        </div>
    );
};

export default Home;