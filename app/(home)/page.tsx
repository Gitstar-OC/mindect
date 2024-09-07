'use client'
import { useState, useEffect } from "react";
import Home from "@/components/ui/Home/HomePage";

export default function HomePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false); 
    }, 4000); 

    return () => clearTimeout(timeout); 
  }, []);

  useEffect(() => {
    if (!loading) {
      window.scrollTo({
        top: document.documentElement.scrollHeight, 
        behavior: 'smooth', 
      });
    }
  }, [loading]); 

  return (
    <>
      <Home />
    </>
  );
}
