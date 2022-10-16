import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { DrawerContainer, DrawerBackdrop } from '../styles/drawer.styles';
import { DrawerTypes } from './drawer_types';

const Drawer: React.FC<DrawerTypes> = ({
  children,
  isOpen,
  setClose,
  position,
  background,
}: DrawerTypes) => {
  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <DrawerBackdrop
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setClose()}
            as={motion.div}
          />
        )}
      </AnimatePresence>

      <DrawerContainer
        as={motion.div}
        initial={{ x: position === 'left' ? '-110%' : '110%' }}
        animate={{
          x: !isOpen ? (position === 'left' ? '-110%' : '110%') : '0',
        }}
        position={position}
        background={background}
      >
        {children}
      </DrawerContainer>
    </>
  );
};

Drawer.defaultProps = {
  position: 'left',
};

export default Drawer;
