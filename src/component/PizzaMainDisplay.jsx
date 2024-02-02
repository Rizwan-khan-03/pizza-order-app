import PizzaCard from "./PizzaCard";

const PizzaMainDisplay = ({ orders, updateOrderStage, cancelOrder }) => {
  return (
    <div className="scrollable-container" style={{ maxHeight: "600px", overflowY: "auto" }}>
      <h2 className="text-center mb-3">Order List</h2>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {orders.map((order) => (
          <div key={order?.id} className="col">
            <PizzaCard
              order={order}
              updateOrderStage={updateOrderStage}
              cancelOrder={cancelOrder}
              
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PizzaMainDisplay;
