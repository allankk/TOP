import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import React from 'react';

function App() {

  React.useEffect(() => {
    // resize the text areas to fit the content on first render
    let textAreas = document.querySelectorAll('textarea.description');

    textAreas.forEach(element => {
      element.style.height = element.scrollHeight + 4 + 'px';
    })
  }, []);

  return (
    <div className="App">
      <h1>H1 Hello</h1>
      <h2>H2 Hello</h2>
      <h3>H3 Hello</h3>
      <p>P Hello</p>

      <div className="main-container">
      <Header />
      <Experience />
      <Education />
      <Skills />
      </div>
      
    </div>
  );
}

export default App;
