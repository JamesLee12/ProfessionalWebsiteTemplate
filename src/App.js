import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Resume from './components/Resume';
// import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import resumeData from './resumeData';

function App() {
  return (
    <div className="App">
      <Header resumeData={resumeData}/>
      <About resumeData={resumeData}/>
      <Resume resumeData={resumeData}/>
      {/* <Contact resumeData={resumeData}/> */}
      <Footer resumeData={resumeData}/>
    </div>
  );
}

export default App;
