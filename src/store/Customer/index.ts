import { create } from "zustand";
import { ICustomer } from "../../interfaces/Customer/customer.interface";

interface State {
  isOpenModal: boolean;
  dataCustomers: ICustomer[];
}

interface Actions {
  add: (val: ICustomer) => void;
}

export const useCustomer = create<State & Actions>((set) => ({
  isOpenModal: false,
  dataCustomers: [],
  add: (val: ICustomer) =>
    set((state) => ({ dataCustomers: state.dataCustomers.concat(val) })),
}));
