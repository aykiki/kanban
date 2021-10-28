import React, {
  createContext,
  FC,
  useContext,
  useEffect,
  useState,
} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { SignUp } from '../SignUp/SignUp';
import { SignIn } from '../SignIn/SignIn';
import { appAuth } from '../../firebase';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import Cabinet from '../Home/Cabinet';
import { TSignIn, TSignUp } from '../../interfaces';

export const App: FC = () => {
  return (
    <ProvideAuth>
      <Router>
        <Switch>
          <PublicRoute component={SignIn} path="/signin" />
          <PublicRoute component={SignUp} path="/signup" />
          <PrivateRoute component={Cabinet} path="/home" />
          <PrivateRoute path="/home/boards" />
          <PrivateRoute path="/home/addboard" />
          <Redirect to="/signin" from="/" />
        </Switch>
      </Router>
    </ProvideAuth>
  );
};

interface IProvideAuthProps {
  children: React.ReactNode;
}
interface IAuthProps {
  user: boolean;
  signin(data: TSignIn): Promise<any>;
  signup(data: TSignUp): Promise<any>;
  signout(): Promise<any>;
}

export const authContext = createContext<null | IAuthProps>(null);

export function ProvideAuth({ children }: IProvideAuthProps) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

function PrivateRoute({ component: Component, ...rest }: any) {
  let auth = useAuth();
  return (
    <Route
      {...rest}
      render={(props) => {
        if (auth?.user) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: '/',
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
}

function PublicRoute({ component: Component, ...rest }: any) {
  let auth = useAuth();
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!auth?.user) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: '/home',
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
}

export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth(): IAuthProps {
  const [user, setUser] = useState<any>();

  const signin = (data: TSignIn) => {
    return signInWithEmailAndPassword(appAuth, data.email, data.password).then(
      (user) => {
        setUser(user);
        return user;
      }
    );
  };
  const signup = (data: TSignUp) => {
    return createUserWithEmailAndPassword(
      appAuth,
      data.email,
      data.password
    ).then((user) => {
      setUser(user);
      return user;
    });
  };

  const signout = () => {
    return appAuth.signOut().then(() => {
      setUser(false);
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(appAuth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(false);
      }
    });
    return () => unsubscribe();
  }, []);

  return {
    user,
    signin,
    signup,
    signout,
  };
}
