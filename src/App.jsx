import { useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Work from './pages/Work';
import Contact from './pages/Contact';

const meta={
  '/':['Home','Personalised academic guidance, university selection, applications and visa support from Falcon Academic Consultancy.'],
  '/about':['About','Learn how Falcon Academic Consultancy helps students make clearer academic decisions.'],
  '/services':['Services','Explore Falcon Academic Consultancy services for counselling, university selection, applications, scholarships and visa guidance.'],
  '/work':['Our Work','See how Falcon structures student journeys from discovery to preparation and the next academic step.'],
  '/contact':['Contact','Contact Falcon Academic Consultancy to discuss your academic goals and next steps.']
};
function SiteMeta(){const{pathname}=useLocation();useEffect(()=>{const [title,description]=meta[pathname]||meta['/'];document.title=`${title} | Falcon Academic Consultancy`;const tag=document.querySelector('meta[name="description"]');if(tag)tag.setAttribute('content',description);},[pathname]);return null;}
function ScrollManager(){const{pathname}=useLocation();useEffect(()=>{window.scrollTo({top:0,behavior:'auto'});},[pathname]);return null;}
export default function App(){return <><SiteMeta/><ScrollManager/><Navbar/><main><Routes><Route path="/" element={<Home/>}/><Route path="/about" element={<About/>}/><Route path="/services" element={<Services/>}/><Route path="/work" element={<Work/>}/><Route path="/contact" element={<Contact/>}/><Route path="*" element={<Navigate to="/" replace/>}/></Routes></main><Footer/></>;}
