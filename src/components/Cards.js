import React,{useState,useEffect} from 'react'
// import img from '../player-images'


function Cards() {

  const[data, setData]=useState([])


const apidata= ()=>{
let url ="https://api.npoint.io/20c1afef1661881ddc9c";
fetch  (url).then((res)=>{
  res.json()
.then((actualresponse)=>{
  setData(actualresponse.playerList)
 
})
})
}
console.log(data)



useEffect(()=>{
  apidata()
},[]);


  return (
<>
 {/* {
  data ? data.map((item) => (<ul><li>{item.Id}</li></ul>)): null
}  */}


{
<div>
{ data ? data.map((item) => <img  src="../player-images/63706.jpeg" alt="image not found" className='card_image'/> ) : null}
</div> }


</>
    
  )
}

export default Cards

//<img src={img.item.Id}/>