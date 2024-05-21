import React, { Suspense, lazy, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Header from './components/Header';

const HomePage = lazy(() => import('./components/HomePage'));
const Portfoliopage = lazy(() => import('./components/Portfoliopage'));
const ProjectsPage = lazy(() => import('./components/ProjectsPage'));
const Login = lazy(() => import('./components/Login'));
const Register = lazy(() => import('./components/Register'));

const App = () => {
  const [token, setToken] = useState(null);

  return (
    <Router>
      <div className="flex h-screen">
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/portfolio" element={<Portfoliopage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/login" element={<Login setToken={setToken} />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
};

export default App;
