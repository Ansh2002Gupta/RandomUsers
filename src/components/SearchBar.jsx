import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useContext } from "react";
import { ContextProvider } from "../pages/Home";

const SearchBar = () => {
  const { setQueryDetails, setQueriesOnAPage, query, setQuery } =
    useContext(ContextProvider);
  const { setQueryPage } = useContext(ContextProvider);

  const fetchUser = async () => {
    if (query.text.length === 0) {
      setQueryDetails([]);
      return;
    }

    try {
      let res = await fetch(`https://dummyjson.com/users/search?q=${query.text}`);
      if (!res.ok) throw new Error(`Error in fetching query: ${res.status}`);
      res = await res.json();
      const data = res.users;
      setQueryDetails(data);
      const temp2 = data.slice(0, 10);
      setQueriesOnAPage(temp2);
    } catch (error) {
      console.log(`Error(in query fetch) | Catch Exceuted: `, error);
    }
  };

  const bringAllQueryData = async () => {
    fetchUser();
  };

  useEffect(() => {
    bringAllQueryData();
    setQueryPage(0);
  }, [query]);

  return (
    <div className="relative p-2">
      <div className="absolute right-0 flex flex-row shadow-sm justify-center items-center">
        <input
          type="text"
          value={query.text}
          placeholder="Search"
          onChange={(event) => setQuery({text: event.target.value, hasBeenChanged: true})}
          className="text-sm rounded-md p-2 outline-none border-none w-[250px]"
        />
        <SearchIcon className="absolute right-0 bg-white rounded-sm text-[#2c469a]" />
      </div>
    </div>
  );
};

export default SearchBar;
