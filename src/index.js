import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./components/App";
import reportWebVitals from './reportWebVitals';
import {HashRouter as Router} from "react-router-dom"
import {Route, Routes} from "react-router";
import Canvas from "./components/Canvas";
import CanvasStateStore from "./binder/CanvasStateStore";

ReactDOM.render(
  <React.StrictMode>
      <Router>
          <Routes>
            <Route path='' element={<App/>} />
            <Route
                path="canvas"
                element={
                    <CanvasStateStore>
                        <Canvas/>
                    </CanvasStateStore>
                }
            />
          </Routes>
      </Router>
 </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
