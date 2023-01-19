import Header from './Components/Header';
import {Route , Routes} from 'react-router-dom';
import React from "react";
import  SignIn  from "./Components/SignIn";
import AddClothes from "./Components/AddClothes";
import ItemDetail from "./Components/ItemDetail";
import Clothes from "./Components/Clothes";
import Home from "./Components/Home";
function App() {
  const user = localStorage.getItem("email");
  return (
    <React.Fragment>
       <header>
             <Header/>
             </header> 
      <main>
      <Routes>
      <Route path ="/signIn" element={<SignIn/>} exact/>
      {user && <Route path ="/add" element={<AddClothes/>} exact/>}
      {user &&   <Route path ="/home" element={<Home/>} exact/>}
      {user &&  <Route path ="/clothes" element={<Clothes/>} exact/>}
      {user &&  <Route path ="/updateclothes/:id" element={<ItemDetail/>} exact/>}
        </Routes>
      </main>

    </React.Fragment>
  
  );
}

export default App;
