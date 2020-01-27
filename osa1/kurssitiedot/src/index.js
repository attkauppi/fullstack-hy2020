import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
//import * as serviceWorker from './serviceWorker';

const Header = (props) => {
    return (
        <h1>{props.name}</h1>
    )
}

const Content = (props) => {
    return (
        <div>       
            <p>
                {props.name1} {props.ex1}
            </p>
            <p>
                {props.name2} {props.ex2}
            </p>
            <p>
                {props.name3} {props.ex3}
            </p>
        </div>
    )
}

const Total = (props) => {
    return (
        <p>Number of exercises {props.number}</p>
    )
}


const App = () => {
    const course = 'Half Stack application development'
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14

   /*  const eka = {
        name: part1,
        exercises: exercises1
    }

    const toka = {
        name: part2,
        exercises: exercises2
    }

    const kolmas = {
        name: part3,
        exercises: exercises3
    } */


  
    return (
      <div>
        <Header name={course} />
        <Content name1={part1} ex1={exercises1} name2={part2} ex2={exercises2} name3={part3} ex3={exercises3}/>
        <Total number={exercises1 + exercises2 + exercises3} />
      </div>
    )
  }


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
