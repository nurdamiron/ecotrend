// src/App.jsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ContainerProvider } from './context/containerContext';
import { Layout } from './components/layout/layout';
import { Dashboard } from './pages/Dashboard';
import { Statistics } from './pages/statistics';
import { Settings } from './pages/settings';
import { About } from './pages/about';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <ContainerProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/stats" element={<Statistics />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Layout>
      </ContainerProvider>
    </Router>
  );
}

export default App;