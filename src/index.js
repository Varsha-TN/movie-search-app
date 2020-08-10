import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
import style from './style.css';
import SearchMovie from './searchMovie';


class Main extends React.Component{
  render(){
    return(
      <div className="container">
        <h1 className="title">React Movie Search</h1>
        <SearchMovie/>
      </div>
    );
  }
 
}

ReactDOM.render(<Main/>,document.getElementById('root'));

