const  PizzaCard = ({ order, updateOrderStage, cancelOrder }) => {
    const handleNext = () => {
        // updateOrderStage(order.id, "Order in Making");
    };

    const handlePicked = () => {
        updateOrderStage(order.id, "Order Picked");
    };

    const handleCancel = () => {
        cancelOrder(order.id);
    };

    return (
        <div className={`col  ${order?.stage === "Order Picked" ? "text-white bg-danger" : ""}`}>
            <div className="card h-50 w-60" >
                <div className="card-body">
                    <h5 className="card-title">Order ID: {order?.id}</h5>
                    <p className="card-text">Type: {order?.type}</p>
                    <p className="card-text">Size: {order?.size}</p>
                    <p className="card-text">Base: {order?.base}</p>
                    <p className="card-text">Stage: {order?.stage}</p>
                    <p className="card-text">Time Spent: {order?.time} seconds</p>
                    {order?.stage !== "Order Picked" && (
                        <>
                            <button onClick={handleNext} className="btn btn-primary me-2">
                                Next
                            </button>
                            <button onClick={handleCancel} className="btn btn-danger">
                                Cancel
                            </button>
                        </>
                    )}
                    {order.stage === "Order Ready" && (
                        <button onClick={handlePicked} className="btn btn-success">
                            Picked
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};
export default PizzaCard
