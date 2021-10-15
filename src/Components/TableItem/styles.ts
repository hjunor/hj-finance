import styled from "styled-components";

export const TableBodyItems = styled.th<{ color?: string; expense?: boolean }>`
  padding: 1.2rem 1rem;
  border-radius: 0.25rem;
  text-align: left;
  font-weight: 400;
  color: ${(props) => (props.color ? props.color : `var(--text-title)`)};
`;
export const TableBodyMoney = styled.th<{ expense?: boolean }>`
  padding: 1.2rem 1rem;
  border-radius: 0.25rem;
  text-align: left;
  font-weight: 400;
  color: ${(props) => (props.expense ? `var(--red)` : `var(--green)`)};
  &::before {
    content: "${(props) => (props.expense ? "- " : "")}";
  }
`;
export const TableBodyLine = styled.tr`
  background: var(--shape);
`;
