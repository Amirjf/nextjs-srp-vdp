import React, { createContext, useCallback, useState } from 'react';

export const VdpContext = createContext({});

export const VdpProvider = ({ children }: any) => {
  const [infoAction, setInfoAction] = useState('baseInfo');
  const [isGalleryMode, setIsGalleryMode] = useState(false);
  const [isShowingStickyGallery, setIsShowingStickyGallery] = useState(false);

  const setPageAction = useCallback((term: string) => {
    setInfoAction(term);
  }, []);

  const setIsVisible = useCallback((val: boolean) => {
    setIsShowingStickyGallery(val);
  }, []);

  const value = {
    setInfoAction,
    infoAction,
    isGalleryMode,
    setIsGalleryMode,
    setPageAction,
    setIsShowingStickyGallery,
    isShowingStickyGallery,
    setIsVisible,
  };

  return <VdpContext.Provider value={value}>{children}</VdpContext.Provider>;
};
