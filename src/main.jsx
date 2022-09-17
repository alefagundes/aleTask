import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import EditTask from './pages/EditTask'
import Details from './pages/Details'
import CreateTask from './pages/CreateTask'

//simple method pass url api to other pages components
const url = import.meta.env.VITE_API

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/edit/:id" element={<EditTask />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/create/" element={<CreateTask url={url} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
