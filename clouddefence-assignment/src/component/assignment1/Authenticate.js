
const CLIENT_ID = "dc6f0058ec741e5d74cc";
// const CLINET_SECRET = "cd14ea5611c5943a28d102cfac652614cdfb17d8"

function Authenticate() {


  const Auth = async() => {
     window.location.assign("https://github.com/login/oauth/authorize?client_id=" + CLIENT_ID);
     const quiryString = window.location.search
    const urlParams = new URLSearchParams(quiryString);
    const codeParams = urlParams.get("code")
    localStorage.setItem('code', codeParams);
  }
  return (
    <div className='container'>
      <button type="button" className="btn btn-success btn-lg" onClick={Auth}><strong>Authenticate</strong></button>
    </div>
  )
}

export default Authenticate
