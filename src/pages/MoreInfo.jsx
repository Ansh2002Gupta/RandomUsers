import { useContext } from "react";
import { GlobalContext } from "../App";

const MoreInfo = () => {
  const { modalInfo } = useContext(GlobalContext);
  const {
    img,
    firstname,
    lastname,
    gender,
    birthDate,
    age,
    weight,
    mobile,
    address,
    university,
    ssn,
  } = modalInfo.userDetailsModalInfo;
  
  return (
    <div className="bg-white flex justify-center items-center h-screen">
      <div className="border-2 border-black shadow-lg p-1 flex flex-col md:flex-row justify-between gap-4 rounded-lg">
        <div className="flex-2 justify-center items-center">
          <img
            src={img}
            alt="user here"
            className="rounded-full shadow-md w-72 h-72"
          />
        </div>
        <div className="flex grow flex-row p-2 gap-10 md:gap-4 max-w-[590px]">
          <div className="flex flex-col items-start">
            <div className="text-[#0e4191] text-xs md:text-lg">
              First Name:{" "}
            </div>
            <div className="text-[#0e4191] text-xs md:text-lg">Last Name: </div>
            <div className="text-[#0e4191] text-xs md:text-lg">Gender: </div>
            <div className="text-[#0e4191] text-xs md:text-lg">BirthDay: </div>
            <div className="text-[#0e4191] text-xs md:text-lg">Age: </div>
            <div className="text-[#0e4191] text-xs md:text-lg">{`Weight(in kgs):`}</div>
            <div className="text-[#0e4191] text-xs md:text-lg">Mobile: </div>
            <div className="text-[#0e4191] text-xs md:text-lg">Address: </div>
            <div className="text-[#0e4191] text-xs md:text-lg">
              University:{" "}
            </div>
            <div className="text-[#0e4191] text-xs md:text-lg">SSN: </div>
          </div>
          <div className="flex flex-col items-end">
            <div className="text-[#0e4191] text-xs md:text-lg">{firstname}</div>
            <div className="text-[#0e4191] text-xs md:text-lg">{lastname}</div>
            <div className="text-[#0e4191] text-xs md:text-lg">{gender}</div>
            <div className="text-[#0e4191] text-xs md:text-lg">{birthDate}</div>
            <div className="text-[#0e4191] text-xs md:text-lg">{age}</div>
            <div className="text-[#0e4191] text-xs md:text-lg">{weight}</div>
            <div className="text-[#0e4191] text-xs md:text-lg">{mobile}</div>
            <div className="text-[#0e4191] text-xs md:text-lg">{address}</div>
            <div className="text-[#0e4191] text-xs md:text-lg">
              {university}
            </div>
            <div className="text-[#0e4191] text-xs md:text-lg">{ssn}</div>
          </div>
        </div>
        <div className="flex grow flex-col"></div>
      </div>
    </div>
  );
};

export default MoreInfo;

// dark blue: 0e4191
// light blue: 4597e1
