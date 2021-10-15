import { Category } from "../types";

export const categories: Category = {
  food: {
    title: "Alimentação",
    color: "#5429CC",
    expense: true,
  },
  rent: { title: "Aluguel", color: "#E52E4D", expense: true },
  salary: { title: "Salário", color: "#33CC95", expense: false },
  purchases: { title: "Compras", color: "#894aa8", expense: true },
};
