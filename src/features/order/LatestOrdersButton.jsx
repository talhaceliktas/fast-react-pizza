import { useNavigate } from "react-router-dom";

const LatestOrdersButton = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/latestOrders");
  }

  return (
    <div onClick={handleClick}>
      <p className="fixed right-6 bottom-20 z-50 hidden rounded bg-gray-400/40 px-4 py-2 text-sm text-blue-500 shadow-lg duration-300 hover:cursor-pointer hover:text-base xl:block">
        Önceki siparişler
      </p>

      <button className="fixed right-6 bottom-20 z-50 rounded-full bg-gray-400/40 p-3 text-blue-500 shadow-lg hover:cursor-pointer xl:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6 duration-300 hover:h-8 hover:w-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
          />
        </svg>
      </button>
    </div>
  );
};

export default LatestOrdersButton;
