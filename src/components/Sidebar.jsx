import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ContextProvider } from "../pages/Home";
import { GlobalContext } from "../App";
import CloseIcon from "@mui/icons-material/Close";

const Sidebar = () => {
  const { showSidebar, setShowSidebar } = useContext(ContextProvider);
  const navigate = useNavigate();
  const image = localStorage.getItem("image");
  const firstName = localStorage.getItem("firstName");
  const lastName = localStorage.getItem("lastName");
  const username = localStorage.getItem("username");
  const email = localStorage.getItem("email");
  const gender = localStorage.getItem("gender");
  const clearLocalStorage = () => {
    localStorage.removeItem("auth-token");
    localStorage.removeItem("image");
    localStorage.removeItem("firstName");
    localStorage.removeItem("lastName");
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    localStorage.removeItem("gender");
    localStorage.removeItem("currentPage");
  };
  
  return (
    <div
      id="sidebar"
      className="fixed top-0 left-0 z-10 w-screen h-screen flex justify-end"
      style={{ display: showSidebar ? "block" : "none" }}
    >
      <div className="bg-black h-screen z-10 opacity-50"></div>
      <div className="absolute top-0 mr-4 w-1/2 md:w-1/4 h-screen p-2 bg-white z-20 flex flex-col justify-center items-center gap-2">
        <button
          className="absolute top-4 right-4"
          onClick={() => {
            setShowSidebar(!showSidebar);
          }}
        >
          <CloseIcon className="text-[#0e4191] hover:scale-[-2]" />
        </button>
        <img
          src={image}
          alt="login user here"
          className="rounded-full shadow-lg"
        />
        <div className="bg-slate-400 my-6 w-full h-[5px]"></div>
        <div className="text-sm md:text-xl text-[#0e4191]">
          {firstName + " " + lastName}
        </div>
        <div className="text-sm md:text-xl text-[#0e4191]">{username}</div>
        <div className="text-sm md:text-xl text-[#0e4191]">{email}</div>
        <div className="text-sm md:text-xl text-[#0e4191]">{gender}</div>
        <button
          className="mt-20 px-6 py-2 bg-teal-600 text-center text-white"
          onClick={() => {
            clearLocalStorage();
            navigate("/");
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
