import { BrowserRouter, Switch, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import { useState } from "react";

import Header from "./components/header"
import Home from "./components/home"

export default function App() {
   
    return (
    <BrowserRouter>
        <Header />
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
        </Switch>
    </BrowserRouter>
  );
}