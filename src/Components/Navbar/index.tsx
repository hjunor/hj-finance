import { useAuth } from "../../hook/useAuth";
import { useUser } from "../../hook/useUser";
import * as S from "./styles";

export const Navbar = () => {
  const { logout } = useAuth();
  const { userData } = useUser();
  function handlerLogout() {
    logout();
  }
  return (
    <S.Header>
      <S.Nav>
        <S.HeaderText>
          <S.LinkHome to="/home">
            <S.IconMoney />
            <p>HJ Finances</p>
          </S.LinkHome>
        </S.HeaderText>
        <div>
          {userData && (
            <>
              <span>{userData?.displayName}</span>
              <img src={userData?.photoURL}  alt="foto" />
              <button onClick={handlerLogout}>logout</button>
            </>
          )}
        </div>
      </S.Nav>
    </S.Header>
  );
};
