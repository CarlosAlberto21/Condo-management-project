import React from 'react'
import { RiDashboardLine, RiCalendar2Fill, RiPaypalLine, RiAdminLine, RiLogoutBoxFill} from 'react-icons/ri'
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import imgB from "./assets/building.svg"

const App = () => {
  return (
    <div className='min-h-screen grid grid-cols-1  lg:grid-cols-6'>
      <div className='col-span-1 p-8 border-r-amber-300'>
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
      <div className='col-span-5'></div>
    </div>
  )
}

export default App
