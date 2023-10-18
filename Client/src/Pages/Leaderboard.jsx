import React, { useEffect, useState } from "react";
import axios from "axios";
import "./CSSFiles/Leaderboard.css";
import v1 from "../Videos/leaderboard.mp4";
import Menubar from "../Components/Menubar_afterlogin";
import { useLocation } from "react-router-dom";

function Leaderboard() {
  const location = useLocation();

  const [leaderboardData, setLeaderboardData] = useState([]);
  const [searchUsername, setSearchUsername] = useState("");

 
  useEffect(() => {
    const keyname = location.state.keyname;
    console.log(`http://localhost:5000/marksets/${keyname}`);
    
    axios
      .get(`http://localhost:5000/marksets/${keyname}`)
      .then((response) => {
        if (response.data) {
          const sortedData = response.data.marks.sort((a, b) => b.marks - a.marks);
  
     
          let currentRank = 1;
  
          const rankedData = sortedData.map((entry, index) => {
            if (index > 0 && entry.marks < sortedData[index - 1].marks) {
          
              currentRank++;
            }
            return {
              ...entry,
              rank: currentRank,
            };
          });
  
          setLeaderboardData(rankedData);
        } else {
          setLeaderboardData(null);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [location.state.keyname]);

  

  const handleSearchChange = (event) => {
    setSearchUsername(event.target.value);
  };

  const filteredData = leaderboardData.filter((entry) =>
    entry.username.toLowerCase().includes(searchUsername.toLowerCase())
  );

  return (
    <div className="background_leaderboard">
      <Menubar />
      <video autoPlay muted loop>
        <source src={v1} type="video/mp4" />
      </video>
      <div className="box_leaderboard">
        <center>
          <h1 style={{ color: "white", marginTop: "20px" }}>Leaderboard</h1>

          <div>
            <input
              type="text"
              placeholder="Search by Username"
              value={searchUsername}
              onChange={handleSearchChange}
              style={{height:"40px",borderRadius:10,padding:10}}
            />
          </div>

          <table className="styled-table">
            <thead>
              <tr>
                <th>Rank</th>
                <th>Username</th>
                <th>Marks</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((entry) => (
                <tr key={entry._id}>
                  <td>{entry.rank}</td>
                  <td>{entry.username}</td>
                  <td>{entry.marks}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </center>
      </div>
    </div>
  );
}

export default Leaderboard;
