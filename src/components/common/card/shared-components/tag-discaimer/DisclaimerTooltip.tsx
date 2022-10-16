import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import styled from 'styled-components';

export const DisclaimerContainer = styled.div({});
export const DisclaimerContent = styled.div<any>(({ position }) => ({
  position: 'absolute',
  background: '#333',
  color: '#fff',
  maxWidth: 260,
  maxHeight: 85,
  bottom: '100%',
  left: 0,
  right: 0,
  margin: 'auto',
  zIndex: 99,
  overflow: 'auto',
  whiteSpace: 'normal',
  fontSize: 11,
  padding: '.4rem',
  borderRadius: 4,
  textAlign: 'justify',
  marginBottom: 10,
  '::-webkit-scrollbar-track': {
    backgroundColor: '#F5F5F5',
  },
  '::-webkit-scrollbar': {
    width: 6,
    backgroundColor: '#F5F5F5',
  },
  '::-webkit-scrollbar-thumb': {
    backgroundColor: '#000000',
  },
}));

const DisclaimerTooltip = ({ content, position, children }: any) => {
  const [isActive, setIsActive] = useState(false);

  const showTip = () => {
    setIsActive(true);
  };

  const hideTip = () => {
    setIsActive(false);
  };

  return (
    <DisclaimerContainer>
      <AnimatePresence>
        {isActive && content && (
          <DisclaimerContent
            position={position}
            as={motion.span}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onMouseEnter={showTip}
            onMouseLeave={hideTip}
          >
            {content}
          </DisclaimerContent>
        )}
      </AnimatePresence>
      <div onMouseEnter={showTip} onMouseLeave={hideTip}>
        {children}
      </div>
    </DisclaimerContainer>
  );
};

export default DisclaimerTooltip;
