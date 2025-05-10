import { RiDashboardLine, RiCalendar2Fill, RiPaypalLine, RiAdminLine, RiLogoutBoxFill } from 'react-icons/ri';
import imgB from "../assets/building.svg";

const Menu = ({ slider, handleSidebar }) => {

  const handleClick = () => {
    if (window.innerWidth < 1024) {
      handleSidebar();
    }
  };

  return (
    <div
      className={`fixed bg-white lg:static top-0 ${
        slider ? 'left-0' : '-left-full'
      } z-50 w-[80%] md:w-[50%] lg:w-full h-full col-span-1 p-8 border-r transition-all`}
    >
      <div className='text-center p-8 text-black'>
        <h1 className='uppercase font-bold tracking-[4px]'>Logo</h1>
      </div>

      <div className='h-[500px] flex flex-col justify-between'>
        <nav>
          <ul>
            <li>
              <a
                onClick={handleClick}
                className='flex items-center gap-4 p-4 hover:bg-gray-600 text-gray-400 hover:text-white rounded-lg transition-colors font-semibold cursor-pointer'
              >
                <RiDashboardLine />
                Dashboard
              </a>
            </li>
            <li>
              <a
                onClick={handleClick}
                className='flex items-center gap-4 p-4 hover:bg-gray-600 text-gray-400 hover:text-white rounded-lg transition-colors font-semibold cursor-pointer'
              >
                <RiCalendar2Fill />
                Calendario
              </a>
            </li>
            <li>
              <a
                onClick={handleClick}
                className='flex items-center gap-4 p-4 hover:bg-gray-600 text-gray-400 hover:text-white rounded-lg transition-colors font-semibold cursor-pointer'
              >
                <RiPaypalLine />
                Pagos
              </a>
            </li>
            <li>
              <a
                onClick={handleClick}
                className='flex items-center gap-4 p-4 hover:bg-gray-600 text-gray-400 hover:text-white rounded-lg transition-colors font-semibold cursor-pointer'
              >
                <RiAdminLine />
                Gestión
              </a>
            </li>
          </ul>
        </nav>

        <div className='flex flex-col gap-4'>
          <img src={imgB} alt="Edificio" />
          <a
            onClick={handleClick}
            className='flex items-center gap-4 p-4 hover:bg-gray-600 text-gray-400 hover:text-white rounded-lg transition-colors font-semibold cursor-pointer'
          >
            <RiLogoutBoxFill />
            Salir
          </a>
        </div>
      </div>
    </div>
  );
};

export default Menu;
