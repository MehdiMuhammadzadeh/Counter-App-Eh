import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import TableButton from "./components/TableButton";
import CounterProvider from "./context/Provider";
import Counter from "./pages/Counter";
import Posts from "./pages/Posts";
import Users from "./pages/Users";
// import Buttonn from "./components/Buttonn";

const App = () =>{
  return (
    <BrowserRouter>
     <Header />
    <Routes>
      <Route path="/" element={
        <Counter />
      }/>
      <Route path="/posts" element={<Posts />}/>
      <Route path="/users" element={<Users />}/>
    </Routes>
    </BrowserRouter>
  )
}


export default App;
        // <div className="m-auto text-center">
        //   <Header />
        //   <h1 className="m-4 d-inline-block bg-primary text-white rounded p-3">React Counter</h1>
        //   <TableButton />
        // </div>