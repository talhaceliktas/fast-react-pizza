// Test ID: IIDSAT

import { useFetcher, useLoaderData, useParams } from "react-router-dom";
import { getOrder } from "../../services/apiRestaurant";
import { useEffect } from "react";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers";
import OrderItem from "./OrderItem";
import UpdateOrder from "./UpdateOrder";
function Order() {
  const order = useLoaderData();

  const fetcher = useFetcher();

  useEffect(() => {
    if (!fetcher.data && fetcher.state === "idle") fetcher.load("/menu");
  }, [fetcher]);

  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  const { orderId } = useParams();

  useEffect(() => {
    if (!orderId) return;

    const newOrder = {
      orderId,
      addedAt: new Date().toISOString(),
    };

    const existingOrders = JSON.parse(localStorage.getItem("orders") ?? "[]");

    const alreadyExists = existingOrders.some((o) => o.orderId === orderId);
    if (!alreadyExists) {
      existingOrders.push(newOrder);
      localStorage.setItem("orders", JSON.stringify(existingOrders));
    }
  }, [orderId]);

  return (
    <div className="space-y-8 px-4 py-6">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-xl font-semibold">Sipariş #{id} durumu</h2>

        <div className="flex flex-wrap gap-4 space-x-2">
          {priority && (
            <span className="rounded-full bg-red-500 px-3 py-1 text-sm font-semibold tracking-wide text-red-50 uppercase">
              Öncelikli
            </span>
          )}
          <span className="rounded-full bg-green-500 px-3 py-1 text-sm font-semibold tracking-wide text-green-50 uppercase">
            {status.toLowerCase() === "preparing"
              ? "Hazırlanan Sipariş"
              : "Tamamlandı!"}
          </span>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 bg-stone-200 px-6 py-5">
        <p className="font-medium">
          {deliveryIn >= 0
            ? `Sadece ${calcMinutesLeft(estimatedDelivery)} dakika kaldı 🍕`
            : "Sipariş zaten teslim edildi."}
        </p>
        <p className="text-sm text-stone-500">
          (Tahmin edilen varış: {formatDate(estimatedDelivery)})
        </p>
      </div>

      <ul className="divide-y divide-stone-200 border-t border-b">
        {cart.map((item) => (
          <OrderItem
            item={item}
            key={item.pizzaId}
            isLoadingIngredients={fetcher.state === "loading"}
            ingredients={
              fetcher.data?.find((el) => el.id === item.pizzaId).ingredients
            }
          />
        ))}
      </ul>

      <div className="space-y-2 bg-stone-200 px-6 py-5">
        <p className="text-sm font-medium text-stone-600">
          Pizza fiyatı: {formatCurrency(orderPrice)}
        </p>
        {priority && (
          <p className="text-sm font-medium text-stone-600">
            Öncelik Bedeli: {formatCurrency(priorityPrice)}
          </p>
        )}
        <p className="font-bold">
          Teslimatta ödenecek tutar:{" "}
          {formatCurrency(orderPrice + priorityPrice)}
        </p>
      </div>
      {!priority && <UpdateOrder order={order} />}
    </div>
  );
}

export async function loader({ params }) {
  const order = await getOrder(params.orderId);
  return order;
}

export default Order;
