import React, { useState, useEffect } from "react";

const PizzaOrderForm = ({ placeOrder }) => {
    const [order, setOrder] = useState({ type: "", size: "", base: "" });

    const handleChange = (e) => {
        setOrder({ ...order, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (order.type && order.size && order.base) {
            placeOrder({ ...order, id: Date.now() });
            setOrder({ type: "", size: "", base: "" });
        } else {
            alert("Please fill in all fields");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mb-2 d-flex justify-content-center align-items-center" >
            <div className="row">
                <label className="form-label">Type:</label>
                <div className="col-sm-10">
                    <select
                        name="type"
                        value={order.type}
                        onChange={handleChange}
                        className="form-select"
                    >
                        <option value="">Select</option>
                        <option value="Veg">Veg</option>
                        <option value="Non-Veg">Non-Veg</option>
                    </select>
                </div>
            </div>
            <div className="row ">
                <label className="form-label">Size:</label>
                <div className="col-sm-10">
                    <select
                        name="size"
                        value={order.size}
                        onChange={handleChange}
                        className="form-select"
                    >
                        <option value="">Select</option>
                        <option value="Large">Large</option>
                        <option value="Medium">Medium</option>
                        <option value="Small">Small</option>
                    </select>
                </div>
            </div>
            <div className="row ">
                <label className="form-label">Base:</label>
                <div className="col-sm-10">
                    <select
                        name="base"
                        value={order.base}
                        onChange={handleChange}
                        className="form-select"
                    >
                        <option value="">Select</option>
                        <option value="Thin">Thin</option>
                        <option value="Thick">Thick</option>
                    </select>
                </div>
            </div>
            <div className="row ">
            <div className="col-sm-10">
            <button type="submit" className="btn btn-primary">
                    Place Order
                </button>
            </div>
               
            </div>

        </form>



    );
};
export default PizzaOrderForm