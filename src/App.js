import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import {Routes, Route, Navigate} from 'react-router-dom';
import Home from "./Pages/Home";
import Navigation from "./Pages/Navigation";
import Dashboard from "./Pages/Dashboard";


const App = () => {
  const {transactions} = useSelector(state => state).transactions;
  useEffect(() => {
    localStorage.setItem("transactions",  JSON.stringify(transactions));
  }, [transactions]);

  return (
    <div>
      <Navigation/>
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/Home" replace/>}/>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/Dashboard" element={<Dashboard/>}/>
        </Routes>
      </main>
    </div>
  );
};

export default App;
