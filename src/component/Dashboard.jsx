import React, { useState, useEffect } from "react";
import PizzaOrderForm from "./PizzaOrderForm";
import PizzaMainDisplay from "./PizzaMainDisplay";

const PizzaApp = () => {
  const [orders, setOrders] = useState([]);
  const [totalDelivered, setTotalDelivered] = useState(0);

  const placeOrder = (order) => {
   
    const unDelivered = orders.filter((order) => !order.isDeliverd)
    console.log('unDelivered', unDelivered)
    if (unDelivered.length < 10) {
      setOrders([...orders, { ...order, stage: "Order Placed", time: 0, isDeliverd: false }]);
    } else {
      alert("Not taking any order for now (Max orders reached)");
    }
  };

  const updateOrderStage = (orderId, newStage) => {

    setOrders((prevOrders) =>
   
      prevOrders.map((order) =>
        order.id === orderId ? { ...order, stage: newStage, time: order.time, isDeliverd: true } : order
      )
    );
  };

  const cancelOrder = (orderId) => {
    setOrders((prevOrders) => prevOrders.filter((order) => order.id !== orderId));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setOrders((prevOrders) =>
        prevOrders.map((order) => {
          if (order.stage !== "Order Picked") {
            return {
              ...order,
              time: order.time + 1,
            };
          }
          return order;
        })
      );
    }, 1000);

    return () => clearInterval(timer);
  }, []);


  useEffect(() => {
    const deliveredToday = orders.filter((order) => order.stage === "Order Picked").length;
    orders.forEach((order) => {
      if (order.time === 30) {
        order.stage = "Order Making"
      }
      if (order.time === 60) {
        order.stage = "Order Ready"
      }
    });
    setTotalDelivered(deliveredToday);
  }, [orders]);

  return (
    <div className="container mt-4">
      <h1 className="text-center">Pizza Shop</h1>
      <h1 className="text-center">Place a Pizza Order</h1>
      <PizzaOrderForm placeOrder={placeOrder} />
      <PizzaMainDisplay
        orders={orders}
        updateOrderStage={updateOrderStage}
        cancelOrder={cancelOrder}
      />
      <div className="text-center mt-3">Total Pizza Delivered Today: {totalDelivered}</div>
    </div>
  );
};

export default PizzaApp;



