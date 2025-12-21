import axios from "axios"
import { useEffect, useState } from "react"


const useApps = () =>{
    
    const [apps, setApps] = useState([])
    const [error, setError] = useState(null)
    useEffect(() =>{
        axios('../../data.json')
        .then(data =>setApps(data.data))
        .catch(err => setError(err))
        
    },[])
    return {apps,error}
};

export default useApps;