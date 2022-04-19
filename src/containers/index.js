import React, { useState, useEffect } from 'react'
import { get } from 'lodash';
import { API_URL } from '../utils';
import './index.css';
import Card from '../components/Card';

function PlayerList() {
  const [displayList, setDisplayList] = useState([]);
  const [playerList, setPlayerList] = useState([]);

  useEffect(() => {
    fetch(API_URL).then(response => {
      response.json().then(res => {
        setPlayerList(get(res, 'playerList', []));
        setDisplayList(get(res, 'playerList', []));
      }).catch(e => {
        setPlayerList([]);
        setDisplayList([]);
      })
    })
  }, []);

  const displayPlayer = (player) => {
    return <Card player={player} />
  }

  const filterElements = (searchString) => {
    const filtered = playerList.filter((player) => {
      return (player.TName.toLowerCase().startsWith(searchString)) || (player.PFName.toLowerCase().startsWith(searchString))
    });
    return filtered;
  }

  const handleSearchange = (e) => {
    const searchString = e.target.value;
    const updatedList = filterElements(searchString.toLowerCase()) || playerList;
    setDisplayList(updatedList);
  }

  return (
    <>
      <input onChange={(e) => handleSearchange(e)} type="search" placeholder="Name / Team" />
      
      <div className="playerList">
        {displayList.map((player) => displayPlayer(player))}
      </div>
    </>
  )
}

export default PlayerList;