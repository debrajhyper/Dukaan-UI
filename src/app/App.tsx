import { useState } from 'react';
import './App.css';
import { Sidebar } from '../components/Sidebar';
import { Navbar } from '../components/Navbar';
import { Dashboard } from '../components/Dashboard';

export default function App() {
  const [open, setOpen] = useState(false)

  function toggleOpen() {
    setOpen(prev => !prev)
  }

  return (
    <div className='main-container w-screen h-screen bg-[#f9f9f9] relative mx-auto my-0'>
      <Sidebar open={open} toggleOpen={toggleOpen} />
      <main className='ml-0 md:ml-[13.23rem] h-screen overflow-y-scroll'>
        <Navbar toggleOpen={toggleOpen} />
        <Dashboard />
      </main>
    </div>
  );
}