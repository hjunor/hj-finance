import { Routes, Route, useNavigate } from "react-router-dom";
import Loading from "./Components/Loading";
import { useAuth } from "./hook/useAuth";
import { Home } from "./Page/Home";
import { Login } from "./Page/Login";
import { Register } from "./Page/Register";

export function Router() {
  const { signedIn } = useAuth();

  const protectedRoute = (component: any) => {
    if (signedIn === true) {
      return component;
    }

    if (signedIn === false) {
      return <Login />;
    }

    return <Loading />;
  };
  return (
    <Routes>
      <Route path="/home" element={protectedRoute(<Home />)} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<h1>about</h1>} />
      <Route path="*" element={<h1>404</h1>} />
    </Routes>
  );
}
