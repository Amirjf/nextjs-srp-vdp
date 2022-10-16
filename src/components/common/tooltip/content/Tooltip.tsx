import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { TooltipContainer, TooltipContent } from '../styles/tooltip.styles';

const Tooltip = (props: any) => {
  const [active, setActive] = useState(false);

  const showTip = () => {
    setActive(true);
  };

  const hideTip = () => {
    setActive(false);
  };

  return (
    <TooltipContainer
      {...(!props.showOnClick
        ? { onMouseEnter: showTip }
        : { onMouseDown: showTip })}
      onMouseLeave={hideTip}
    >
      {/* Wrapping */}
      {props.children}
      <AnimatePresence>
        {active && (
          <TooltipContent
            position={props.position}
            as={motion.span}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Content */}
            {props.content}
          </TooltipContent>
        )}
      </AnimatePresence>
    </TooltipContainer>
  );
};

export default Tooltip;
