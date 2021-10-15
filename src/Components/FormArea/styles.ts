import styled from "styled-components";

export const Container = styled.form`
  width: 100%;
  height: 6rem;
  margin-top: 1rem;
  background: var(--shape);
  border-radius: 0.25rem;
  display: flex;
  justify-content: space-around;
  align-items: center;

  button {
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

export const WrapperInput = styled.div`
  display: flex;
  flex-direction: column;

  label {
    color: var(--text-title);
    margin-bottom: 0.5rem;
  }
  input[type="date"] {
    color: var(--text-title);
  }
  input {
    color: var(--text-title);

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
    height: 2rem;
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
