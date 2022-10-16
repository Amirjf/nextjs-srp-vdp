import React from 'react';
import { TagContainer, TagIconContainer } from '../styles/Tag.styles';
import { TagProps } from './tag_types';
import { MdClose } from 'react-icons/md';

const Tag: React.FC<TagProps> = ({
  children,
  onClose,
  variant,
  ...props
}: TagProps) => {
  const [isClose, setIsClose] = React.useState<Boolean>(true);

  const handleClose = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    onClose?.(e);
    setIsClose(false);
  };
  return (
    isClose && (
      <TagContainer
        onClick={variant !== 'filled' ? handleClose : () => {}}
        variant={variant}
        {...props}
      >
        {children}
        <TagIconContainer onClick={handleClose}>
          {<MdClose size={22} />}
        </TagIconContainer>
      </TagContainer>
    )
  );
};

Tag.defaultProps = {
  variant: 'filled',
};

export default Tag;
