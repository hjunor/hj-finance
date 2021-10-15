import { useState, useEffect } from "react";
import GlobalStyles from "./styles/global";
import * as S from "./App.styles";

import { Item, Category } from "./types";
import { categories } from "./data/categories";
import { items } from "./data/items";
import { getCurrentMonth, filterListByMonth } from "./helpers/dateFilter";
import { TableArea } from "./Components/TableArea";
import { InfoArea } from "./Components/InfoArea";
import FormArea from "./Components/FormArea";
export const App = () => {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);
  useEffect(() => {
    const { incomeCount, expenseCount } = filteredList.reduce(
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
    setIncome(incomeCount);
    setExpense(expenseCount);
  }, [filteredList]);

  const handleAddItem = (item: Item) => {
    setList([...list, item]);
  };
  return (
    <S.Container>
      <GlobalStyles />
      <S.Header>
        <S.HeaderText>Finances</S.HeaderText>
      </S.Header>
      <S.Body>
        <InfoArea
          currentMonth={currentMonth}
          setCurrentMonth={setCurrentMonth}
          income={income}
          expense={expense}
        />
        <FormArea onAdd={handleAddItem} />

        <TableArea list={filteredList} />
      </S.Body>
    </S.Container>
  );
};
