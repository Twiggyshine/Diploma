
import { Alert as BootstrapAlert } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { hideAlert } from '../../redux/cartSlice';

const Alert: React.FC = () => {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(hideAlert());
  };

  return (
    <BootstrapAlert variant="success" onClose={handleClose} dismissible>
      Product added to cart successfully!
    </BootstrapAlert>
  );
};

export default Alert;