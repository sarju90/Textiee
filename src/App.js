import { useState } from 'react/cjs/react.development';
import './App.css';
import Alert from './compontes/alert';
import Navbar from './compontes/Navbar';
import TextForm from './compontes/Textform';
 
function App() {



  const [mode, setmode] = useState('light');

  const [alert, setalert] = useState(null);

 const showAlert=(message,type)=>{
   setalert({
     msg:message,
     type:type,
    })
    setTimeout(() => {
      setalert(null);
    }, 1500);
  
  }

  const toggleMode=()=>{
   if(mode==='dark'){
     setmode('light');
     document.body.style.backgroundColor = 'white';
     showAlert ("Light Mode has been active","success");
     document.title='TextUtils - Light Mode'
   }
   else{
     setmode('dark')
     document.body.style.backgroundColor = '#042743';
     showAlert("Dark Mode has been active","success");
     document.title='TextUtils - Dark Mode'
   }
  }
  return (
    <>
    {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
    {/* <Navbar/> */}
    <Navbar title="TextUtils" Textabout="About" mode={mode} toggleMode={toggleMode} />
    <Alert   alert={alert}/>
    <div className="container my-3">
    <TextForm showAlert={showAlert} heading="Enter the text to analyze below"  mode={mode}/>
    </div>
    </> 
  );
}

export default App;
