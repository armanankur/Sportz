import React, { useState, useEffect } from 'react'
import { get } from 'lodash';
import { API_URL } from '../utils';
import './index.css';
import Card from '../components/Card';

function PlayerList() {
  const [teamList, setTeamList] = useState([]);
  const [playerList, setPlayerList] = useState([]);

  useEffect(() => {
    fetch(API_URL).then(response => {
      response.json().then(res => {
        setPlayerList(get(res, 'playerList', []));
        setTeamList(get(res, 'teamList', []));
      }).catch(e => {
        setPlayerList([]);
        setTeamList([]);
      })
    })
  }, []);

  const displayPlayer = (player) => {
    return <Card player={player} />
  }

  return (
    <>
      <div className="playerList">
        {playerList.map((player) => displayPlayer(player))}
      </div>
    </>
  )
}

export default PlayerList;