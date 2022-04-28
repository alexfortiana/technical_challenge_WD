import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import PhoneDetails from '../components/PhoneDetails'


function PhonesList() {
    const [ allPhones, setAllPhones] = useState(null)
    const {id} = useParams()

    useEffect(()=> {
        getAllPhones()
    }, [])

    const getAllPhones = async () => {
        const response = await axios.get("http://localhost:5000/api/telephones")
        setAllPhones(response.data)
    }

    

    if(!allPhones){
        return <div>...loading</div>
    }


  return (
    <div className='flexbox'>
    <div>

    {allPhones.map((eachPhone) => {
        return (
            <div key={eachPhone.id}>
            {/* <h1>{eachPhone.price}</h1>
            <h1>{eachPhone.color}</h1>
            <h1>{eachPhone.description}</h1> */}
            <Link to={`/${eachPhone.id}`}>{eachPhone.name}</Link>
            </div>
   
            )

    })}

    </div>

    <div>

    {id && <PhoneDetails allPhones={allPhones}/>}

    </div>



    
    
    
    </div>
  )
}

export default PhonesList