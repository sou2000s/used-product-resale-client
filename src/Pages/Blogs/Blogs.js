import React from 'react';
import Footer from '../../Components/Footer/Footer';

const Blogs = () => {
    return (
        <div >
        <div className="grid md:grid-cols-3 mt-4 md:ml-10 gap-10 mb-7">
    
    
          <div className="md:w-96  border-2 p-2 border-black rounded-md">
            <h1 className="text-2xl">What are the different ways to manage a state in a React application?</h1>
            <p className='mt-4'>
            In React apps, there are many ways to handle the state. <br />

           <strong> First of all</strong> we can handle state with react hooks like useState.It is a great way to handle state in react <br />
            <strong>Web Storage</strong> :The second option is to store the state in the browser via web storage. This is useful when we want to persist state between reloads and reboots. Examples include cookies, local storage, and IndexedDB.We avoid storing sensitive data in the browser since the user may access the app on a shared machine. Some examples of where web storage might be most useful include storing a user’s shopping cart, saving partially completed form data or storing JWT token in HttpOnly Cookie. <br />
            <strong>Lifted state</strong>: define the state in the parent component. Often, the same state is used across multiple components. In those cases, it is useful to lift the state to a common parent. The lifting state is a two‑step process. First, we declare the state in a common parent component, and then we pass the state down to child components via props. This pattern should be considered any time a few related components need to use the same state. The lifting state avoids duplicating states in multiple components. It helps to assure that our components all consistently reflect the same state.
            <strong>TanStack Query</strong>: Now  a days it is very popular among developers. It is very powerfull and good state mangement tool in react.
            This is the some way of state mangement in react . 
            </p>
          </div>
          <div className="md:w-96  border-2 p-2 border-black rounded-md">
            <h1 className="text-2xl">How does prototypical inheritance work?</h1>
            <p className='mt-4'>
                In javascript all objects are inheritant fron new Object(). If you declare two object they all came from new Object()(Parent). From this parent all objects(children) are created.Lets declare two object: <br />
                const obj = {} , const object2 = {} <br />
                obj.__proto__ === object2.__proto__  result is true. <br />
                Thats how it works.

            </p>
          </div>
          <div className="md:w-96    border-2 p-2 border-black rounded-md">
            <h1 className="text-2xl">What is a unit test? Why should we write unit tests?</h1>
            <p className='mt-4'>
            Unit Testing is a testing method that tests an individual unit of software in isolation. Unit testing for React Apps means testing an individual React Component. <br />

            It is very helpfull its helps you to under stand all the react app components individually functionality <br />
            some of the reason why you should write unit test : <br />
            <ul>
                <li>Quality of code: Unit testing significantly improves the quality of the code. It helps developers to identify the smallest defects that can be present in the units before they go for the integration testing.</li>
                <li>Smooth Debugging: The debugging process is very simplified by doing unit testing. If a certain test fails, then only the latest changes that have been made to the code need to be debugged.</li>
                <li>Reduction in cost: When bugs are detected at an early stage, through unit testing, they can be fixed at almost no cost as compared to a later stage, let’s say during production, which can be really expensive.</li>
            </ul>

            </p>
          </div>
          <div className="md:w-96  border-2 p-2 border-black rounded-md">
            <h1 className="text-2xl"> React vs. Angular vs. Vue?</h1>
            <p className='mt-4'>
            React is a UI library, Angular is a fully-fledged front-end framework, while Vue.js is a progressive framework. <br />

            <strong>structure</strong> <br />
           <strong> Angular</strong> is built entirely in Typescript and every project on Angular is structured in modules, components and services. At least, each module must have a root module and a root component. <br />
         
           <strong>React</strong> doesn’t propose a specific structure to be followed, and with only a few lines of code you can have a simple React application. The smallest React example could be something like this: const root = ReactDOM.createRoot <br /> (document.getElementById('root')); <br />
           root.render(<h1>Hello world</h1>)
            </p>
          </div>
          
          </div>
         

         <Footer/>
        </div>
    );
};

export default Blogs;