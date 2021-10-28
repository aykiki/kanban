import React, { FC, useState } from 'react';
import { NavigationBar } from '../NavigationBar/NavigationBar';
import './SignUp.css';
import '../SignIn/SignIn.css';
import planning_img2 from '../../assets/planning_img2.png';
import { GooSpinner } from 'react-spinners-kit';
import { TSignUp } from '../../interfaces';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { signUpSchema } from '../../validation';
import { Deploy } from 'grommet-icons';
import { useAuth } from '../App/App';

export const SignUp: FC = () => {
  const auth = useAuth();

  const [loader, setLoader] = useState(false);
  const [hoverButton, setHoverBtn] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TSignUp>({ resolver: zodResolver(signUpSchema) });

  const submitSignUp: SubmitHandler<TSignUp> = async (data) => {
    setLoader(true);
    await auth!.signup!(data).finally(() => {
      setLoader(false);
    });
  };

  return (
    <div className="page">
      <div className="formSide">
        <NavigationBar auth={false} variant="sign in" />
        <h2 className="formHeader2">Sign Up</h2>
        <form className="form" onSubmit={handleSubmit(submitSignUp)}>
          <div className="text-field">
            <label className="text-field__label" htmlFor="email">
              {errors.email === undefined && <p>Email</p>}
              {errors.email?.message && (
                <p className="errorMessages">E-mail.{errors.email?.message}</p>
              )}
            </label>
            <input {...register('email')} id="email" />
          </div>
          <div className="text-field">
            <label className="text-field__label" htmlFor="password">
              {errors.password === undefined && <p>Password</p>}
              {errors.password?.message && (
                <p className="errorMessages">
                  Password.{errors.password?.message}
                </p>
              )}
            </label>
            <input type="password" {...register('password')} id="password" />
          </div>

          <div className="text-field">
            <label className="text-field__label" htmlFor="confirm">
              {errors.confirm === undefined && <p>Confirm password</p>}
              {errors.confirm?.message && (
                <p className="errorMessages">
                  Confirm password.{errors.confirm?.message}
                </p>
              )}
            </label>
            <input type="password" {...register('confirm')} id="confirm" />
          </div>
          <button
            type="submit"
            className="formSubmit"
            onMouseEnter={() => setHoverBtn(true)}
            onMouseLeave={() => setHoverBtn(false)}
          >
            Join
            {hoverButton && <Deploy color="white" />}
          </button>
        </form>
      </div>
      {loader && (
        <>
          <div className="overlay"> </div>
          <div className="loader">
            <GooSpinner size={200} color="#ff75addb" />
          </div>
        </>
      )}
      <img src={planning_img2} className="planning_img" />
    </div>
  );
};
