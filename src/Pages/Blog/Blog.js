import React from 'react';

const Blog = () => {
    return (
        <>
            <div tabindex="0" className="collapse group">
                <div className="collapse-title bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
                    How will you improve the performance of a React Application?
                </div>
                <div className="collapse-content bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
                    <p> 1. Try Keep Your Components Small.
                        2. Try to  Use Functional Components.
                        3. Never Use Indexes as a Key Prop.
                        4. Never Use Props in Initial State.
                        5. First Initialize Component State Without Class Constructor.
                        6. Reduce The Use of Stateful Components</p>
                </div>
            </div>


            <div tabindex="0" className="collapse group">
                <div className="collapse-title bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
                    What are the different ways to manage a state in a React application?
                </div>
                <div className="collapse-content bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
                    <p>1. Local State
                        2. Redux
                    </p>
                </div>
            </div>


            <div tabindex="0" className="collapse group">
                <div className="collapse-title bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
                    How does prototypical inheritance work?
                </div>
                <div className="collapse-content bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
                    <p>JavaScript is a class-free, object-oriented language, and as such, it uses prototypal inheritance instead of classical inheritance.</p>
                    <p>Inheritance in JavaScript describes the notion that one object’s methods/properties are available to be used via another object. The way this happens is that the second object is connected to the first via the `[[Prototype]]` system. When you try to use the method/property on the second object, even thought it doesn’t exist there, you have the ability to do so, because the second object “delegates” to the first object, that does have the desired property/method.</p>
                </div>
            </div>


            <div tabindex="0" className="collapse group">
                <div className="collapse-title bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
                    Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts
                </div>
                <div className="collapse-content bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
                    <p>Because that will affect on rerendering</p>
                </div>
            </div>


            <div tabindex="0" className="collapse group">
                <div className="collapse-title bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
                    You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?
                </div>
                <div className="collapse-content bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
                    <p>first i'll map the products. Then filter the name</p>
                </div>
            </div>


            <div tabindex="0" className="collapse group">
                <div className="collapse-title bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
                    What is a unit test? Why should write unit tests?
                </div>
                <div className="collapse-content bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
                    <p>The main purpose behind this is to inspect that all the separate parts are performing as intended. A unit is also called the smallest possible component of software that can be tested and checked. </p>
                </div>
            </div>
        </>
    );
};

export default Blog;