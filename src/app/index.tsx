import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { Home } from './home.js';
import { About } from './about.js';
import './index.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import { Landing } from './landing.js';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <>
      {/* This is the alias of BrowserRouter i.e. Router */}
      <Router>
        <Routes>
          {/* This route is for home component 
          with exact path "/", in component props 
          we passes the imported component*/}
          <Route path="/" element={<Home/>}/>
            
          {/* This route is for about component 
          with exact path "/about", in component 
          props we passes the imported component*/}
          <Route path="/about" element={<About/>} />
            
           {/* This route is for about component 
          with exact path "/landing", in component 
          props we passes the imported component*/}
          <Route path="/landing" element={<Landing/>} />
            
          {/* If any route mismatches the upper 
          route endpoints then, redirect triggers 
          and redirects app to home component with to="/" */}
          
        </Routes>
      </Router>
    </>
  </React.StrictMode>,
);

export function hi(){
  console.log("hi");
}
