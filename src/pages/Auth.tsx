import { GoogleLogin } from '@react-oauth/google';
import { GoogleOAuthProvider } from '@react-oauth/google';

interface AuthProps {
  onLoginSuccess: (response: any) => void;
  onLoginFailure: (error: any) => void;
}

const Auth = ({ onLoginSuccess, onLoginFailure }: AuthProps) => {
  return (
    <div className="bg-bg flex h-screen flex-col items-center bg-cover bg-center pt-24">
      <div className="flex transform flex-col items-center rounded-lg bg-black bg-opacity-50 p-8 shadow-lg transition duration-500 hover:scale-105">
        <h1 className="animate-fadeIn mb-6 text-5xl font-extrabold text-yellow-400">Star Wars</h1>
        <p className="mb-8 text-center text-white">
          Join the Galactic Empire! Please log in to continue.
        </p>
        <GoogleOAuthProvider clientId="784305513912-uutashhpmunpjbgegqgti6tl21dgh7kn.apps.googleusercontent.com">
          <div>
            <GoogleLogin
              onSuccess={onLoginSuccess}
              onError={onLoginFailure}
              className="w-full transform rounded bg-yellow-500 px-4 py-2 text-white transition duration-300 hover:scale-105 hover:bg-yellow-600"
            />
          </div>
        </GoogleOAuthProvider>
      </div>
    </div>
  );
};

export default Auth;
