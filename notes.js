/**
 * TODO: Destructuring props
 * TODO: class components
 */

//FIXME: REACT JS JOURNEY
//?Rect is a JS library that was released in 2013 by facebook and is used to create UI

//TODO: JSX 
/**
 * *Javascript XML allows us to write html elements in javascript. Below is an example of js XML
 */
let header = <h1>This a JSX header</h1>
const header2 = (
    <div>
        <h1>Hello word</h1>
        <h2>I am a div</h2>
    </div>
)
//*if we have more than one jsx, it is necessary to wrap them inside an outer tag else the jsx is invalid
//?commenting a jsx - when commenting JSX, it is necessary to wrap the comment inside curly braces 
{
/*const header3 = (
    <div>
        <h1>Hello word</h1>
        <h2>I am a div</h2>
    </div>
) */}

const header3 = (
    <div>
        {/* <h1>Hello word</h1> */} //!JSX COMMENTING IN ONE LINE
        <h2>I am a div</h2>
    </div>
)

//METAMASK -false oblige gold print ivory west pill one bean length frame execute

//?What is a single page application in react?
//A single-page application (SPA) is a web application that updates its content dynamically without reloading the whole page. In React, a single-page application refers to an application built using the React library that follows these principles for a fast and dynamic user experience.

//!REQUIREMENTS 
/**
 * *Install Node - A runtime environment that allows js to run on the server
 */

//?What is a module
//A single or multiple functions that can be imported or exported when needed
//?What is a package
//It is a module or a collection of modules

//TODO: COMPONENTS
//Two types
/**
 * (i)Functional
 * (ii)Class
 */
//?A component name should start with an upper case and if it is two lettered then we use CamelCase. Components returns JSX

//TODO: PROPS(Properties)
/**
 * -Props is used to pass data from one component to another component mostly from parent component to child components. Apart from integers and strings, we can also pass booleans as props
 */

//We can modify an array in a JSX as follows
const stack = (props.user.techStack)
const stackList = stack.map((item) => <li>{item}</li>)

//A 2D array can be modified as follows 

const prof = props.skills2.map((arr)=><li>{arr[0]} - {arr[1]}</li>)

//TODO: KEYS
/**
 * The key prop is used to provide a unique identifier for each item in an array when it is being rendered in a list in React. It is used by React to keep track of the items in the list, and to determine which items have changed, added, or removed in order to efficiently update the UI.
 */

const prof2 = props.skills2.map((arr)=><li key={arr}>{arr[0]} - {arr[1]}</li>)
const city = props.obj.map((item) => {
    return <li key={item.id} >{item.name} - {item.city}</li>
})

//*Destructuring enhances code readability and makes the code clean

//TODO - CLASS COMPONENTS
/**
 * When creating class components, we need to import react and component from react 
 * The class then needs to extend the component 
 * Finally we create a render method that returns null or some jsx
 */

//?HOW DO WE ACCESS PROPS IN CLASS COMPONENTS
/**
     * To access props in class components, unlike the functional components we don't need to pass props as argument, it is passed automatically. We do {this.props.name}
 */

//FIXME: STATES
/**
 * *We access states in class components using this.state.name
 * *we can then modify the state using this.setState({count: this.state.count-1}) <- Just an example
 */