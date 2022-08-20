import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './app/App';
import './index.css';
import 'react-vaadin-components/dist/css/core.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Contacts from "./features/contacts/Contacts";
import Dashboard from "./features/dashboard/Dashboard";
import {RecoilRoot} from "recoil";

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App/>}>
            <Route path="" element={<Contacts/>}/>
            <Route path="dashboard" element={<Dashboard/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>
);
