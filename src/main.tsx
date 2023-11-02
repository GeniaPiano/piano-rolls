import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import './index.css'
import {SelectedRollProvider} from "./providers/SelectedRollAndViewProvider";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <SelectedRollProvider>
        <App />
      </SelectedRollProvider>
  </React.StrictMode>,
)
