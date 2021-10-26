import React, { FC, useState } from 'react';
import { NavigationBar } from '../NavigationBar/NavigationBar';
import './SignIn.css';
import planning_img from '../../assets/planning_img.png';
import { SubmitHandler, useForm } from 'react-hook-form';
import { GooSpinner } from 'react-spinners-kit';
import { zodResolver } from '@hookform/resolvers/zod';
import { TSignIn } from '../../interfaces';
import { signInSchema } from '../../validation';
import { Login } from 'grommet-icons';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { appAuth } from '../../firebase';

export const SignIn: FC = () => {
  const [loader, setLoader] = useState(false);
  const [hoverButton, setHoverBtn] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TSignIn>({ resolver: zodResolver(signInSchema) });

  const submitSignIn: SubmitHandler<TSignIn> = async (data) => {
    setLoader(true);
    signInWithEmailAndPassword(appAuth, data.email, data.password).finally(
      () => {
        setLoader(false);
      }
    );
  };

  return (
    <div className="page">
      <div className="formSide">
        <NavigationBar auth={false} variant="sign up" />
        <h2 className="formHeader">Sign In</h2>
        <form className="form" onSubmit={handleSubmit(submitSignIn)}>
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

          <button
            type="submit"
            className="formSubmit"
            onMouseEnter={() => setHoverBtn(true)}
            onMouseLeave={() => setHoverBtn(false)}
          >
            Login
            {hoverButton && <Login color="white" />}
          </button>
        </form>
      </div>
      {loader && (
        <>
          <div className="overlay"> </div>
          <div className="loader">
            <GooSpinner size={200} color="#75b3ffdb" />
          </div>
        </>
      )}
      <img src={planning_img} className="planning_img" />
    </div>
  );
};
