import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { FiMinus, FiPlus } from 'react-icons/fi';
import { AccordionHeader, AccordionContent } from '../styles/accordion.styles';
import { AccordionPropsTypes } from './accordion_types';

const Accordion = ({ children, title }: AccordionPropsTypes) => {
  const [showContent, setShowContent] = useState(false);
  const toggleContent = () => {
    setShowContent(!showContent);
  };
  return (
    <motion.div style={{ marginBottom: showContent ? 20 : 0 }}>
      <AnimatePresence initial={false}>
        <AccordionHeader onClick={toggleContent}>
          <motion.span animate={{ rotate: showContent ? -180 : 0 }}>
            {showContent ? <FiMinus size={25} /> : <FiPlus size={25} />}
          </motion.span>

          <span>{title}</span>
        </AccordionHeader>
        {showContent && (
          <AccordionContent
            as={motion.div}
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 },
            }}
          >
            <div style={{ padding: '1rem' }}>{children}</div>
          </AccordionContent>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Accordion;
