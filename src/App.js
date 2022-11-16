
import React ,{useEffect,useState}from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.js";
import socketClient from 'socket.io-client';
// import AddProduct from "./pages/AddProduct.js";
import UpdateTask from "./pages/updateTask.js";
// import ErrorPage from "./pages/ErrorPage.js";


const App = () => {

  
   
// var io = require('socket.io-client');
// var socket = io.connect('http://localhost:8080', {reconnect: true});

// // Add a connect listener
// socket.on('connect', function (socket) {
//     console.log('Connected!');
// });
// socket.emit('CH01', 'me', 'test msg');
 
//  const socket = socketClient("http://localhost:4000");
// socket.on('connect', function (socket) {
//     console.log('Connected!');
// });

// Add a connect listener


  return (
    // <div>Tirawat</div>
    <Router>
      <Routes>
        <Route path="/"element={<Home />} />
        <Route path="/home"element={<Home />} />
        {/* <Route path="/add"element={<AddProduct />} /> */}
        <Route path="/product/:id"element={<UpdateTask />} />
        {/* <Route path="*"element={<ErrorPage />} /> */}
       
     </Routes>
    </Router>
  );
}

export default App;