import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';
import './index.css';
import 'react-vaadin-components/dist/css/core.css';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);
