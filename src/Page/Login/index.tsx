import { Container } from "./styles";

import { useAuth } from "../../hook/useAuth";

export const Login: React.FC = () => {
  const { signInWithGoogle } = useAuth();
  return (
    <>
      <Container>
        <button onClick={() => signInWithGoogle()}>Click me</button>
      </Container>
    </>
  );
};
