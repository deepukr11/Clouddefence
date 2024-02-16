import React from 'react'

const CLIENT_ID = "a4ad94a5345bad0aba65";

function Auth() {
    
    const Auth = async() => {
        window.location.assign("https://github.com/login/oauth/authorize?client_id=" + CLIENT_ID);
   
        const quiryString = window.location.search
       const urlParams = new URLSearchParams(quiryString);
       const codeParams = urlParams.get("code")
       console.log(codeParams);
     }
     return (
       <div className='container'>
         <button type="button" className="btn btn-success btn-lg" onClick={Auth}><strong>Authenticate</strong></button>
       </div>
  )
}

export default Auth
