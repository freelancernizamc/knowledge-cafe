import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1 className='text-5xl text-center text-yellow-500 bg-black'>Question & Answer Section</h1>
            <h2 className='text-2xl text-center font-bold text-green-600'>Q1: Props vs state</h2>
            <h2 className='text-2xl ml-10 font-bold'>Ans:  props and state are two important concepts in React which allow manage data in components.props and state are both important concepts in React for managing data within components. Props are used to pass data down from parent components to child components and are immutable, while state is used to manage data internally within a component and is mutable.</h2>
            <h2 className='text-2xl text-center font-bold text-rose-600'>Q2: How does useState work?</h2>
            <h2 className='text-2xl ml-10 font-bold'>Ans: The useState hook can be used multiple times within a component to manage multiple state variables. It is a built-in React hook that allows functional components to manage state, which is a way of storing and updating data that can change over time. The useState hook returns an array with two elements: the current state value and a function to update the state.</h2>
            <h2 className='text-2xl text-center font-bold text-blue-600'>Q3: Purpose of useEffect other than fetching data.</h2>
            <h2 className='text-2xl ml-10 font-bold'>Ans: The Purpose of useEffect other than fetching data are as follows:
                <ul>
                    <li>Updating the title or metadata of the page</li>
                    <li>Setting up event listeners or subscriptions</li>
                    <li>Updating third-party libraries or services</li>
                </ul>
            </h2>
            <h2 className='text-2xl text-center font-bold text-pink-600'>Q4: How Does React work?</h2>
            <h2 className='text-2xl ml-10 font-bold'>Ans: React is a JavaScript library which  using a component-based approach. Its work following way:
                1. Components: React applications are built using components, which are reusable pieces of code that encapsulate both the UI and the logic for a particular feature or piece of functionality.
                2. Virtual DOM: React uses a virtual DOM (Document Object Model) which is a lightweight representation of the actual DOM.
                3. Props and State: Components can receive data from their parent components through props, which are essentially parameters that are passed in when the component is created.
                4. Rendering: When a component is created or updated, React calls the render method.
                5. Event handling: React components can respond to user events, such as clicks or key presses.
            </h2>
        </div>
    );
};

export default Blog;