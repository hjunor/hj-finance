import React from "react";
import { categories } from "../../data/categories";
import { Item } from "../../types";
import { formatDate } from "../../utils/formatDate";
import { formatMoney } from "../../utils/formatMoney";

import * as S from "./styles";
type PropsTableItem = {
  item: Item;
  index: number;
};
export const TableItem: React.FC<PropsTableItem> = ({ item, index }) => {
  return (
    <S.TableBodyLine key={index}>
      <S.TableBodyItems>{formatDate(item.date.toISOString())}</S.TableBodyItems>
      <S.TableBodyItems color={categories[item.category].color}>
        {categories[item.category].title}
      </S.TableBodyItems>
      <S.TableBodyItems>{item.title}</S.TableBodyItems>
      <S.TableBodyMoney expense={categories[item.category].expense}>
        {formatMoney(item.value)}
      </S.TableBodyMoney>
    </S.TableBodyLine>
  );
};
