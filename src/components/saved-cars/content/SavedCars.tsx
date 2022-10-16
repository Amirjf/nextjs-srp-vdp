import { FiHeart } from 'react-icons/fi';
import { useLocalStorage } from 'usehooks-ts';
import { Button } from '../../common';
import Badge from '../../common/badge/content/Badge';
import { useTheme } from 'styled-components';
import { Link } from 'react-router-dom';

const SavedCars = () => {
  const { palette } = useTheme();
  const [savedCars, setSaveCar] = useLocalStorage<any>('savedCars', []);

  return (
    <Link to="/favorites">
      <Badge count={savedCars ? savedCars.length : 0}>
        <Button variant="text">
          <FiHeart
            fill={palette.primary.main}
            stroke={palette.primary.main}
            size={33}
          />
        </Button>
      </Badge>
    </Link>
  );
};

export default SavedCars;
