import { useEffect } from 'react';
import Router, { useRouter } from 'next/router';
import isAuthenticated from './isAuthenticated';

// this would change later on once backend has the authentication
// working.
const withAuth = <P extends {}>(WrappedComponent: React.ComponentType<P>) => {
  const Wrapper: React.FC<P> = (props) => {
    const router = useRouter();

    useEffect(() => {
      const token = localStorage.getItem('authToken');
      const isLoggedIn = isAuthenticated(token as string);
      if (!isLoggedIn) {
        router.push('/access-denied');
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <WrappedComponent {...props} />;
  };

  return Wrapper;
};

export default withAuth;
