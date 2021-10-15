import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: #f0f2f5;
`;

export const Header = styled.div`
  background: var(--blue);
  height: 26rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const HeaderText = styled.h1`
  font-size: 2.4rem;
  margin-top: -8rem;
  color: var(--shape);
`;
export const Body = styled.div`
  margin: 0 auto;
  background: #f0f2f5;
  border-radius: 0.25rem 0.25rem 0 0;
  max-width: 1480px;
  min-width: 980px;
  height: 100%;
  margin-bottom: 4rem;
`;
