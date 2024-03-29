import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { auth, signOut, signIn } from "../firebase/config";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { UserContext } from "../Context";
import { useUser } from "./useUser";
import { useCookies } from "./useCookies";

export const useAuth = () => {
  const { signedIn, setSignedIn, setUser } = useContext(UserContext);
  const { GetUserData } = useUser();
  const { removeCookie } = useCookies();
  const navigate = useNavigate();

  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  GetUserData(user?.user?.providerData[0]);

  auth.onAuthStateChanged((user) => {
    if (user) {
      setSignedIn(true);
    } else {
      setSignedIn(false);
    }
  });

  function logout() {
    signOut(auth)
      .then(() => {
        setSignedIn(false);
        setUser(false);
        removeCookie("user@login");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return { signedIn, logout, signInWithGoogle, signIn, user, loading, error };
};
