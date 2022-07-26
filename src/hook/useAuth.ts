import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { auth, signOut } from "../firebase/config";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { UserContext } from "../Context";
import { useUser } from "./useUser";
export const useAuth = () => {
  const { signedIn, setSignedIn, setUser } = useContext(UserContext);
  const { GetUserData } = useUser();

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
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return { signedIn, logout, signInWithGoogle, user, loading, error };
};
