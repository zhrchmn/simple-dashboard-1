import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Newnavbar from "../component/newnavbar";
import Newsidebar from "../component/newsidebar";
import Tablelist from "../pages/Tablelist";
import Filltable from "../pages/FormData";
import Dashboard from "../pages/dashboard";
import { GlobalProvider } from "../component/GlobalContext";
import Navbar2 from "../component/navbar2";
import Footer from "../component/footer";

function Router(props) {
  return (
    <div>
      <BrowserRouter>
        <GlobalProvider>
          <Navbar2 />
          <div className="flex">
            <Newsidebar />
            <Routes>
              <Route exact path="/" element={<Dashboard />} />
              <Route exact path="/tablelist" element={<Tablelist />} />
              <Route exact path="/create" element={<Filltable />} />
              <Route exact path="/edit/:IdData" element={<Filltable />} />
            </Routes>
          </div>
        </GlobalProvider>
      </BrowserRouter>
    </div>
  );
}

export default Router;
