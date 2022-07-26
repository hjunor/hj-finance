import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background: #f0f2f5;
`;

export const Header = styled.div`
  background: var(--blue-light);
  height: 5rem;
`;
export const Nav = styled.nav`
  max-width: 1140px;
  padding: 0 3rem;
  height: 5rem;
  display: flex;
  align-items: center;
  margin: 0 auto;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;

    button {
      padding: 0.7rem 2rem;
      background: var(--shape);
      border-radius: 8px;
      font-weight: bold;
      color: var(--blue);
      &:hover {
        color: var(--shape);
        background: var(--blue);
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
      }
    }
    span {
      color: var(--shape);
    }
    img {
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
      margin: 0 1rem;
    }
  }
`;

export const HeaderText = styled.h1`
  display: flex;
  align-items: center;
  svg {
    margin-right: 1rem;
  }
`;

export const IconMoney = styled(RiMoneyDollarCircleLine)`
  color: var(--green);
  width: 2rem;
  height: 2rem;
`;

export const LinkHome = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font-size: 1.4rem;
    color: var(--shape);
  }
`;
