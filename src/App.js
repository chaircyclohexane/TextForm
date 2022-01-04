import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import {useState} from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if(mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
    {/*<BrowserRouter>*/}
   <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
   <div className="container my-3">
   {/*<Routes>
        <Route exact path="/" element={<TextForm key="textform" heading="Enter text to analyze" mode={mode} />} />
        <Route exact path="/about" element={<About key="about" />} />
   </Routes> */}
   <TextForm heading="Enter text to analyze" mode={mode} />
   {/*<About />*/}
  </div>
  {/*</BrowserRouter>*/}
   </>
  );
}

export default App;
