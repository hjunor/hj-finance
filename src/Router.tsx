import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Loading from "./Components/Loading";
import { useAuth } from "./hook/useAuth";
import { useCookies } from "./hook/useCookies";
import { useUser } from "./hook/useUser";
import { Home } from "./Page/Home";
import { Login } from "./Page/Login";
import { Register } from "./Page/Register";

export function Router() {
  const { signedIn, loading } = useAuth();
  const { setUser } = useUser();
  const { getCookie } = useCookies();

  const protectedRoute = (component: any) => {
    if (signedIn === true) {
      return component;
    }

    if (loading) {
      return <Loading />;
    } else {
      if (!signedIn) {
        return <Login />;
      }
    }
  };

  useEffect(() => {
    if (signedIn) {
    } else {
      const user = getCookie("user@login");

      if (user) {
        setUser(user);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [signedIn]);

  return (
    <Routes>
      <Route path="/home" element={protectedRoute(<Home />)} />

      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Login />} />
      <Route path="*" element={<h1>404</h1>} />
    </Routes>
  );
}
