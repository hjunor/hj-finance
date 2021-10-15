import styled from "styled-components";

export const Container = styled.form`
  width: 30rem;
  height: 30rem;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  background: var(--shape);
  border-radius: 0.25rem;
  justify-content: space-around;
  align-items: center;
  padding: 1.5rem;

  button {
    height: 3rem;
    width: 90%;
    padding: 0.7rem;
    color: var(--shape);
    border-radius: 0.25rem;
    border: none;
    background: var(--blue);
    &:disabled {
      background: var(--fill);
    }
  }
`;

export const Overlay = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 99;

  background: #00000080;
`;

export const WrapperInput = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;

  label {
    color: var(--text);
    margin-bottom: 0.5rem;
  }
  input[type="date"] {
    color: var(--text-title);
  }
  input {
    color: var(--text-title);
    height: 2rem;
    padding: 0.5rem 1rem;
    background: var(--fill);
    border: none;
    border-radius: 0.25rem;
  }

  select {
    color: var(--text-title);
    outline: none;
    border: none;
    font-size: 1rem;
    height: 3rem;
    padding: 0.5rem 1rem;
    background: var(--fill);
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
  }
`;

export const Error = styled.span`
  margin-top: 0.5rem;
  font-size: 9px;
  color: var(--red);
  width: inherit;
`;
