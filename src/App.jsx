import {React, useEffect} from 'react'
import { RiDashboardLine, RiCalendar2Fill, RiPaypalLine, RiAdminLine, RiLogoutBoxFill, RiMenLine, RiMenu3Fill, RiCloseLine, RiNotification2Fill, RiNotification3Line, RiArrowDownSLine, RiSearch2Line, RiCheckboxBlankCircleFill, RiSearchLine, RiFilter3Line} from 'react-icons/ri'
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import imgB from "./assets/building.svg"
import { useState } from 'react'; 
import Grafico from './Grafico/Grafico';
import GraficoA from './Grafico/GraficoA';
import Conexion from './Conexion/Conexion';
import Menu from './Menu/Menu';
import Notificaciones from './Notificaciones/Notificaciones';
import Hero from './Hero/Hero';
import Cards from './Cards/Cards';

const App = () => {

   const [customers, setCustomers] = useState([]);



  const [slider, setSidebar] = useState(false);
  const handleSidebar =() =>{
    setSidebar(!slider);
  }
  return (
    <div className='min-h-screen grid grid-cols-1  lg:grid-cols-6'>
     <Menu slider={slider} handleSidebar={handleSidebar}/>
    
        {/*content*/}
      <div className='col-span-5'>
       <Notificaciones/>
        {/*Content main*/}
        <div className='p-4 lg:p-12 bg-gray-100 h-full'>
          <div className='mb-8'>
            <h1 className='text-2xl md:text-3xl font-semibold'>Carlos  Prieto</h1>
            
          </div>
          {/*Buscador*/}
         <Hero/>

          {/*Cards*/}
          <Cards/>
          {/*Grafico*/}
          
          <GraficoA/>
          
          <Conexion/>

          <div className='mt-4 lg:hidden flex justify-end'>
  <button
    onClick={handleSidebar}
    className='p-2 text-white rounded-full text-2xl bg-gray-400'
  >
    {slider ? <RiCloseLine /> : <RiMenu3Fill />}
  </button>
</div>
        </div>
      </div>
    </div>
  )
}

export default App
