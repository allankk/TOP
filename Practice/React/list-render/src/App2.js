import './App.css';
import React from 'react';
import Overview from './components/Overview'


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: ['hello', 'hello 2'],
    };
    
    this.input = React.createRef();
  }

  handleSubmit = () => {
    this.setState(prevState => ({
      tasks: [...prevState.tasks, this.input.current.value]
    }))
  }

  render() {
    return (
      <div className="App">
        <input type="text" placeholder="task" ref={this.input} />
        <button type="button" onClick={this.handleSubmit}>Submit</button>
        <Overview tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
