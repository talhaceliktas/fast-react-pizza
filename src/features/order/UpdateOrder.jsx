import { useFetcher } from "react-router-dom";
import Button from "../../ui/Button";
import { updateOrder } from "../../services/apiRestaurant";

const UpdateOrder = () => {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Öncelikli yap</Button>
    </fetcher.Form>
  );
};

export async function action({ params }) {
  const data = { priority: true };

  await updateOrder(params.orderId, data);

  return null;
}

export default UpdateOrder;
