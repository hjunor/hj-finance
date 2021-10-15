import { Item } from "../../types";
import { TableItem } from "../TableItem";
import * as S from "./styles";

type PropsTableArea = {
  list: Item[];
};

export const TableArea: React.FC<PropsTableArea> = ({ list }) => {
  return (
    <S.Table>
      <thead>
        <S.TableLine>
          <S.TableHeadColumn width={100}>Data</S.TableHeadColumn>
          <S.TableHeadColumn width={130}>Categoria</S.TableHeadColumn>
          <S.TableHeadColumn>Título</S.TableHeadColumn>
          <S.TableHeadColumn width={150}>Valor</S.TableHeadColumn>
        </S.TableLine>
      </thead>
      <tbody>
        {list.map((item, index) => (
          <TableItem item={item} index={index} />
        ))}
      </tbody>
    </S.Table>
  );
};
