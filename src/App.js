import logo from './logo.svg';
import './App.css';
import Particles from 'react-particles-js';


function App() {
  return (
    <div className="App">
     <Particles
    params={{
	    "particles": {
	        "number": {
	            "value": 150
	        },
	        "size": {
	            "value": 3
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        }
	    }
	}} 
  height="100vh"
  // width="40vw"
  />
v3.3.0
    </div>
  );
}

export default App;
