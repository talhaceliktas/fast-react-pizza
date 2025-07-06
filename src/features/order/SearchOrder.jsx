import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const SearchOrder = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const username = useSelector((state) => state.user.username);

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`justify-self-end ${username ? "md:justify-self-center" : ""}`}
    >
      <input
        placeholder="Sipariş Ara"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="focus:ring-opacity-50 w-32 rounded-full bg-yellow-100 px-4 py-2 text-xs transition-all duration-300 placeholder:text-stone-400 focus:ring focus:ring-yellow-500 focus:outline-none sm:w-64 sm:text-sm sm:focus:w-72"
      />
    </form>
  );
};

export default SearchOrder;
