import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Protector = ({ child, ...props }) => {
  let navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('authToken')) {
      navigate('/login');
    }
  }, [navigate]); // Ensure the useEffect has the navigate dependency

  return child;
};

export default Protector;
