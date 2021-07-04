import React from 'react';

function Card(props){
    return(
      <>
      <div className='cards'>
        <div className='card'>
          <img src={props.img} alt='Netflix Series'/>
          <div className='card_title'>{props.title}({props.site})</div>
          <a href={props.link} target='_blank'>
            <button className='watchNow'>watch</button>
          </a>
        </div>
      </div>
      </>
    )
  }
  export default Card;