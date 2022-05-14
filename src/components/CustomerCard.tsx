import * as React from "react";
import { useDispatch } from "react-redux";
import { addFoodToCustomer } from "../features/customerSlice";

interface CustomerCardTypes {
  id: string;
  name: string;
  food: string[];
}

export default function CustomerCard({ id, name, food }: CustomerCardTypes) {
  const dispatch = useDispatch();
  const [customerFoodInput, setCustomerFootInput] = React.useState("");
  return (
    <div className="customer-food-card-container">
      <p>{name}</p>
      <div className="customer-foods-container">
        <div className="customer-food">
          {food.map((food) => {
            return <p>{food}</p>;
          })}
        </div>
        <div className="customer-food-input-container">
          <input
            value={customerFoodInput}
            onChange={(e) => setCustomerFootInput(e.target.value)}
          />
          <button
            onClick={() => {
              if (!customerFoodInput) return;
              dispatch(
                addFoodToCustomer({
                  id,
                  food: customerFoodInput,
                })
              );
              setCustomerFootInput("");
            }}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
