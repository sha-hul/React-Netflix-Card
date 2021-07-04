import React from 'react';
// import series from './series';
// import Card from './Card'
import Condition from './Condition';
// import {Suggest} from './Condition';
// let split=(val)=>(
//       <Card
//       site={val.site}
//       title={val.title}
//       link={val.link}
//       img={val.img}
//       />
//     )
function App(){
    return (
      <>
      <h1 className='heading' style={{textAlign:'center'}}>Netflix Series 🎞️</h1>
      {/* {series.map(split)} */}
      <Condition/>
      </>
      )
}
export default App;