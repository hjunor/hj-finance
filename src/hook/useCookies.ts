import Cookies from "universal-cookie";

const cookie = new Cookies();

const defaultOptions = {
  path: "/",
};
export const GetCookie = (name: string, options: any) => {
  if (!name) return null;

  return cookie.get(name, { ...defaultOptions, ...options });
};
export const SetCookie = (name: string, value: string, options: any) => {
  if (!name || value === undefined) return null;

  cookie.set(name, value, { ...defaultOptions, ...options });

  return true;
};
export const RemoveCookie = (name: string, options: any) => {
  if (!name) return null;
  cookie.remove(name, { ...defaultOptions, ...options });
};

export const useCookies = () => {
  const expires = new Date();
  expires.setFullYear(expires.getFullYear() + 1);

  const options = { expires };
  const setCookie = (COOKIE: string, account: any) => {
    SetCookie(COOKIE, account, options);
  };
  const getCookie = (COOKIE: string) => GetCookie(COOKIE, options);
  const removeCookie = (COOKIE: string) => RemoveCookie(COOKIE, options);

  return { setCookie, getCookie, removeCookie };
};
