import { RiMoneyDollarCircleLine } from "react-icons/ri";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: #f0f2f5;
`;

export const Header = styled.div`
  background: var(--blue-light);
  height: 5rem;
`;
export const Nav = styled.nav`
  max-width: 1480px;
  height: 5rem;
  display: flex;
  align-items: center;
  margin: 0 auto;
`;
export const HeaderBox = styled.div`
  background: var(--blue);
  height: 18rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const HeaderText = styled.h1`
  font-size: 1.4rem;
  color: var(--shape);
  display: flex;
  align-items: center;
  svg {
    margin-right: 1rem;
  }
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

export const IconMoney = styled(RiMoneyDollarCircleLine)`
  color: var(--green);
  width: 2rem;
  height: 2rem;
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
