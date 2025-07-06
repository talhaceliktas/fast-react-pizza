import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";
import ChangeUsername from "../features/user/ChangeUsername";

function Home() {
  const username = useSelector((state) => state.user.username);

  return (
    <div className="my-10 px-4 text-center sm:my-16">
      <h1 className="mb-8 text-xl font-semibold md:text-3xl">
        En iyi pizzalar.
        <br />
        <span className="text-yellow-500">
          Piştiği gibi yola çıktı, seni bekletmeden kapında!
        </span>
      </h1>

      {username === "" ? (
        <CreateUser />
      ) : (
        <>
          <Button to="/menu" type="primary">
            Siparişe devam et, {username}
          </Button>
          <ChangeUsername />
        </>
      )}
    </div>
  );
}

export default Home;
