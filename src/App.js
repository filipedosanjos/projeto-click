import './App.css';
import Home from './pages/Home'
import Results from './pages/Results'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';



  function App() {
    return (
     <Router>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/results" element={<Results />}/>
        </Routes>
     </Router>      
       
    );
  }


export default App;
