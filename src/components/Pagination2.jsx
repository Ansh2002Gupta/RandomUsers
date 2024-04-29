import { useContext, useState, useEffect } from "react";
import { ContextProvider } from "../pages/Home";

const Pagination2 = () => {
  const { queryDetails, query } = useContext(ContextProvider);
  return (
    <div className="flex flex-row justify-center md:justify-end gap-2 p-2 text-[#134191]">
      {queryDetails.length >= 0 && query.text.length > 0 ? (
        <QueryPagination />
      ) : (
        <TablePagination />
      )}
    </div>
  );
};

const QueryPagination = () => {
  let endPage;
  const {
    queryDetails,
    setQueriesOnAPage,
    queryPage,
    setQueryPage,
  } = useContext(ContextProvider);
  const [initialRender, setInitialRender] = useState(true);
  const [pageArr, setPageArr] = useState([]);

  useEffect(() => {
    endPage = Math.ceil(queryDetails.length / 10);
    const temp = new Array(endPage).fill(true);
    setPageArr(temp);
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

const TablePagination = () => {
  const currPage = localStorage.getItem("currentPage");
  useEffect(() => {
    editPaginationBlock(currPage);
  }, []);
  const { page, setPage } = useContext(ContextProvider);
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
  const [activePageButton, setActivePageButton] = useState(currPage);

  const editPaginationBlock = (newPage) => {
    if(+newPage === 0) newPage = 1
    if (+newPage === 1 || +newPage === 2)
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
    else if (+newPage === 9 || +newPage === 10)
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
      temp[newPage-1] = true;
      temp[newPage] = true;
      temp[+newPage+1] = true;
      setPageArr(temp);
    }
    setPage(newPage - 1);
    setActivePageButton(+newPage);
  };

  return (
    <>
      <button
        className={`hover:bg-slate-300 py-1 px-2 md:py-2 md:px-4`}
        style={{ display: page === 0 ? "none" : "block" }}
        onClick={() => {
          editPaginationBlock(page);
        }}
      >
        &lt;
      </button>
      {pageArr[0] && (
        <button
          id="button-1"
          value={1}
          className={`hover:bg-slate-300 py-1 px-2 md:py-2 md:px-4 ${
            activePageButton === 1 ? "text-[#78ccfb]" : "text-[#134191]"
          } ${activePageButton === 1 ? "shadow-lg" : "shadow-none"}`}
          onClick={() => {
            editPaginationBlock(1);
          }}
        >
          1
        </button>
      )}
      {pageArr[1] && (
        <button className="hover:bg-slate-300 py-1 px-2 md:py-2 md:px-4">
          ...
        </button>
      )}
      {pageArr[2] && (
        <button
          id="button-2"
          value={2}
          className={`hover:bg-slate-300 py-1 px-2 md:py-2 md:px-4 text-[${
            activePageButton === 2 ? "#78ccfb" : "#134191"
          }] shadow-${activePageButton === 2 ? "lg" : "none"}`}
          onClick={() => {
            editPaginationBlock(2);
          }}
        >
          2
        </button>
      )}
      {pageArr[3] && (
        <button
          id="button-3"
          value={3}
          className={`hover:bg-slate-300 py-1 px-2 md:py-2 md:px-4 text-[${
            activePageButton === 3 ? "#78ccfb" : "#134191"
          }] shadow-${activePageButton === 3 ? "lg" : "none"}`}
          onClick={() => {
            editPaginationBlock(3);
          }}
        >
          3
        </button>
      )}
      {pageArr[4] && (
        <button
          id="button-4"
          value={4}
          className={`hover:bg-slate-300 py-1 px-2 md:py-2 md:px-4 text-[${
            activePageButton === 4 ? "#78ccfb" : "#134191"
          }] shadow-${activePageButton === 4 ? "lg" : "none"}`}
          onClick={() => {
            editPaginationBlock(4);
          }}
        >
          4
        </button>
      )}
      {pageArr[5] && (
        <button
          id="button-5"
          value={5}
          className={`hover:bg-slate-300 py-1 px-2 md:py-2 md:px-4 text-[${
            activePageButton === 5 ? "#78ccfb" : "#134191"
          }] shadow-${activePageButton === 5 ? "lg" : "none"}`}
          onClick={() => {
            editPaginationBlock(5);
          }}
        >
          5
        </button>
      )}
      {pageArr[6] && (
        <button
          id="button-6"
          value={6}
          className={`hover:bg-slate-300 py-1 px-2 md:py-2 md:px-4 text-[${
            activePageButton === 6 ? "#78ccfb" : "#134191"
          }] shadow-${activePageButton === 6 ? "lg" : "none"}`}
          onClick={() => {
            editPaginationBlock(6);
          }}
        >
          6
        </button>
      )}
      {pageArr[7] && (
        <button
          id="button-7"
          value={7}
          className={`hover:bg-slate-300 py-1 px-2 md:py-2 md:px-4 text-[${
            activePageButton === 7 ? "#78ccfb" : "#134191"
          }] shadow-${activePageButton === 7 ? "lg" : "none"}`}
          onClick={() => {
            editPaginationBlock(7);
          }}
        >
          7
        </button>
      )}
      {pageArr[8] && (
        <button
          id="button-8"
          value={8}
          className={`hover:bg-slate-300 py-1 px-2 md:py-2 md:px-4 text-[${
            activePageButton === 8 ? "#78ccfb" : "#134191"
          }] shadow-${activePageButton === 8 ? "lg" : "none"}`}
          onClick={() => {
            editPaginationBlock(8);
          }}
        >
          8
        </button>
      )}
      {pageArr[9] && (
        <button
          id="button-9"
          value={9}
          className={`hover:bg-slate-300 py-1 px-2 md:py-2 md:px-4 text-[${
            activePageButton === 9 ? "#78ccfb" : "#134191"
          }] shadow-${activePageButton === 9 ? "lg" : "none"}`}
          onClick={() => {
            editPaginationBlock(9);
          }}
        >
          9
        </button>
      )}
      {pageArr[10] && (
        <button className="hover:bg-slate-300 py-1 px-2 md:py-2 md:px-4">
          ...
        </button>
      )}
      {pageArr[11] && (
        <button
          id="button-10"
          value={10}
          className={`hover:bg-slate-300 py-1 px-2 md:py-2 md:px-4 text-[${
            activePageButton === 10 ? "#78ccfb" : "#134191"
          }] shadow-${activePageButton === 10 ? "lg" : "none"}`}
          onClick={() => {
            editPaginationBlock(10);
          }}
        >
          10
        </button>
      )}
      <button
        className="hover:bg-slate-300 py-1 px-2 md:py-2 md:px-4"
        style={{ display: page === 9 ? "none" : "block" }}
        onClick={() => {
          editPaginationBlock(page + 2);
        }}
      >
        &gt;
      </button>
    </>
  );
};

export default Pagination2;
