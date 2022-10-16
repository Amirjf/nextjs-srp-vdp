import React from 'react';
import useToggle from '../../../../hooks/useToggle';
import {
  CollapsibleItemContainer,
  CollapsibleItemTitle,
  CollapsibleItemContent,
  ItemTitle,
  FilterItemCount,
} from '../styles/collapsible.styles';

import { GoChevronUp } from 'react-icons/go';
import { GoChevronDown } from 'react-icons/go';
import { AnimatePresence, motion } from 'framer-motion';
import { CarsContext } from '../../../../context/CarsContext';

type Props = {
  children?: React.ReactNode;
  title?: string;
  open?: boolean;
  filterCount?: string;
  titleForCount?: string;
};

const Collapsible: React.FC<Props> = ({
  children,
  open = false,
  title,
  titleForCount,
}: Props) => {
  const [showContent, setShowContent] = useToggle(open);
  const { filters }: any = React.useContext(CarsContext);

  return (
    <CollapsibleItemContainer>
      <CollapsibleItemTitle onClick={setShowContent}>
        {showContent ? <GoChevronUp /> : <GoChevronDown />}
        <ItemTitle>{title}</ItemTitle>
        {titleForCount &&
        filters[titleForCount === 'year' ? 'vehicleYear' : titleForCount] &&
        filters[titleForCount === 'year' ? 'vehicleYear' : titleForCount]
          .length ? (
          <FilterItemCount>
            {
              filters[titleForCount === 'year' ? 'vehicleYear' : titleForCount]
                .length
            }
          </FilterItemCount>
        ) : (
          ''
        )}
      </CollapsibleItemTitle>
      <CollapsibleItemContent>
        <AnimatePresence initial={false}>
          {showContent && (
            <motion.div
              initial="collapsed"
              animate="open"
              exit="collapsed"
              variants={{
                open: { display: 'block', height: 'auto' },
                collapsed: { display: 'none', height: 0 },
              }}
            >
              {children}
              <br />
            </motion.div>
          )}
        </AnimatePresence>
      </CollapsibleItemContent>
    </CollapsibleItemContainer>
  );
};

export default Collapsible;
