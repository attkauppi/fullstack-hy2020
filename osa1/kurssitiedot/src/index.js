import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
//import * as serviceWorker from './serviceWorker';



// Tehtavan 1.3. sait tehtyä. Sitten lopettelit, koska et uskaltatnut
// tyontaa githubiin tehtavia, jotka olit tehnyt, mutta joita et ollut merkinnyt.
const Header = (props) => {
    return (
        <h1>{props.name}</h1>
    )
}

const Part = (props) => {
    return ( 
        <p>
            {props.name} {props.ex}
        </p>
    )
}

const Content = (props) => {
    console.log('props value is ', props)

    const parts = props.taulukko;

    const listItems = parts.map((part) =>
        <Part name={part.name} ex={part.exercises} />
        //<p>{part.name} {part.exercises}</p>
    );

    return (
        
        <div>
            {listItems}
        </div>
    )
}

const Total = (props) => {
    const number = props
    console.log('number: ', props)
    return (
        <p>Number of exercises {props.number}</p>
    )
}

const App = () => {
    const course = 'Half Stack application development'

    /* const part1 = 

    const part1 = 
    const exercises1 = 
    const part2 = 
    const exercises2 = 
    const part3 = 
    const exercises3 = 14 */

    const part1 = {
        name: 'Fundamentals of React',
        exercises: 10
    }

    const part2 = {
        name: 'Using props to pass data',
        exercises: 7
    }

    const part3 = {
        name: 'State of a component',
        exercises: 14
    }

    const t = [part1, part2, part3]

    const number = part1.exercises + part2.exercises + part3.exercises;
    console.log('number2: ', number)

    

    /* const toka = {
        name: part2,
        exercises: exercises2
    }

    const kolmas = {
        name: part3,
        exercises: exercises3
    }
 */

  
    return (
      <div>
        <Header name={course} />
        {/* <Content name1={part1} ex1={exercises1} name2={part2} ex2={exercises2} name3={part3} ex3={exercises3}/> */}
        <Content taulukko = {t}/>
        <Total number={number} />
      </div>
    )
  }


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
