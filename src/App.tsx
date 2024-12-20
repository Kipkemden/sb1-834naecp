import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/layout/Header';
import Hero from './components/home/Hero';
import Features from './components/home/Features';
import Testimonials from './components/home/Testimonials';
import Pricing from './components/home/Pricing';
import Footer from './components/layout/Footer';
import Login from './pages/Login';
import Signup from './pages/Signup';
import DashboardLayout from './components/dashboard/DashboardLayout';
import Overview from './pages/dashboard/Overview';

const Landing = () => (
  <div className="min-h-screen bg-white">
    <Header />
    <div className="pt-16">
      <Hero />
      <Features />
      <Testimonials />
      <Pricing />
      <Footer />
    </div>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Overview />} />
          <Route path="properties" element={<div>Properties</div>} />
          <Route path="tenants" element={<div>Tenants</div>} />
          <Route path="maintenance" element={<div>Maintenance</div>} />
          <Route path="reports" element={<div>Reports</div>} />
          <Route path="settings" element={<div>Settings</div>} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;