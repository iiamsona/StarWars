import { GoogleLogin } from '@react-oauth/google';
import jwtDecode from 'jwt-decode';

const handleLoginSuccess = (response) => {
  const decodedToken = jwtDecode(response.credential);
  console.log('User Data:', decodedToken);
};

export default { handleLoginSuccess };
