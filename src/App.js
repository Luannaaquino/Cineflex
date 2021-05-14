import { BrowserRouter, Switch, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import { useState } from "react";

import Header from "./components/header"
import Home from "./components/home"
import MovieTime from "./components/movieTime"
import BuyTicket from "./components/buyTicket"
import Finish from "./components/finish"

export default function App() {
    const [inputName, setInputName] = useState("");
    const [cpf, setCpf] = useState("");
    const [successData, setSuccessData] = useState({});
    const peopleData = {
      name: inputName,
      cpf: cpf,
      ...successData,
    };


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
            <Route path="/session/:sessionId" exact>
                <BuyTicket
                    inputName={inputName}
                    setInputName={setInputName}
                    cpf={cpf}
                    setCpf={setCpf}
                    setSuccessData={setSuccessData}
                />
            </Route>
            <Route path="/success" exact>
                <Finish
                    peopleData={peopleData}
                    setInputName={setInputName}
                    setCpf={setCpf}
                    setSuccessData={setSuccessData}
                />
            </Route>
        </Switch>
    </BrowserRouter>
  );
}