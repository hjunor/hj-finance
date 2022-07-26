import { createContext, useState, ReactNode } from "react";

interface UserContextData {
  userData: any;
  signedIn: Boolean;
  setUser: (type: any) => void;
  setSignedIn: (type: any) => void;
}
export const UserContext = createContext<UserContextData>(
  {} as UserContextData
);
interface UserContextProps {
  children: ReactNode;
}
export const UserProvider = ({ children }: UserContextProps) => {
  const [userData, setUser] = useState<Boolean>(false);
  const [signedIn, setSignedIn] = useState<Boolean>(false);

  return (
    <UserContext.Provider
      value={{
        setUser,
        userData,
        signedIn,
        setSignedIn,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
