import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Context";

export const useUser = () => {
  const { userData, setUser, setSignedIn, signedIn } = useContext(UserContext);

  console.log(userData, signedIn);
  const navigate = useNavigate();
  function GetUserData(type: any) {
    if (type) {
      setSignedIn(true);
      setUser(type);
      navigate("/home");
    }
  }
  return { userData, setUser, GetUserData };
};
