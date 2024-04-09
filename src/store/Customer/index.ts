import { create } from "zustand";
import { ICustomer } from "../../interfaces/Customer/customer.interface";
import { NavigateFunction } from "react-router-dom";

interface State {
  isOpenModal: boolean;
  dataCustomers: ICustomer[];
}

interface Actions {
  handleOpenModal: (navigate?: NavigateFunction) => void;
  add: (val: ICustomer) => void;
}

export const useCustomer = create<State & Actions>((set) => ({
  isOpenModal: false,
  dataCustomers: [],
  add: (val: ICustomer) =>
    set((state) => ({ dataCustomers: state.dataCustomers.concat(val) })),
  handleOpenModal: (navigate) => {
    set((state) => ({ isOpenModal: !state.isOpenModal }));
    navigate && navigate(-1);
  },
}));
