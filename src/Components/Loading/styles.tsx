import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  p {
    position: absolute;
    font-size: 14px;
    color: rgb(54, 54, 54);
    font-weight: 600;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    font-family: sans-serif;
  }

  div {
    height: 14rem;
    width: 14rem;
    border: 20px solid var(--blue);
    border-left: 20px solid var(--blue-light);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: spin infinite 1.5s linear;
  }
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
