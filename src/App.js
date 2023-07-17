import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Signin from "./Pages/Sigin";
import UserProfile from "./Pages/UserProfile";
import State from "./Pages/State";
import Field from "./Pages/Field";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Admin from "./Pages/Admin";
import Vendor from "./Pages/Vendor";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/" element={<Signin />} />
          <Route path="/dashboard" element={<UserProfile />} />
          <Route path="/:state" element={<State />} />
          <Route path="/feild/:id" element={<Field />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/vendor" element={<Vendor />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
