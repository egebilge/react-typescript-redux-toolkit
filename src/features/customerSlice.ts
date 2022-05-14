import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AddFoodToCustomerPayload {
  food: string;
  id: string;
}

interface Customer {
  id: string;
  name: string;
  food: string[];
}
export interface CustomerState {
  value: Customer[];
}

const initialState: CustomerState = {
  value: [],
};

export const customersSlices = createSlice({
  name: "customers",
  initialState,
  reducers: {
    addCustomer: (state, action: PayloadAction<Customer>) => {
      state.value.push(action.payload);
    },
    addFoodToCustomer: (
      state,
      action: PayloadAction<AddFoodToCustomerPayload>
    ) => {
      state.value.forEach((customer) => {
        if (customer.id === action.payload.id) {
          customer.food.push(action.payload.food);
        }
      });
    },
  },
});

export const { addCustomer, addFoodToCustomer } = customersSlices.actions;

export default customersSlices.reducer;
