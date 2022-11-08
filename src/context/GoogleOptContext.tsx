import React, { createContext, useState, useEffect } from 'react';
import { useReadLocalStorage } from 'usehooks-ts';
import CarClient from '../client/client';

export const GoogleContext = createContext({});

export const GoogleBotProvider: React.FC<any> = ({ children }: any) => {
  const [gChecker, setGChekcer] = useState<boolean>();
  const [loading, setLoading] = useState<boolean>(true);
  const [srpTheme, setSrpTheme] = useState('');

  const localSrpOpt = useReadLocalStorage<any>('srpOpt');

  useEffect(() => {
    const isGoogeBot = async () => {
      try {
        setLoading(true);
        const { data } = await CarClient.get('/opt.json?type=srpopt');
        const { srp_theme, gchecker } = data;
        setGChekcer(gchecker);
        setSrpTheme(srp_theme);
        setLoading(false);
      } catch (err) {
        setGChekcer(false);
        setLoading(false);
      }
    };
    if (!localSrpOpt) {
      isGoogeBot();
    }
  }, []);

  const cachedSrpTheme = localSrpOpt ? localSrpOpt.srp_theme : srpTheme;
  const isGoogleBot = localSrpOpt ? localSrpOpt?.gchecker : gChecker;

  const value = {
    gChecker,
    isGoogleBot,
    loading,
    srpTheme,
    cachedSrpTheme,
    localSrpOpt,
  };

  return (
    <GoogleContext.Provider value={value}>{children}</GoogleContext.Provider>
  );
};
