'use client'

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import Cookies from 'js-cookie';


  const AuthContext = createContext({
      login: (authTokens) => {},
      logout: () => {},
  });


  export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(null); 
    const [cliente, setCliente] = useState({});
    const [pedido, setPedido] = useState({}); 
    const [caja, setCaja] = useState({}); 
    const [loading] = useState(true); 
   
    const login = useCallback(function (authTokens) {
        Cookies.set("authTokens", JSON.stringify(authTokens));
        localStorage.setItem("auth", JSON.stringify(authTokens))
        setAuth(authTokens);
    }, []);
  
    const logout = useCallback(function () {
     Cookies.remove('authTokens')
     localStorage.removeItem('auth');

     setAuth(null)
    }, []);

  
    //Guardar los datos del usuario para cuando recargue la pagina
    useEffect(() => {
      const storedAuth = localStorage.getItem('auth');
      const storedCliente = localStorage.getItem('cliente');
      const storedPedido = localStorage.getItem('pedido');
      const storedCaja = localStorage.getItem('caja');
      
      if (storedAuth) {
        setAuth(JSON.parse(storedAuth));
      }
      if (storedCliente) {
        setCliente(JSON.parse(storedCliente));
      }
      if (storedPedido) {
        setPedido(JSON.parse(storedPedido));
      }
      if (storedCaja) {
        setCaja(JSON.parse(storedCaja));
      }
    }, []);


    const value = useMemo(
        () => ({
            auth,
            cliente,
            setCliente,
            pedido,
            setPedido,
            caja,
            setCaja,
            loading,
            login,
            logout,
        }), [auth, cliente, pedido, caja, login, logout]);


    return (
        <AuthContext.Provider value={ value }>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);







/*
'use client'

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import Cookies from 'js-cookie';
import { useSession } from "next-auth/react";


  const AuthContext = createContext({
     // login: (authTokens) => {},
     // logout: () => {},
    auth: null,
    setAuth: () => {},
    cliente: () => {},
    setCliente: () => {},
    pedido: () => {},
    setPedido: () => {},
    caja: () => {},
    setCaja: () => {},
  });


  export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(null); 
    const [cliente, setCliente] = useState({});
    const [pedido, setPedido] = useState({}); 
    const [caja, setCaja] = useState({}); 
    const [loading] = useState(true); 
   
    /*const login = useCallback(function (authTokens) {
        Cookies.set("authTokens", JSON.stringify(authTokens));
        localStorage.setItem("auth", JSON.stringify(authTokens))
        setAuth(authTokens);
    }, []);
  
    const logout = useCallback(function () {
     Cookies.remove('authTokens')
     localStorage.removeItem('auth');

     setAuth(null)
    }, []);

    const { data: session } = useSession();

    useEffect(() => {
      if(session) {
        setAuth(session.user);
      } else {
        setAuth(null);
      }
    }, [session]);

    //Guardar los datos del usuario para cuando recargue la pagina
    useEffect(() => {
      //const storedAuth = localStorage.getItem('auth');
      const storedCliente = localStorage.getItem('cliente');
      const storedPedido = localStorage.getItem('pedido');
      const storedCaja = localStorage.getItem('caja');
      
      //if (storedAuth) {
      //  setAuth(JSON.parse(storedAuth));
      //}
      if (storedCliente) {
        setCliente(JSON.parse(storedCliente));
      }
      if (storedPedido) {
        setPedido(JSON.parse(storedPedido));
      }
      if (storedCaja) {
        setCaja(JSON.parse(storedCaja));
      }
    }, []);


    const value = useMemo(
        () => ({
            auth,
            cliente,
            setCliente,
            pedido,
            setPedido,
            caja,
            setCaja,
            loading,
        }), [auth, cliente, pedido, caja]);


    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);

*/