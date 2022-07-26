import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: #f0f2f5;
`;

export const Body = styled.div`
  margin: 0 auto;
  background: #f0f2f5;
  border-radius: 0.25rem 0.25rem 0 0;
  max-width: 1140px;
  padding: 0 3rem;
  min-width: 980px;
  height: 100%;
  margin-bottom: 4rem;
`;

export const Button = styled.button`
  background: var(--blue);
  border: none;
  padding: 1rem 2rem;
  color: var(--shape);
  border-radius: 0.25rem;
  cursor: pointer;
  position: fixed;
  right: 2rem;
  bottom: 5rem;
`;

export const HeaderBox = styled.div`
  background: var(--blue);
  height: 18rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
