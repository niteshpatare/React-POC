import React, { Suspense, Fragment } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { Header } from "./components/Header";
const About = React.lazy(() => import("./About"));
const AboutId = React.lazy(() => import("./components/AboutId"));
const App = React.lazy(() => import("./App"));
const RegisterForm = React.lazy(() => import("./components/RegisterForm"));
const NotFound = React.lazy(() => import("./NotFound"));
const Resign = React.lazy(() => import("./components/Resign"));
const Users = React.lazy(() => import("./components/Users"));

export const ThemeContext = React.createContext("light");
const Home = () => {
  return (
    <Fragment>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          Home
        </NavLink>
        &nbsp;|&nbsp;
        <NavLink
          to="about"
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          About
        </NavLink>
        &nbsp;|&nbsp;
        <NavLink
          to="register"
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          Register
        </NavLink>
        &nbsp;|&nbsp;
        <NavLink
          to="users"
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          Users
        </NavLink>
      </nav>
      <Header title="Cybage MIS" />
      <Suspense fallback="<div> Site loading up...">
        <ThemeContext.Provider value="dark">
          <Routes>
            <Route exact path="/" element={<App />} />
            <Route exact path="about" element={<About />}>
              <Route exact path=":aboutId" element={<AboutId />} />
              <Route exact path="resign" element={<Resign />} />
            </Route>
            <Route exact path="register" element={<RegisterForm />} />
            <Route exact path="users" element={<Users />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ThemeContext.Provider>
      </Suspense>
    </Fragment>
  );
};
export default Home;
