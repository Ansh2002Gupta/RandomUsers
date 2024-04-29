import { createContext, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "../components/Header";
import Modal from '../components/modals/Modal';
import Pagination2 from "../components/Pagination2";
import SearchBar from "../components/SearchBar";
import Sidebar from "../components/Sidebar";
import Table from "../components/Table";

export const ContextProvider = createContext();

function Home() {
  const [userDetails, setUserDetails] = useState([]);
  const [queryDetails, setQueryDetails] = useState([]);
  const [queriesOnAPage, setQueriesOnAPage] = useState([])
  const [page, setPage] = useState(localStorage.getItem('currentPage') !== null ? localStorage.getItem('currentPage')-1 : 0)
  const [showSidebar, setShowSidebar] = useState(false);
  const [queryPage, setQueryPage] = useState(0)
  const [query, setQuery] = useState({text: '', hasBeenChanged: false})
  const [searchParams, setSearchParams] = useSearchParams(localStorage.getItem('currentPage') !== null ? {'page':localStorage.getItem('currentPage')} : {'page':1});
  const [isLoading, setIsLoading] = useState(true);
  return (
    <>
    <ContextProvider.Provider value={{userDetails, setUserDetails, page, setPage, queryDetails, setQueryDetails, showSidebar, setShowSidebar, queriesOnAPage, setQueriesOnAPage, queryPage, setQueryPage, query, setQuery, searchParams, setSearchParams, isLoading, setIsLoading}}>
      <Modal />
      <div className="flex flex-col p-8" style={{ backgroundColor: "#f0f4fb" }}>
        <Header />
        <Sidebar/>
        <SearchBar />
        <Table />
        <Pagination2/>
      </div>
    </ContextProvider.Provider>
    </>
  );
}

export default Home;
