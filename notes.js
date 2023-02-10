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