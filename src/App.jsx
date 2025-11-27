import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Languages from "./pages/languages/Languages";
import Login from "./pages/login/Login";
import Dashboard from "./pages/system/dashboard/Dashboard";
import PublicLayout from "./common/PublicLayout";
import System from "./pages/system/System";
import LearnIA from "./pages/system/learnia/LearnIA";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/lenguas" element={<Languages />} />
          <Route path="/login" element={<Login />} />
        </Route>

        <Route element={<System />} >
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/learnia" element={<LearnIA />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
