import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { MdClose } from 'react-icons/md';
import {
  CardDisclaimerContainer,
  CloseButton,
} from '../styles/cardDisclaimer.styles';

type Props = {
  content: string | ReactNode;
  title?: string | ReactNode;
  toggleDisclaimer: () => void;
};

const CardDisclaimer = ({ content, title, toggleDisclaimer }: Props) => {
  return (
    <CardDisclaimerContainer
      initial={{ y: '-150px' }}
      animate={{ y: 0 }}
      exit={{ y: '100%' }}
      as={motion.div}
    >
      <h5>{title}</h5>
      <p>{content}</p>
      <CloseButton onClick={() => toggleDisclaimer()}>
        <MdClose size={22} fontWeight="900" color="#000" />
      </CloseButton>
    </CardDisclaimerContainer>
  );
};

export default CardDisclaimer;
