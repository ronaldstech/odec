import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Mission from './pages/Mission';
import Contact from './pages/Contact';

import Newsletters from './pages/Newsletters';
import Reports from './pages/Reports';
import ImpactStories from './pages/ImpactStories';
import Donate from './pages/Donate';

// Admin Components
import AdminLogin from './pages/admin/AdminLogin';
import AdminLayout from './pages/admin/AdminLayout';
import Dashboard from './pages/admin/Dashboard';
import ManageStories from './pages/admin/ManageStories';
import ManageReports from './pages/admin/ManageReports';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/newsletters" element={<Newsletters />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/impact-stories" element={<ImpactStories />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/contact" element={<Contact />} />

          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLogin />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/admin/dashboard" element={<AdminLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="stories" element={<ManageStories />} />
              <Route path="reports" element={<ManageReports />} />
            </Route>
          </Route>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
