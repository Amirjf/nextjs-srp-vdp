import { IoChevronBackCircleOutline } from 'react-icons/io5';

import { Button } from '../../../common';

const BackToInventoryButton = () => {
  return (
    <div style={{ position: 'absolute', inset: 0, height: 40 }}>
      <Button
        onClick={() => window.history.back()}
        icon={<IoChevronBackCircleOutline size={26} />}
        variant="text"
        style={{ color: '#000' }}
      >
        Back to inventory
      </Button>
    </div>
  );
};

export default BackToInventoryButton;
