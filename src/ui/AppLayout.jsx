import Header from "./Header";
import CardOverview from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";
import LatestOrdersButton from "../features/order/LatestOrdersButton";

const AppLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto] bg-gray-100">
      {isLoading && <Loader />}

      <Header />
      <div className="overflow-auto">
        <main className="mx-auto max-w-3xl">
          <Outlet />
        </main>
      </div>

      <LatestOrdersButton />
      <CardOverview />
    </div>
  );
};

export default AppLayout;
