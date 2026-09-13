import { useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Work from './pages/Work';
import Contact from './pages/Contact';

function ScrollManager(){const {pathname}=useLocation();useEffect(()=>{window.scrollTo({top:0,behavior:'instant'});},[pathname]);return null;}
export default function App(){return <><ScrollManager/><Navbar/><main><Routes><Route path="/" element={<Home/>}/><Route path="/about" element={<About/>}/><Route path="/services" element={<Services/>}/><Route path="/work" element={<Work/>}/><Route path="/contact" element={<Contact/>}/><Route path="*" element={<Navigate to="/" replace/>}/></Routes></main><Footer/></>;}
