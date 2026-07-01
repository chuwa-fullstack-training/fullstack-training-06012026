import React from 'react';
import ReactDOM from 'react-dom/client';

class FrontendList extends React.Component{
    render(){
        return (
            <ul>
                <li>
                    Frontend is the part of the website that users can see and interact with.
                </li>
                <li>Frontend is also called <strong>client-side</strong>.</li>
                 <li>Frontend is built with HTML, CSS, and JavaScript.</li>
            </ul>
        )
    }
}

class App extends React.Component{
    render(){
        return (
            <div>
                <h2>What is Frontend?</h2> 
                <FrontendList/> 
            </div>
        )}
}

