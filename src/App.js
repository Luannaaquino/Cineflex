import { BrowserRouter, Switch, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import { useState } from "react";

import Header from "./components/header"
import Home from "./components/home"
import MovieTime from "./components/movieTime"

export default function App() {
   
    return (
    <BrowserRouter>
        <Header />
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/film/:filmId" exact>
                <MovieTime />
            </Route>
        </Switch>
    </BrowserRouter>
  );
}