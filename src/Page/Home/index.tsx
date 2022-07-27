import { useState, useEffect } from "react";
import * as S from "./styles";

import { Item } from "../../types";
import { getCurrentMonth, filterListByMonth } from "../../helpers/dateFilter";
import { TableArea } from "../../Components/TableArea";
import { formatList } from "../../utils/formatList";
import { InfoArea } from "../../Components/InfoArea";
import { FormArea } from "../../Components/FormArea";
import { useStore } from "../../hook/useStore";
import { useUser } from "../../hook/useUser";
export const Home = () => {
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [isActiveFormModal, setActiveFormModal] = useState(false);
  const { getStore } = useStore();
  const { list, userData } = useUser();

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  useEffect(() => {
    const { incomeCount, expenseCount } = formatList(filteredList);
    setIncome(incomeCount);
    setExpense(expenseCount);
  }, [filteredList]);
  useEffect(() => {
    getStore("money", userData.uid);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAddItem = (item: Item) => {
    getStore("money", userData.uid);

    // setList([...list, item]);
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
