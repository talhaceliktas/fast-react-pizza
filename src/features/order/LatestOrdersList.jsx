import React, { useState, useEffect } from "react";
import LinkButton from "../../ui/LinkButton";
import { Link, useNavigate } from "react-router-dom";

const LatestOrdersList = () => {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("orders");
    if (user) {
      const parsedOrders = JSON.parse(user);
      parsedOrders.sort((a, b) => new Date(b.addedAt) - new Date(a.addedAt));
      setOrders(parsedOrders);
    }
  }, []);

  function clearAllOrders() {
    localStorage.removeItem("orders");
    setOrders([]);
  }

  if (orders.length === 0) {
    return (
      <p className="mt-4">
        Hiç siparişin yok.{" "}
        <span
          className="text-blue-500 hover:cursor-pointer hover:underline"
          onClick={() => navigate("/menu")}
        >
          Biraz sipariş ver.
        </span>
      </p>
    );
  }

  return (
    <div className="mt-6 flex flex-col items-center">
      <ul className="mb-5 space-y-5 divide-y-2 divide-stone-200 border-b-2 border-stone-200">
        {orders.map((order) => (
          <li
            className="text-2xl duration-200 hover:text-blue-400"
            key={order.orderId}
          >
            <Link to={`/order/${order.orderId}`}>
              Sipariş ID: {order.orderId} | Tarih:{" "}
              {new Date(order.addedAt).toLocaleString()}
            </Link>
          </li>
        ))}
      </ul>
      <LinkButton to="-1">&larr; Geri dön</LinkButton>
      <p
        className="mt-6 text-xs text-blue-500 hover:cursor-pointer hover:underline"
        onClick={clearAllOrders}
      >
        Tüm siparişleri temizle
      </p>
    </div>
  );
};

export default LatestOrdersList;
