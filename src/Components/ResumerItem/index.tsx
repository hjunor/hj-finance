import React from "react";
import { formatMoney } from "../../utils/formatMoney";

import * as S from "./styles";
type PropsResumerItem = {
  type: string;
  title: string;
  expense: number;
  income: number;
};
export const ResumerItem: React.FC<PropsResumerItem> = ({
  type,
  title,
  expense,
  income,
}) => {
  return (
    <S.Container type={type}>
      <div
        className={`${type === "amount" ? `highlight` : ""}${
          income - expense >= 0 ? `` : `_red`
        }`}
      >
        <header>
          <p>{title}</p>
          {type === "income" ? (
            <S.IconArrowUp />
          ) : type === "expense" ? (
            <S.IconArrowDown />
          ) : (
            <S.IconMoney />
          )}
        </header>
        <strong>
          {formatMoney(
            type === "income"
              ? income
              : type === "expense"
              ? expense
              : income - expense
          )}
        </strong>
      </div>
    </S.Container>
  );
};
