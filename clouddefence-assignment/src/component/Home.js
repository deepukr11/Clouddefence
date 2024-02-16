import React from 'react'
import { useHistory } from 'react-router-dom';


function Home() {
    let history = useHistory();

    return (
        <div className='container'>
            <button type="button" className="btn btn-primary btn-lg mx-5" onClick={()=>{history.push("/auth")}}>Exercise 1</button>

            <button type="button" className="btn btn-primary btn-lg" onClick={()=>{history.push("/chatBoat")}}>Exercise 2</button>
        </div>
    )
}

export default Home
