import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Context";
import { useCookies } from "./useCookies";

export const useUser = () => {
  const { userData, setUser, setSignedIn, list, setList } =
    useContext(UserContext);
  const { setCookie } = useCookies();
  const navigate = useNavigate();
  function GetUserData(type: any) {
    if (type) {
      setSignedIn(true);
      setUser(type);
      setCookie("user@login", type);
      navigate("/home");
    }
  }

  return { userData, setUser, GetUserData, list, setList };
};
