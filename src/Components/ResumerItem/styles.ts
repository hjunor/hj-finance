import styled from "styled-components";
import { BsArrowDownCircle, BsArrowUpCircle } from "react-icons/bs";
import { RiMoneyDollarCircleLine } from "react-icons/ri";

export const Container = styled.div<{ type: string }>`
  margin-top: -10rem;
  div {
    background: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--text-title);
    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    strong {
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
      &::before {
        content: "${(props) => (props.type === "expense" ? "- " : "")}";
      }
    }
    &.highlight {
      background: var(--green);
      color: var(--shape);
    }
    &.highlight_red {
      background: var(--red);
      color: var(--shape);
    }
  }
`;

export const IconArrowDown = styled(BsArrowDownCircle)`
  color: var(--red);
  width: 2rem;
  height: 2rem;
`;
export const IconArrowUp = styled(BsArrowUpCircle)`
  color: var(--green);
  width: 2rem;
  height: 2rem;
`;
export const IconMoney = styled(RiMoneyDollarCircleLine)`
  color: var(--shape);
  width: 2rem;
  height: 2rem;
`;
