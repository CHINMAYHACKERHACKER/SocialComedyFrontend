import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import AfterLoader from "./Loader/AfterLoader.js";
const Sign = lazy(() => import("./Sign/sign.js"));
const Login = lazy(() => import("./Login/login.js"));

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<div><AfterLoader /></div>}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/sign" element={<Sign />} />
            <Route path="/LOADER" element={<AfterLoader />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  )
}

export default App;
