import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function PhoneDetails(props) {
    const [onePhone, setOnePhone] = useState(null)
    const {allPhones} = props
    const {id} = useParams()

    useEffect(()=> {
      setOnePhone(allPhones[id])
      
       

    },[id])


  

   
   
    if(!onePhone){
      return <div>...loading</div>
    }

    




  return (
    <div>

  
      
        <h2>{onePhone.name}</h2>
        <h2>{onePhone.price}</h2>
        <h2>{onePhone.description}</h2>

      
    
    </div>
  )
}

export default PhoneDetails