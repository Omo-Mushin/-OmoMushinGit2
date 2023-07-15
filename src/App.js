import React, { Component } from 'react';
// import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import NavBar from './components/NavBar';
import Counters from './components/counters';

class  App extends Component  {
  state = {
    items: [
        { id : 1, value : 0},
        { id : 2, value : 0},
        { id : 3, value : 0},
        { id : 4, value : 0 },
    ]
} 
handleDelete = counterId => {
    console.log('Event Handler Called',counterId)
    const items = this.state.items.filter(i => 
        i.id !== counterId)
    this.setState({items : items})
}

handleReset = () => {
    const items = this.state.items.map(i => {i.value = 0;
        return i});
    this.setState({ items : items})
}

handleIncrement = (item) => {
    const items = [...this.state.items];
    const index = items.indexOf(item);
    items[index] = {...item}
    items[index].value++;
    this.setState({items})
}
handleRemove = (item) => {
  const items = [...this.state.items];
  const index = items.indexOf(item);
  items[index] = {...item};
  items[index].value=items[index].value - 1;
  this.setState({items})

}
   
render() {
  return (
    <React.Fragment>
      
        <NavBar totalCounters={this.state.items.filter(c => c.value !== 0).length}/>
          <main className='container'>
                <Counters onReset={this.handleReset} onDelete={this.handleDelete} 
                onIncrement={this.handleIncrement} onRemove={this.handleRemove} items={this.state.items}/>
        </main>
            
         </React.Fragment>
          );
        }
}
;
export default App;
  
        
      












      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <span>
          <span>Lets Build a react App </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header> */}
    
 