import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./New.css";
import Box from "./one/Box";
import Wrapper from "./one/Wrapper";
import Flexbox from "./one/Flexbox";
import Foot from "./one/Foot";
import One from "./two/One";
import Headertwo from "./two/Headertwo";
import Design from "./two/Design";
import Count from "./two/Count";
import Mother from "./Mother";
import Learnmore from "./two/Learnmore";
import Poverty from "./two/Poverty";
import ReactHooks from "./Click/ReactHooks";
import Sidebar from "./Click/Sidebar";
import Netflix from "./Click/Netflix";
import Passwordstrength from "./Click/Passwordstrength";
import Calc from "./Click/Calc";
import Store from "./Storeshi/Store";
import Username from "./usernameshi/Username";
import Welcome from "./usernameshi/Welcome";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./theme/Home";
import About from "./theme/About";
import Header from "./theme/Header";
import Wrapcontent from "./theme/Wrapcontent";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Wrapcontent>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/a" element={<About />} />
        </Routes>
      </BrowserRouter>
    </Wrapcontent>
  </StrictMode>
);
