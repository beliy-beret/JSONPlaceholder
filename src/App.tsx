import React from 'react';
import {Route, Routes} from "react-router-dom";
import AppLayout from "./components/AppLayout/AppLayout";
import Home from "./pages/Home/Home";
import Users from "./pages/Users/Users";
import Profile from "./pages/Profile/Profile";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="users" element={<Users />} />
        <Route path=":id" element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default App;
