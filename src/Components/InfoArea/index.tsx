import React from "react";
import { formatDateMonth } from "../../utils/formatDate";
import { ResumerItem } from "../ResumerItem";
import * as S from "./styles";
type PropsInfoArea = {
  currentMonth: string;
  setCurrentMonth(newDate: string): void;
  income: number;
  expense: number;
};
export const InfoArea: React.FC<PropsInfoArea> = ({
  currentMonth,
  setCurrentMonth,
  income,
  expense,
}) => {
  const handlePrevMonth = () => {
    let [year, month] = currentMonth.split("-");
    let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
    currentDate.setMonth(currentDate.getMonth() - 1);

    setCurrentMonth(
      `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`
    );
  };

  const handleNextMonth = () => {
    let [year, month] = currentMonth.split("-");
    let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
    currentDate.setMonth(currentDate.getMonth() + 1);

    setCurrentMonth(
      `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`
    );
  };
  return (
    <S.Container>
      <S.ResumeArea>
        <ResumerItem
          title="Entrada"
          expense={expense}
          income={income}
          type="income"
        />
        <ResumerItem
          title="Saída"
          expense={expense}
          income={income}
          type="expense"
        />
        <ResumerItem
          title="Saldo"
          expense={expense}
          income={income}
          type="amount"
        />
      </S.ResumeArea>
      <S.ContainerMonth>
        <S.MonthArea>
          <S.MonthArrow onClick={handlePrevMonth}>
            <S.ArrowBack />
          </S.MonthArrow>
          <S.MonthTitle>{formatDateMonth(currentMonth)}</S.MonthTitle>
          <S.MonthArrow onClick={handleNextMonth}>
            <S.ArrowNext />
          </S.MonthArrow>
        </S.MonthArea>
      </S.ContainerMonth>
    </S.Container>
  );
};
