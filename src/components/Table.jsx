import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../App";
import { ContextProvider } from "../pages/Home";
import HomeMobileView from "../pages/HomeMobileView";
import default_image from "../assests/images/Group 1572.svg";

const Table = () => {
  let userData = [];
  const {
    userDetails,
    setUserDetails,
    page,
    queryDetails,
    queriesOnAPage,
    query,
    setSearchParams
  } = useContext(ContextProvider);
  const { setModalInfo } = useContext(GlobalContext);
  const isMobile = window.matchMedia("(max-width: 720px)").matches;

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

  return (
    <div className="mt-10 ">
      {isMobile ? (
        <HomeMobileView className="" />
      ) : (
        <table className="shadow-sm w-full">
          <thead>
            <tr className="bg-[#4597e1] text-white rounded-t-lg">
              <th className="text-sm py-4 px-[32px] max-w-[150px]"></th>
              <th className="text-sm py-4 px-[32px] max-w-[150px]">
                Full Name
              </th>
              <th className="text-sm py-4 px-[32px] max-w-[150px]">Username</th>
              <th className="text-sm py-4 px-[32px] max-w-[150px]">Email</th>
              <th className="text-sm py-4 px-[32px] max-w-[150px]">DOB</th>
              <th className="text-sm py-4 px-[32px] max-w-[150px]">Location</th>
              <th className="text-sm py-4 px-[32px] max-w-[150px]">Phone No</th>
            </tr>
          </thead>
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
        </table>
      )}
    </div>
  );
};

export const TableQuery = (props) => {
  const userDetails = props.userDetails;
  const displayModal = props.displayModalFunction;
  return (
    <>
      {userDetails.map((element, index) => (
        <tr
          key={index + 1}
          className="text-sm bg-white ring-1 ring-slate-200 ring-inset text-[#2c469a]"
        >
          <td className="py-6 px-[32px] max-w-[50px]">
            <img
              id={`userImg-${index + 1}`}
              src={element.image}
              alt="img"
              className="rounded-full w-10 h-10 shadow-md cursor-pointer"
              onClick={() =>
                displayModal({
                  type: "profilePhotoModal",
                  img: document.getElementById(`userImg-${index + 1}`).src,
                })
              }
            />
          </td>
          <button
            className="py-6 px-[32px] text-[#4597e1] text-nowrap max-w-[50px]"
            onClick={() => {
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
          <td className="py-6 px-[32px]  text-nowrap max-w-[50px]">
            {element.username}
          </td>
          <td className="py-6 px-[32px]  text-nowrap max-w-[50px]">
            {element.email}
          </td>
          <td className="py-6 px-[32px]  text-nowrap max-w-[50px]">
            {element.birthDate}
          </td>
          <td className="py-6 px-[32px]  text-nowrap max-w-[50px]">
            {element.address.address}
          </td>
          <td className="py-6 px-[32px]  text-nowrap max-w-[50px]">
            {element.phone}
          </td>
        </tr>
      ))}
    </>
  );
};

export const TableUser = (props) => {
  const userDetails = props.userDetails;
  const displayModal = props.displayModalFunction;
  return (
    <>
      {userDetails.map((element, index) => (
        <tr
          key={index + 1}
          className="text-sm bg-white ring-1 ring-slate-200 ring-inset text-[#2c469a]"
        >
          <td className="py-6 px-[32px]">
            <img
              id={`userImg-${index + 1}`}
              src={element.image}
              alt="img"
              className="rounded-full w-10 h-10 shadow-md cursor-pointer max-w-[100px]"
              onClick={() =>
                displayModal({
                  type: "profilePhotoModal",
                  img: document.getElementById(`userImg-${index + 1}`).src,
                })
              }
            />
          </td>
          <button
            className={`py-6 px-[32px]  text-[${
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
          <td className="py-6 px-[32px]  text-nowrap max-w-[150px] text-center">
            {element.username}
          </td>
          <td
            className={`py-6 px-[32px] break-words max-w-[150px] text-center`}
          >
            {element.email}
          </td>
          <td className="py-6 px-[32px]  text-wrap max-w-[150px] text-center">
            {element.birthDate}
          </td>
          <td
            className={`py-6 px-[32px] ${
              element.address.address.length > 15 ? "text-wrap" : "text-nowrap"
            } text-wrap max-w-[150px] text-center`}
          >
            {element.address.address}
          </td>
          <td className="py-6 px-[32px]  text-wrap max-w-[150px] text-center">
            {element.phone}
          </td>
        </tr>
      ))}
    </>
  );
};

export default Table;
