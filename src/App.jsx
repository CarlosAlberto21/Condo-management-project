import React from 'react'
import { RiDashboardLine, RiCalendar2Fill, RiPaypalLine, RiAdminLine, RiLogoutBoxFill, RiMenLine, RiMenu3Fill, RiCloseLine, RiNotification2Fill, RiNotification3Line, RiArrowDownSLine, RiSearch2Line, RiCheckboxBlankCircleFill, RiSearchLine, RiFilter3Line} from 'react-icons/ri'
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import imgB from "./assets/building.svg"
import { useState } from 'react'; 

const App = () => {
  const [slider, setSidebar] = useState(false);
  const handleSidebar =() =>{
    setSidebar(!slider);
  }
  return (
    <div className='min-h-screen grid grid-cols-1  lg:grid-cols-6'>
      <div
  className={`fixed lg:static top-0 ${
    slider ? "-left-0" : "-left-full"
<<<<<<< HEAD
  } w-[80%] md:w-[50%] lg:w-full h-full overflow-y-scroll col-span-1 p-8 border-r transition-all`}
=======
  } w-[80%] z-50 md:w-[50%] lg:w-full h-full  col-span-1 p-8 transition-all`}
>>>>>>> 6df87f1 (Pagos)
>
        <div className='text-center p-8 text-black'>
          <h1 className='uppercase font-bold tracking-[4px]'>Logo</h1>
        </div>
        <div className='h-[500px] flex flex-col justify-between'>
         {/*Menu*/} 
        <nav>
            <ul>
              
              <li>
              <a className='flex items-center gap-4 p-4 hover:bg-gray-600 text-gray-400 hover:text-white rounded-lg 
              transition-colors font-semibold'>
                <RiDashboardLine />
                Dashboard
              </a>
            </li>

            <li>
              <a className='flex items-center gap-4 p-4 hover:bg-gray-600 text-gray-400 hover:text-white rounded-lg 
              transition-colors font-semibold'>
                <RiCalendar2Fill />
                Calendario
              </a>
            </li>

            <li>
              <a className='flex items-center gap-4 p-4 hover:bg-gray-600 text-gray-400 hover:text-white rounded-lg 
              transition-colors font-semibold'>
                <RiPaypalLine/>
                Pagos
              </a>
            </li>

            <li>
              <a className='flex items-center gap-4 p-4 hover:bg-gray-600 text-gray-400 hover:text-white rounded-lg 
              transition-colors font-semibold'>
                <RiAdminLine/>
                Gestion
              </a>
            </li> 
             
            </ul>
            </nav>
            {/*Imagen*/}
            <div className='flex flex-col gap-4'>
            <img src={imgB} alt="" />
            {/*Update
            <div className='bg-gray-50 p-8 flex flex-col gap-4 rounded-3xl'>
              <h3 className='text-xl text-center'>Reporte</h3>
              <p className='text-center'>
                Lorem ipsum  
              </p>
              <button className='text-white p-2 bg-gray-600 rounded-lg'>
                Imprimir
              </button>
              

            </div>*/}
            <a className='flex items-center gap-4 p-4 hover:bg-gray-600 text-gray-400 hover:text-white rounded-lg 
              transition-colors font-semibold'>
                <RiLogoutBoxFill/>
                Salir
              </a>  
            </div>
        </div>
         
         
            
      </div>
      <button onClick={handleSidebar} className='absolute bottom-4 right-4 p-2 text-white rounded-full text-2xl bg-gray-400'>
        
        {slider ? <RiCloseLine/> : <RiMenu3Fill/>}
      </button>
        {/*content*/}
      <div className='col-span-5'>
        <header className=' z-1 flex flex-col md:flex-row items-center justify-between p-4 w-full'>
          {/*Buscador*/}
          <form action="" className='w-full md:[40%] lg:w-[30%] order-1 md:order-none'>
            <div className='relative '>
              <RiSearch2Line className='absolute left-1 top-3'/>
              <input type="text" placeholder='Buscar' className='w-full bg-gray-200 py-2 pl-8 rounded-lg outline-none' />
            </div>
          </form>
          <nav className='w-full md:[60%] lg:w-[70%] flex justify-center md:justify-end'>
            <ul className='flex items-center gap-4'>
              <li>
                <a href="">
                  <RiNotification3Line className='text-xl'/>
                  <RiCheckboxBlankCircleFill className='absolute top-6 right-35  text-xs text-red-500'/>
                </a>
              </li>
              <li>
                <a href="" className='flex items-center gap-1'>
                  Carlos Prieto <RiArrowDownSLine/>
                </a>
              </li>
            </ul>
          </nav>
        </header>
        {/*Content main*/}
        <div className='p-4 lg:p-12 bg-gray-100 h-full'>
          <div className='mb-8'>
            <h1 className='text-3x font-semibold'>Carlos  Prieto</h1>
            
          </div>
          {/*Buscador*/}
          <div className='grid grid-cols-4 gap-4 items-center'>
            <form action="" className='col-span-2'>
              <div className='relative'>
                <RiSearchLine className='absolute left-1 top-3 text-amber-400'/>
                <input type="text"className='bg-white py-2 pl-8 pr-4 outline-none w-full'
                placeholder='Buscar' />
              </div>
            </form>
            <form action="" className='col-span-1'>
                <div className='relative'>
                  <RiSearchLine className='absolute left-2 top-3 text-amber-400'/>
                  <select name="" id="" type="text" 
                  className='bg-white py-2 pl-8 pr-4 outline-none w-full'>
                    <option value="">Anywhere</option>
                  </select>
                </div>
            </form>
            <form action="" className='col-span-1'>
              <div className='relative'>
                <RiFilter3Line className='absolute left-2 top-3 text-amber-400'/>
                <input type="text" name="" id=""
                className='bg-white py-2 pl-8 pr-4 outline-none w-full'
                placeholder='Filter' />
              </div>
            </form>
          </div>
          {/*Cards*/}
          <div className='mt-8 grid grid-cols-4 gap-4'>
            <div className='bg-white flex flex-col justify-center col-span-2 p-3'>
                <h2 className='text-amber-400 opacity-40 text-2xl'>Pago</h2>
                <p className='text-6xl'>200$</p>
            </div>
            <div className='bg-white flex flex-col p-4'>
            <h2 className='text-amber-400 opacity-40 text-2xl'>Pendiente</h2>
            <p className='text-5xl'>15/7/25</p>
            </div>
            <div className='bg-white flex flex-col p-4'>
            <h2 className='text-amber-400 opacity-40 text-2xl'>Deuda</h2>
            <p className='text-6xl'>0</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
