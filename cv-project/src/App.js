import Navigation from './components/Navigation';
import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import React from 'react';
import { savePDF } from '@progress/kendo-react-pdf';

function App() {

  React.useEffect(() => {
    // resize the text areas to fit the content on first render
    let textAreas = document.querySelectorAll('textarea.description');

    textAreas.forEach(element => {
      element.style.height = element.scrollHeight + 6 + 'px';
    })
  }, []);

  const exportPDF = (e) => {
    const element = document.getElementById('main-container');
    element.classList.add('savepdf');

    savePDF( element, {
      paperSize: 'A4',
      margin: "0cm",
      fileName: 'cv.pdf',
      scale: 0.75,
    });

    element.classList.remove('savepdf');
  }

  return (
    <div className="App">
      <Navigation exportPDF={e => {exportPDF()}}/>

      <div className="main-container" id="main-container">
      <Header />
      <Experience />
      <Education />
      <Skills />
      </div>
      
    </div>
  );


}

export default App;
