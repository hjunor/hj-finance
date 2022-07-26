import { useState, useEffect } from "react";
import * as S from "./styles";

import { Item } from "../../types";
import { items } from "../../data/items";
import { getCurrentMonth, filterListByMonth } from "../../helpers/dateFilter";
import { TableArea } from "../../Components/TableArea";
import { formatList } from "../../utils/formatList";
import { InfoArea } from "../../Components/InfoArea";
import { FormArea } from "../../Components/FormArea";
export const Home = () => {
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
      <S.HeaderBox />
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
