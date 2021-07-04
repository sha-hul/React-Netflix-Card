import series from './series';
import Card from './Card';
import React from 'react';
// for future use
// let Suggest=()=>{
//     <>
//     <label name='Website'></label>
//     <input type="radio" name='Website' value=" Netflix Series" /><label>Netflix Series</label><br />
//     <input type="radio" name='Website' value=" Amazon Prime Series" /><label>Amazon Prime Series</label>
//   </>
//     }
let Netflix=()=>{
    return(
        <>
        <Card
        site={series[0].site}
        title={series[0].title}
        link={series[0].link}
        img={series[0].img}
        />
         <Card
        site={series[1].site}
        title={series[1].title}
        link={series[1].link}
        img={series[1].img}
        />
         <Card
        site={series[2].site}
        title={series[2].title}
        link={series[2].link}
        img={series[2].img}
        />
        </>)
}
let Amazon=()=>{
    return(
        <>
        <Card
        site={series[3].site}
        title={series[3].title}
        link={series[3].link}
        img={series[3].img}
        />
         <Card
        site={series[4].site}
        title={series[4].title}
        link={series[4].link}
        img={series[4].img}
        />
        </>)
}
let sug='Netflix Series'
const Condition=()=>{
if(sug=='Netflix Series'){
    return(
   <Netflix/>)
}
else{
    return(
   <Amazon/>)
}
}
export default Condition;
// export  {Suggest};