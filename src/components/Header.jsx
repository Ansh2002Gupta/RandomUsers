import MenuIcon from '@mui/icons-material/Menu';
import { useContext } from 'react';
import { ContextProvider } from "../pages/Home";

const Header = () => {
  const {showSideBar, setShowSidebar} = useContext(ContextProvider);
  return (
      <div className="text-2xl text-[#0e4191] flex flex-row-reverse justify-between">
        Random Users
        <button onClick={()=>{setShowSidebar(!showSideBar)}}><MenuIcon/></button>
      </div>
  );
};

export default Header;
