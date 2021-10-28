import React, { FC } from 'react';
import './NavigationBar.css';
import { NavLink } from 'react-router-dom';
import { Logout, User } from 'grommet-icons';
import { appAuth } from '../../firebase';
import { useAuth } from '../App/App';
interface INavBarProps {
  auth: boolean;
  variant?: 'sign in' | 'sign up';
}

export const NavigationBar: FC<INavBarProps> = ({ auth, variant }) => {
  const authObject = useAuth();

  const handleSignOut = async () => {
    await authObject?.signout();
  };
  return (
    <>
      {!auth && (
        <div className="unAuthNav">
          <div className="logo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="Layer_1"
              viewBox="0 0 429.8 337.7"
              width="40"
              height="30"
            >
              <path
                className="svgPath"
                d="M201.4.4C238.6-2 276.5 5.5 310 22.1c49.3 24.2 88.6 68 107.2 119.7 8.2 22.8 12.6 47 12.6 71.2v90c0 3.7.1 7.4-.8 11-2 9.1-8.5 17.1-17 20.9-5.9 2.8-12.7 3.1-19.1 2.1-13.7-2.5-24.4-15.4-24.5-29.3-.1-27.9 0-55.8 0-83.8.2-7.9.3-16.4-4-23.4-7-12.9-23.8-19-37.4-13.5-11.5 4.1-19.8 15.7-19.9 27.9-.1 28.4 0 56.7 0 85 0 5.3.3 10.7-1.3 15.8-2.9 10-11.2 18.1-21.2 20.8-13.1 3.6-28.2-2.2-34.8-14.3-4.5-7.3-4.2-16.1-4.1-24.3-.1-28.1.1-56.3-.1-84.4-.3-14.3-12-27.2-26.2-29-9.2-1.4-18.9 1.7-25.6 8.2-6 5.7-9.5 13.9-9.5 22.2v82c-.1 6.9.7 14-1.9 20.5-4.1 11.7-15.9 20.3-28.4 20-12.8.7-25.2-8.1-29.3-20.1-2.3-5.9-1.8-12.3-1.8-18.5 0-28.3.1-56.6 0-84.9-.1-14-11-26.8-24.7-29.3-12.5-2.7-26.3 3.6-32.5 14.8-2.7 4.7-4.1 10.1-4.1 15.4v91.9c.1 8.9-4 17.8-10.9 23.5-10.4 9.1-27.2 9.6-38.1 1.2C4.7 326 0 316.7 0 307.1V214c.1-35.2 9-70.3 25.8-101.3C39.5 87.4 58.4 64.9 81 46.9 115 19.5 157.7 3 201.4.4z"
                id="_x23_0da8ffff"
              />
            </svg>
          </div>

          <NavLink to={'/' + variant!.split(' ').join('')}>
            <button className="navButton">
              {variant!
                .split(/\s+/)
                .map((word) => word[0].toUpperCase() + word.substring(1))
                .join(' ')}
            </button>
          </NavLink>
        </div>
      )}
      {auth && (
        <div className="authNav">
          <div className="logo cursor">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="Layer_1"
              viewBox="0 0 429.8 337.7"
              width="30"
              height="20"
            >
              <path
                className="svgPath"
                d="M201.4.4C238.6-2 276.5 5.5 310 22.1c49.3 24.2 88.6 68 107.2 119.7 8.2 22.8 12.6 47 12.6 71.2v90c0 3.7.1 7.4-.8 11-2 9.1-8.5 17.1-17 20.9-5.9 2.8-12.7 3.1-19.1 2.1-13.7-2.5-24.4-15.4-24.5-29.3-.1-27.9 0-55.8 0-83.8.2-7.9.3-16.4-4-23.4-7-12.9-23.8-19-37.4-13.5-11.5 4.1-19.8 15.7-19.9 27.9-.1 28.4 0 56.7 0 85 0 5.3.3 10.7-1.3 15.8-2.9 10-11.2 18.1-21.2 20.8-13.1 3.6-28.2-2.2-34.8-14.3-4.5-7.3-4.2-16.1-4.1-24.3-.1-28.1.1-56.3-.1-84.4-.3-14.3-12-27.2-26.2-29-9.2-1.4-18.9 1.7-25.6 8.2-6 5.7-9.5 13.9-9.5 22.2v82c-.1 6.9.7 14-1.9 20.5-4.1 11.7-15.9 20.3-28.4 20-12.8.7-25.2-8.1-29.3-20.1-2.3-5.9-1.8-12.3-1.8-18.5 0-28.3.1-56.6 0-84.9-.1-14-11-26.8-24.7-29.3-12.5-2.7-26.3 3.6-32.5 14.8-2.7 4.7-4.1 10.1-4.1 15.4v91.9c.1 8.9-4 17.8-10.9 23.5-10.4 9.1-27.2 9.6-38.1 1.2C4.7 326 0 316.7 0 307.1V214c.1-35.2 9-70.3 25.8-101.3C39.5 87.4 58.4 64.9 81 46.9 115 19.5 157.7 3 201.4.4z"
                id="_x23_0da8ffff"
              />
            </svg>
          </div>
          <div className="bar">
            {!appAuth!.currentUser!.photoURL && <User color="white" />}
            {appAuth.currentUser!.photoURL && (
              <img
                className="avatar cursor"
                src={appAuth.currentUser!.photoURL}
              />
            )}
            <Logout
              color="white"
              size="medium"
              onClick={handleSignOut}
              className="cursor"
            />
          </div>
        </div>
      )}
    </>
  );
};
