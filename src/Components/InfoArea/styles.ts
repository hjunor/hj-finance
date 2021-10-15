import styled from "styled-components";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

export const Container = styled.div`
  margin-top: -2rem;
`;

export const ContainerMonth = styled.div`
  background-color: var(--shape);
  border-radius: 0%.25rem;
  padding: 2rem;
  height: 2rem;
  max-width: 1480px;
  min-width: 980px;
  display: flex;
  align-items: center;
`;

export const MonthArea = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
export const MonthArrow = styled.div`
  width: 5rem;
  text-align: center;
  cursor: pointer;
`;
export const MonthTitle = styled.div`
  flex: 1;
  text-align: center;
  text-transform: capitalize;
  color: var(--text-title);
  font-size: 1.7rem;
`;
export const ArrowBack = styled(IoIosArrowBack)`
  color: var(--blue);
  width: 3rem;
  height: 3rem;
`;
export const ArrowNext = styled(IoIosArrowForward)`
  color: var(--blue);
  width: 3rem;
  height: 3rem;
`;

export const ResumeArea = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
`;
