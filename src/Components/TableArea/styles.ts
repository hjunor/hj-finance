import styled from "styled-components";

export const Table = styled.table`
  border-spacing: 0 0.5rem;

  width: 100%;
  background: transparent;
  border-radius: 0.25rem;
  margin: 2rem auto;
`;
export const TableHeadColumn = styled.th<{ width?: number }>`
  width: ${(props) => (props.width ? `${props.width}px` : `auto`)};
  padding: 1.2rem 1rem;
  border-radius: 0.25rem;
  text-align: left;
  color: var(--text);
`;

export const TableLine = styled.tr`
  background: transparent;
`;

export const Warning = styled.h1`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  height: 8rem;
`;
