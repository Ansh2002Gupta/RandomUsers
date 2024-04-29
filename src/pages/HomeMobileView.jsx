import React from "react";
import { useContext, useEffect } from "react";
import { ContextProvider } from "../pages/Home";
import { GlobalContext } from "../App";
import default_image from "../assests/images/Group 1572.svg";

const HomeMobileView = () => {
  let userData = [];
  const {
    userDetails,
    setUserDetails,
    page,
    queryDetails,
    queriesOnAPage,
    query,
    setSearchParams,
  } = useContext(ContextProvider);
  const { setModalInfo } = useContext(GlobalContext);

  const fetchUserDetails = async () => {
    try {
      const res = await fetch("https://dummyjson.com/users?limit=100", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      const data = await res.json();
      return data.users;
    } catch (error) {
      console.error("Error fetching user details:", error);
      return [];
    }
  };

  const bringAllUserData = async () => {
    userData = await fetchUserDetails();
    const tempArr = userData.slice(page * 10, (page + 1) * 10);
    setUserDetails(tempArr);
  };

  useEffect(() => {
    bringAllUserData();
    if (localStorage.getItem("currentPage") === null) {
      localStorage.setItem("currentPage", 1);
      setSearchParams({ page: 1 });
    } else {
      localStorage.setItem("currentPage", page + 1);
      setSearchParams({ page: page + 1 });
    }
  }, [page]);

  const displayModal = (obj) => {
    setModalInfo({
      type: obj.type,
      display: true,
      profilePhotoModalInfo: { img: obj.img },
      userDetailsModalInfo: {
        img: obj.img,
        firstname: obj.firstname,
        lastname: obj.lastname,
        gender: obj.gender,
        email: obj.email,
        address: obj.address,
        mobile: obj.mobile,
        age: obj.age,
        weight: obj.weight,
        university: obj.university,
        ssn: obj.ssn,
        birthDate: obj.birthDate,
      },
    });
  };
//   console.log("userDetails", userDetails);

  return (
    <div className="flex flex-col gap-2 justify-center items-center py-1 px-2">
      {queryDetails.length > 0 ? (
        <TableQuery
          userDetails={queriesOnAPage}
          displayModalFunction={displayModal}
        />
      ) : query.text.length === 0 ? (
        <TableUser
          userDetails={userDetails}
          displayModalFunction={displayModal}
        />
      ) : (
        <TableUser
          userDetails={[
            {
              image: default_image,
              firstName: "NA",
              lastName: "",
              username: "NA",
              email: "NA",
              birthDate: "NA",
              address: { address: "NA" },
              phone: "NA",
            },
          ]}
          displayModalFunction={displayModal}
        />
      )}
    </div>
  );
};

const TableUser = (props) => {
  const userDetails = props.userDetails;
  const displayModal = props.displayModalFunction;
  return (
    <div className="flex flex-col gap-2 justify-center items-center py-1 px-2">
      {userDetails.map((element, index) => (
        <div
          key={index}
          className="bg-white min-w-full flex flex-col px-2 py-1 shadow-lg rounded-lg justify-center items-center"
        >
          <img
            id={`userImg-${index + 1}`}
            src={element.image}
            alt="img"
            className="rounded-full w-20 h-20 shadow-md cursor-pointer max-w-[100px]"
            onClick={() =>
              displayModal({
                type: "profilePhotoModal",
                img: document.getElementById(`userImg-${index + 1}`).src,
              })
            }
          />
          <button
            className={`my-4 text-[${
              element.firstName === "NA" ? "#2c469a" : "#4597e1"
            }]  text-nowrap max-w-[100px]`}
            onClick={() => {
              if (element.firstName !== "NA")
                displayModal({
                  type: "userDetailsModal",
                  img: document.getElementById(`userImg-${index + 1}`).src,
                  firstname: element.firstName,
                  lastname: element.lastName,
                  gender: element.gender,
                  address: element.address.address,
                  email: element.email,
                  mobile: element.phone,
                  university: element.university,
                  ssn: element.ssn,
                  weight: element.weight,
                  age: element.age,
                  birthDate: element.birthDate,
                });
            }}
          >
            {element.firstName + " " + element.lastName}
          </button>
          <div className="flex flex-row gap-2">
            <div className="flex flex-col text-xs text-[#4597e1]">
              <div>Username</div>
              <div>Email</div>
              <div>DOB</div>
              <div>Location</div>
              <div>Phone</div>
            </div>
            <div className="flex flex-col text-xs text-[#0e4191]">
              <div>{element.username}</div>
              <div>{element.email}</div>
              <div>{element.birthDate}</div>
              <div>{element.address.address}</div>
              <div>{element.phone}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const TableQuery = (props) => {
  const userDetails = props.userDetails;
  const displayModal = props.displayModalFunction;
  return (
    <div className="flex flex-col gap-2 justify-center items-center py-1 px-2">
      {userDetails.map((element, index) => (
        <div
          key={index}
          className="bg-white min-w-full flex flex-col px-2 py-1 shadow-lg rounded-lg justify-center items-center"
        >
          <img
            id={`userImg-${index + 1}`}
            src={element.image}
            alt="img"
            className="rounded-full w-20 h-20 shadow-md cursor-pointer max-w-[100px]"
            onClick={() =>
              displayModal({
                type: "profilePhotoModal",
                img: document.getElementById(`userImg-${index + 1}`).src,
              })
            }
          />
          <button
            className={`my-4 text-[${
              element.firstName === "NA" ? "#2c469a" : "#4597e1"
            }]  text-nowrap max-w-[100px]`}
            onClick={() => {
              if (element.firstName !== "NA")
                displayModal({
                  type: "userDetailsModal",
                  img: document.getElementById(`userImg-${index + 1}`).src,
                  firstname: element.firstName,
                  lastname: element.lastName,
                  gender: element.gender,
                  address: element.address.address,
                  email: element.email,
                  mobile: element.phone,
                  university: element.university,
                  ssn: element.ssn,
                  weight: element.weight,
                  age: element.age,
                  birthDate: element.birthDate,
                });
            }}
          >
            {element.firstName + " " + element.lastName}
          </button>
          <div className="flex flex-row gap-2">
            <div className="flex flex-col text-xs text-[#4597e1]">
              <div>Username</div>
              <div>Email</div>
              <div>DOB</div>
              <div>Location</div>
              <div>Phone</div>
            </div>
            <div className="flex flex-col text-xs text-[#0e4191]">
              <div>{element.username}</div>
              <div>{element.email}</div>
              <div>{element.birthDate}</div>
              <div>{element.address.address}</div>
              <div>{element.phone}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeMobileView;
