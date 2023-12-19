import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  const [mode, setTabDarkMode] = useState('light');
  const [alert, setAlert] = useState();

   const showAlert = (message, type )=> {
      setAlert({
        msg: message,
        type: type
      
      
         })

           setTimeout(( )=>{ setAlert(null);}, 100)
       }

  
  const toggleMode = ()=>{
    if( mode === 'light'){
      setTabDarkMode('dark');
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      showAlert("Dark mode has been enabled", "success");
      //accordionExample.style.backgroundColor = "black";
      //accordionExample.style.color = "white";
      //document.getElementById(accordionExample) = ("backgroundColor", "black");
      //var myElement = document.getElementById("accordionExample");

  // Check if the element exists
  //if (myElement) {
    // Apply styles using JavaScript
    //myElement.style.backgroundColor = "black";
    //myElement.style.color = "white";
    // Add more style manipulations as needed
  //}
  
     
    } else{
      setTabDarkMode('light');   
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
       showAlert("light mode has been enabled", "success");
      
    }
  }


  return (
    <>
     <Router>
   
<Navbar title="Text Analyzer" mode={mode}  toggleMode={toggleMode} />
 <Alert aler={alert} ></Alert> 
<div className="container">

<Routes>
        <Route path="/" element={<TextForm heading="Enter the text here" showAlert={showAlert} mode={mode}  toggleMode={toggleMode} /> } />
        <Route path="/about" element={<About />} />
        
      </Routes>
 
</div>
</Router>
    </>
    
  );
}

export default App;
