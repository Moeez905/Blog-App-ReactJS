

import React, {useEffect, useState } from 'react';



import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from "./components/login/Login";
import Register from "./components/register/Register";  
import Home from './components/pages/home/Home';
/*import Cards from './components/cards/Cards';
import { Link } from 'react-router-dom';
import Post from './components/post/Post';
import Details from './components/details/Details'; */
import Footer from './components/footer/Footer';
import Details from './components/details/Details';

import TopBar from './components/TopBar/Navbar';

import { Provider } from 'react-redux';

import store from './store';



const App = () => {

  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchData(); 
  }, []);

  const fetchData = async () => {
    await fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
   .catch(err => {  
    console.log(err);
   })
  }

  const onAdd = async (name,email) => {
    await fetch('https://jsonplaceholder.typicode.com/users',  {
  method: 'POST',
  body: JSON.stringify({
    name: name,
    email: email,
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  }
})
.then((res)=> {
  if(res.status === 201){
    return
  }else{
    return res.json();
  }
})
.then((data) => {
  setUsers((users) => [...users,data]);
})
.catch((err) => {
  console.log(err);
})
}



  return (
      <Provider store={store}>
      <Router>
        <TopBar />

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        
        <Footer />
      </Router>
    </Provider>
    
    
  );
}

export default App;
