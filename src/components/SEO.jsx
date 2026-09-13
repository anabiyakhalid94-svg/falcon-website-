import { useEffect } from 'react';
export default function SEO({title,description}){useEffect(()=>{document.title=`${title} | Falcon Academic Consultancy`;const tag=document.querySelector('meta[name="description"]');if(tag&&description)tag.setAttribute('content',description);},[title,description]);return null;}
