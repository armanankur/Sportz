import React from 'react'
import './Card.css';

function Card(prop) {
  const { player } = prop;

  return (
      <div className = "card" key = {player.id}>
        <img className = "cardImg" src={require(`../player-images/${player.Id}.jpg`)} />
        <h3>
          {player.PFName}
        </h3>
        <div>
          <h3>Skill : &nbsp; <span>{player.SkillDesc}</span></h3>
        </div>
      </div>
  )
}

export default Card