import { useState, useEffect } from "react";
import GlobalStyles from "./styles/global";
import * as S from "./App.styles";

import { Item } from "./types";
import { items } from "./data/items";
import { getCurrentMonth, filterListByMonth } from "./helpers/dateFilter";
import { TableArea } from "./Components/TableArea";
import { InfoArea } from "./Components/InfoArea";
import FormArea from "./Components/FormArea";
import { formatList } from "./utils/formatList";
export const App = () => {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [isActiveFormModal, setActiveFormModal] = useState(false);

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  useEffect(() => {
    const { incomeCount, expenseCount } = formatList(filteredList);
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
        <S.Nav>
          <S.HeaderText>
            <S.IconMoney />
            HJ Finances
          </S.HeaderText>
        </S.Nav>
      </S.Header>
      <S.HeaderBox></S.HeaderBox>
      <S.Body>
        <InfoArea
          currentMonth={currentMonth}
          setCurrentMonth={setCurrentMonth}
          income={income}
          expense={expense}
        />
        <FormArea
          isActiveFormModal={isActiveFormModal}
          setActiveFormModal={setActiveFormModal}
          onAdd={handleAddItem}
        />
        <S.Button onClick={() => setActiveFormModal(true)}>
          + Adicionar
        </S.Button>

        <TableArea list={filteredList} />
      </S.Body>
    </S.Container>
  );
};
