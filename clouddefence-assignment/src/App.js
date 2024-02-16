import './App.css';

import { useState } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route                          // this is for react router
} from "react-router-dom";
import Navbar from './component/Navbar';
import Home from './component/Home';
import Authenticate from './component/assignment1/Authenticate';
import Auth from './component/assignment2/Auth';
import axios from 'axios';

function App() {

  const [prompt, setPrompt] = useState('');
  const [conversation, setConversation] = useState([]);

  const CLIENT_ID = "dc6f0058ec741e5d74cc";

  const sendPrompt = async () => {
    if (!prompt) return;
    const userPrompt = `You: ${prompt}`;
    setConversation([...conversation, userPrompt]);
    try {
      const response = await axios.post('/api/chat', { prompt });
      const botResponse = `AI: ${response.data.message}`;
      setConversation([...conversation, userPrompt, botResponse]);
    } catch (error) {
      console.error('Error:', error);
    }
    setPrompt('');
  };


  const Auth = async() => {
    window.location.assign("https://github.com/login/oauth/authorize?client_id=" + CLIENT_ID);
    const quiryString = window.location.search
   const urlParams = new URLSearchParams(quiryString);
   const codeParams = urlParams.get("code")
   localStorage.setItem('code', codeParams);
 }


  return (
    <>



<div className='container'>
      <button type="button" className="btn btn-success btn-lg" onClick={Auth}><strong>Authenticate</strong></button>
    </div>









      {/* <Router>
        <Navbar title="HASH INDIA"
          Home="Home"
          Link="Link"
          About="About"
          Search="Search"
        />

        <Switch>

          <Route exact path="/">
            <Home />
            </Route>
            
          <Route exact path="/auth">
            <Authenticate />
          </Route>

          <Route  exact path="/chatBoat">
            <Auth/>
            </Route>
            

                    
     </Switch>
      </Router> */}
    </>
  );
}

export default App;
