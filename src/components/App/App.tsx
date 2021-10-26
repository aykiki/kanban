import React, { FC, useEffect, useLayoutEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useHistory,
} from 'react-router-dom';
import { SignUp } from '../SignUp/SignUp';
import { SignIn } from '../SignIn/SignIn';
import { appAuth } from '../../firebase';
import { onAuthStateChanged } from 'firebase/auth';

export const App: FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/(signin|signup)">
          <PublicLayout>
            <Switch>
              <Route component={SignIn} path="/signin" />
              <Route component={SignUp} path="/signup" />
            </Switch>
          </PublicLayout>
        </Route>

        <Route path="/home">
          <PrivateLayout>
            <Switch>
              <Route path="/home" />
            </Switch>
          </PrivateLayout>
        </Route>

        <Redirect to="/signin" from="/" />
      </Switch>
    </Router>
  );
};

interface ILayoutProps {
  children: React.ReactNode;
}

export const PublicLayout = ({ children }: ILayoutProps) => {
  const history = useHistory();
  console.log(appAuth.currentUser);
  useLayoutEffect(() => {
    const unsubscribe = onAuthStateChanged(appAuth, (user) => {
      if (user) {
        history.push('/home');
        unsubscribe();
      }
    });
  }, []);

  return (
    <>
      <div>{children}</div>
    </>
  );
};

export const PrivateLayout = ({ children }: ILayoutProps) => {
  const history = useHistory();
  console.log(appAuth.currentUser);

  useLayoutEffect(() => {
    const unsubscribe = onAuthStateChanged(appAuth, (user) => {
      if (!user) {
        history.push('/');
        unsubscribe();
      }
    });
  }, []);

  return (
    <>
      <div>{children}</div>
    </>
  );
};
