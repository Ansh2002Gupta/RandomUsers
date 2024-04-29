import { useContext, useState, useEffect, createContext } from "react";
import { ContextProvider } from "../pages/Home";

const Pagination = () => {
  const { queryDetails, query } = useContext(ContextProvider);
  return (
    <div className="flex flex-row justify-center md:justify-end gap-2 p-2 text-[#134191]">
      {queryDetails.length >= 0 && query.text.length > 0 ? <QueryPagination /> : <TablePagination />}
    </div>
  );
};

export const QueryPagination = () => {
  let endPage;
  const {
    queryDetails,
    queriesOnAPage,
    setQueriesOnAPage,
    queryPage,
    setQueryPage,
  } = useContext(ContextProvider);
  const [initialRender, setInitialRender] = useState(true);
  const [pageArr, setPageArr] = useState([]);

  console.log("pageArr:", pageArr);
  console.log("queriesOnAPage | pagination.jsx | 21:", queriesOnAPage);

  useEffect(() => {
    // document.getElementById("button-0").style.color = "#78ccfb";
    endPage = Math.ceil(queryDetails.length / 10);
    const temp = new Array(endPage).fill(true);
    setPageArr(temp);
    console.log("endPage | pagination.jsx:", endPage);
  }, [queryDetails]);

  useEffect(() => {
    if (queryPage === 0) setInitialRender(true);
  }, [queryPage]);

  const changeQueryPage = (page) => {
    if (page > 0) setInitialRender(false);
    setQueryPage(page);
    const temp = queryDetails.slice(page * 10, (page + 1) * 10);
    setQueriesOnAPage(temp);
  };

  return (
    <>
      {pageArr.map((_, index) => (
        <button
          key={index}
          id={`button-${index}`}
          value={index + 1}
          className={`hover:bg-slate-300 py-1 px-2 md:py-2 md:px-4 shadow-sm focus:text-[#78ccfb] ${
            index === 0 && initialRender ? `text-[#4597e1]` : `text-[#0e4191]`
          }`}
          onClick={() => {
            changeQueryPage(index);
          }}
        >
          {index + 1}
        </button>
      ))}
    </>
  );
};

export const TablePagination = () => {
  useEffect(() => {
    document.getElementById('button-0').style.color = '#78ccfb';
  },[]);
  const { page, setPage} = useContext(ContextProvider);
  const [pageArr, setPageArr] = useState([
    true,
    false,
    true,
    true,
    false,
    false,
    false,
    false,
    false,
    false,
    true,
    true,
  ]);
  const editPagination = (pageNo) => {
    // console.log('pageNo,pagination.jsx',pageNo);
    setPage(pageNo - 1);
    if (pageNo === 1 || pageNo === 2)
      setPageArr([
        true,
        false,
        true,
        true,
        false,
        false,
        false,
        false,
        false,
        false,
        true,
        true,
      ]);
    else if (pageNo === 9 || pageNo === 10)
      setPageArr([
        true,
        true,
        false,
        false,
        false,
        false,
        false,
        false,
        true,
        true,
        false,
        true,
      ]);
    else {
      let temp = [...pageArr];
      temp = [
        true,
        true,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        true,
        true,
      ];
      temp[pageNo - 1] = true;
      temp[pageNo] = true;
      temp[pageNo + 1] = true;
      setPageArr(temp);
    }
    document.getElementById(`button-${pageNo - 1}`).style.color = "#78ccfb";
    document.getElementById(`button-0`).style.color = "#134191";
  };

  return (
    <>
      <button
        className="hover:bg-slate-300 py-1 px-2 md:py-2 md:px-4 shadow-sm"
        onClick={() => {
          editPagination(page);
        }}
        style={{ display: page === 0 ? "none" : "block" }}
      >
        &lt;
      </button>
      {pageArr[0] && (
        <button
          id="button-0"
          value={1}
          className="hover:bg-slate-300 py-1 px-2 md:py-2 md:px-4 shadow-sm"
          onClick={()=>{editPagination(1)}}
        >
          1
        </button>
      )}
      {pageArr[1] && (
        <button className="hover:bg-slate-300 py-1 px-2 md:py-2 md:px-4 shadow-sm">...</button>
      )}
      {pageArr[2] && (
        <button
          id="button-1"
          value={2}
          className="hover:bg-slate-300 py-1 px-2 md:py-2 md:px-4 shadow-sm"
          onClick={()=>{editPagination(2)}}
        >
          2
        </button>
      )}
      {pageArr[3] && (
        <button
          id="button-2"
          value={3}
          className="hover:bg-slate-300 py-1 px-2 md:py-2 md:px-4 shadow-sm"
          onClick={()=>{editPagination(3)}}
        >
          3
        </button>
      )}
      {pageArr[4] && (
        <button
          id="button-3"
          value={4}
          className="hover:bg-slate-300 py-1 px-2 md:py-2 md:px-4 shadow-sm"
          onClick={()=>{editPagination(4)}}
        >
          4
        </button>
      )}
      {pageArr[5] && (
        <button
          id="button-4"
          value={5}
          className="hover:bg-slate-300 py-1 px-2 md:py-2 md:px-4 shadow-sm"
          onClick={()=>{editPagination(5)}}
        >
          5
        </button>
      )}
      {pageArr[6] && (
        <button
          id="button-5"
          value={6}
          className="hover:bg-slate-300 py-1 px-2 md:py-2 md:px-4 shadow-sm"
          onClick={()=>{editPagination(6)}}
        >
          6
        </button>
      )}
      {pageArr[7] && (
        <button
          id="button-6"
          value={7}
          className="hover:bg-slate-300 py-1 px-2 md:py-2 md:px-4 shadow-sm"
          onClick={()=>{editPagination(7)}}
        >
          7
        </button>
      )}
      {pageArr[8] && (
        <button
          id="button-7"
          value={8}
          className="hover:bg-slate-300 py-1 px-2 md:py-2 md:px-4 shadow-sm"
          onClick={()=>{editPagination(8)}}
        >
          8
        </button>
      )}
      {pageArr[9] && (
        <button
          id="button-8"
          value={9}
          className="hover:bg-slate-300 py-1 px-2 md:py-2 md:px-4 shadow-sm"
          onClick={()=>{editPagination(9)}}
        >
          9
        </button>
      )}
      {pageArr[10] && (
        <button className="hover:bg-slate-300 py-1 px-2 md:py-2 md:px-4 shadow-sm ">...</button>
      )}
      {pageArr[11] && (
        <button
          id="button-9"
          value={10}
          className="hover:bg-slate-300 py-1 px-2 md:py-2 md:px-4 shadow-sm"
          onClick={()=>{editPagination(10)}}
        >
          10
        </button>
      )}
      <button
        className="hover:bg-slate-300 py-1 px-2 md:py-2 md:px-4 shadow-sm "
        onClick={() => {
          editPagination(page + 2);
          document.getElementById(`button-${page}`).style.color = "#134191";
        }}
        style={{ display: page === 9 ? "none" : "block" }}
      >
        &gt;
      </button>
    </>
  );
};

export default Pagination;
