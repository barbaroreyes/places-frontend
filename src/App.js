import React,{useState,useEffect} from 'react'
import {Switch,Route,Link} from 'react-router-dom'
import Display from "./components/display"
import Form from "./components/form"
import './App.css';

function App() {
 const [places , setPlaces] = useState([])
 const emptyPlace = {
  name : '',
  img: "",
  description: ""

}

const [selectedPlace, setSelectedPlace] = useState(emptyPlace)
 const url = 'http://localhost:4000'
 
 const getPlaces = ()=> {
   fetch(url + '/places/')
   .then((response)=>response.json())
   .then((data)=>{
    setPlaces(data)
    
   })
   
 }
 useEffect(()=>{
   getPlaces()
 },[])

 const handleCreate = (newplace)=> {
  fetch(url + '/place/',{
    method : "POST",
    headers: {
      "Content-Type": "application/json",
   },
    body: JSON.stringify(newplace)
  })
  .then(()=> { getPlaces()})
  }

//   const handleUpdate = (place) => {
//     fetch(url + "/place/" + place._id, {
//       method: "PUT",
//       headers: {
//         "Content-Type":"application/json"
//       },
//       body: JSON.stringify(place)
//     })
//     .then(() => { getPlaces()})
//   }
//   const selectPlace = (place) => {
//     setSelectedPlace(place)
//   }
  
//   const  deletedPlace = (place)=>{
//   fetch(url + "/place/" + place._id , {
//     method: 'DELETE',
  
//   }).then(()=> { getPlaces()})
//   }


  return (
    <div className="App">
      <h1>Places to Visit</h1>
      <Link to ='/create'>
        <button>add new place</button>
      </Link>
      
      <Switch>
        <Route 
        exact
         path="/"
        render= {(rp) => 
        <Display  
        {...rp}
        places={ places}
        />}
        />
           {/* <Route
            exact
            path="/create"
            render={(rp) => (
              <Form
                {...rp}
                label="create"
                place={emptyPlace}
                handleSubmit={handleCreate}
              />
            )}
          /> */}

      </Switch>
      
    </div>
  );
}

export default App;
