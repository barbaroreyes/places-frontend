import React from 'react'

const Display = ({places}) => {
  return (
          <div className="places">
           {places.map((item,i)=>{
            return (<div key={i} className="place">
                     <h1>{item.name}</h1>
                    <img src={item.img}  alt={item.name}/>
                    <p>{item.description}</p>
                    <button>edit</button>
                    <button>delete</button>

                    </div>)})}
                   </div>
  )
}

export default Display
