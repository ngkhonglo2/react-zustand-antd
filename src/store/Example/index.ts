import { create } from "zustand";
import { IDataTableExample } from "../../interfaces/Example/dataTable.interface";

type State = {
  dataTableExample: IDataTableExample[];
};

type Actions = {
  add: (val: IDataTableExample) => void;
  remove: (key: string) => void;
  edit: (val: Partial<IDataTableExample>, key: string) => void;
};

export const useExample = create<State & Actions>((set) => ({
  dataTableExample: [],
  add: (val: IDataTableExample) =>
    set((state) => ({ dataTableExample: state.dataTableExample.concat(val) })),
  remove: (key: string) =>
    set((state) => {
      const newDataTableExample = state.dataTableExample.filter(
        (val) => val.key !== key
      );
      return {
        dataTableExample: newDataTableExample,
      };
    }),
  edit: (val: Partial<IDataTableExample>, key: string) =>
    set((state) => {
      const newDataTableExample = state.dataTableExample.map((value) => {
        if (value.key === key) {
          return {
            ...value,
            ...val,
          };
        }
        return value;
      });
      return {
        dataTableExample: newDataTableExample,
      };
    }),
}));
