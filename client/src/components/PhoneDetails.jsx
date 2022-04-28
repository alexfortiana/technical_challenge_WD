import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function PhoneDetails(props) {
    const [onePhone, setOnePhone] = useState(null)
    // const {allPhones, setAllPhones} = props
    const {id} = useParams()

    useEffect(()=> {
       

    },[])


    // if(props.allPhones){
    //   const deatilPhone = props.allPhones.forEach((eachPhone, index)=> {
    //     if(id === index){
    //       return eachPhone[index] 
    //     }
        
    //   })
        
   
    //     console.log(deatilPhone)
    // }

    

    




  return (
    <div>

    PHONE DETAILS
    
    </div>
  )
}

export default PhoneDetails