import { useSelector } from 'react-redux';
import { selectAuthState } from '../redux/auth/selectors';

export const useAuth = () => {
    const authState = useSelector(selectAuthState);

    return { authState };
};