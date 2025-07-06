import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";
import { useSelector } from "react-redux";

const Header = () => {
  const username = useSelector((state) => state.user.username);

  return (
    <header
      className={`font-pizza grid grid-cols-2 items-center border-b border-stone-500 bg-yellow-400 px-4 py-3 uppercase sm:px-6 ${username ? "md:grid-cols-3" : ""}`}
    >
      <Link to="/" className="tracking-widest">
        Hızlı React Pizzaları Co.
      </Link>

      <SearchOrder />
      <div>
        <Username />
      </div>
    </header>
  );
};

export default Header;
