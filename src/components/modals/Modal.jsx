import { useContext } from "react";
import CloseIcon from "@mui/icons-material/Close";
import default_image from "../../assests/images/Group 1572.svg";
import { FidgetSpinner } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../App";

const Modal = () => {
  const { modalInfo, setModalInfo, isLoading } = useContext(GlobalContext);
  const exitModal = () => {
    setModalInfo({
      type: "profilePhotoModal",
      display: false,
      profilePhotoModalInfo: { img: default_image },
      userDetailsModalInfo: {
        img: default_image,
        gender: null,
        email: null,
        address: null,
        mobile: null,
      },
    });
  };
  return (
    <div
      id="modal"
      className="fixed top-0 z-10 w-screen h-screen flex justify-center items-center"
      style={{ display: modalInfo.display || isLoading ? "block" : "none" }}
    >
      <div className="bg-black w-screen h-screen z-10 opacity-50"></div>
      {isLoading ? <FidgetSpinner className='z-20'/> : modalInfo.type === "profilePhotoModal" ? (
        <ProfilePhotoModal exitFunction={exitModal} />
      ) : (
        <UserDetailsModal exitFunction={exitModal} />
      )}
    </div>
  );
};

export const ProfilePhotoModal = (props) => {
  const exitModal = props.exitFunction;
  const { modalInfo } = useContext(GlobalContext);
  return (
    <div className="absolute top-64 left-14 md:top-[120px] md:left-[465px] flex justify-center items-center bg-[#78ccfb] p-1 md:w-[350px] md:h-[400px] opacity-100 z-20">
      <img
        src={modalInfo.profilePhotoModalInfo.img}
        alt="user here"
        className="w-[200px] h-[200px] md:w-[340px] md:h-[400px] object-cover"
      />
      <button
        className="absolute top-0 right-0 text-white"
        onClick={() => {
          exitModal();
        }}
      >
        <CloseIcon />
      </button>
    </div>
  );
};

export const UserDetailsModal = (props) => {
  const exitModal = props.exitFunction;
  const { modalInfo } = useContext(GlobalContext);
  const { img, gender, email, address, mobile } =
    modalInfo.userDetailsModalInfo;
  const navigate = useNavigate();
  return (
    <div className="absolute w-[250px] top-56 left-9 md:top-[120px] md:left-[400px] flex flex-col opacity-100 z-20 p-2 md:w-[500px] md:h-[360px]">
      <div className="basis-12 bg-[#4597e1] pl-4 py-2 flex items-center text-white rounded-t-md">
        User Detail
        <button
          className="absolute top-2 right-2 text-white"
          onClick={() => {
            exitModal();
          }}
        >
          <CloseIcon />
        </button>
      </div>
      <div className="grow flex justify-center items-center bg-white">
        <img
          src={img}
          alt="user here"
          className="rounded-full shadow-md w-[100px] h-[100px] md:w-[170px] md:h-[170px]"
        />
      </div>
      <div className="basis-32 bg-white flex flex-row items-center pl-4 gap-2">
        <div className="flex flex-col text-[#134191] text-xs md:text-sm">
          <span>Gender:</span>
          <span>Email:</span>
          <span>Address:</span>
          <span>Mobile:</span>
        </div>
        <div className="flex flex-col text-[#134191] text-xs md:text-sm items-end">
          <span>{gender}</span>
          <span>{email}</span>
          <span>{address}</span>
          <span>{mobile}</span>
        </div>
      </div>
      <button
        className="bg-[#4597e1] py-2 px-6 hover:bg-[#4090d6] text-white rounded-b-md"
        onClick={() => {
          navigate("/User");
        }}
      >
        View More
      </button>
    </div>
  );
};

export default Modal;
