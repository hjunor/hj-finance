import { categories } from "../data/categories";
import { Item } from "../types";

export function formatList(list: Item[]) {
  return list.reduce(
    (amount, item) => {
      return {
        incomeCount: categories[item.category].expense
          ? 0 + amount.incomeCount
          : item.value + amount.incomeCount,
        expenseCount: categories[item.category].expense
          ? amount.expenseCount + item.value
          : 0 + amount.expenseCount,
      };
    },
    { incomeCount: 0, expenseCount: 0 }
  );
}
