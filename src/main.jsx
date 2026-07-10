import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'

// Bootstrap's CSS must be imported once, before our own styles, so our
// overrides in index.css win the cascade.
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

import App from './App.jsx'

// HashRouter keeps all routing in the URL fragment (e.g. /CS571-WebProject_AJG/#/about).
// GitHub Pages never sees the part after '#', so deep links and refreshes always serve
// index.html and let React Router resolve the route client-side. No 404 workaround needed.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
)
