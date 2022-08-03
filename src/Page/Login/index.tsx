import * as S from "./styles";

import { useAuth } from "../../hook/useAuth";
import img from "../../Assets/json/animation.json";
import { useLottie } from "lottie-react";
import { Google } from "../../Components/Icons/Google";

export const Login: React.FC = () => {
  const { signInWithGoogle } = useAuth();

  const options = {
    animationData: img,
    loop: true,
  };
  const { View } = useLottie(options);
  function handlerSignInWithGoogle() {
    console.log("signInWithGoogle");
    signInWithGoogle();
  }
  return (
    <S.Container>
      <S.ContentLeft>
        <h1>Agilidade em gerenciar seus Gastos</h1>
        {View}
      </S.ContentLeft>
      <S.ContentRight>
        <S.Title>
          <S.IconMoney />
          <p>HJ Finances</p>
        </S.Title>
        <S.WrapperButton onClick={handlerSignInWithGoogle}>
          <Google />
          <p>Login com Google</p>
        </S.WrapperButton>
      </S.ContentRight>
    </S.Container>
  );
};
