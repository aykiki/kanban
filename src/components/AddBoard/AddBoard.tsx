import React, { useState } from 'react';
import './AddBoard.css';
import { TCreateBoard } from '../../interfaces';
import { createBoardSchema } from '../../validation';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { NewWindow } from 'grommet-icons';
import { Popup } from '../Popup/Popup';
export const AddBoard = () => {
  const [loader, setLoader] = useState(false);
  const [hoverButton, setHoverBtn] = useState(false);
  const [titleBoard, setTitleBoard] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TCreateBoard>({ resolver: zodResolver(createBoardSchema) });

  const submitCreation: SubmitHandler<TCreateBoard> = async (data) => {
    setLoader(true);
    setTitleBoard(data.title);
  };

  return (
    <div>
      <h2 className="title">Create board</h2>

      <form className="addBoardForm" onSubmit={handleSubmit(submitCreation)}>
        <div className="addBoardTextField">
          <label className="addBoardLabel" htmlFor="title">
            {errors.title === undefined && <p>Title of the board:</p>}
            {errors.title?.message && (
              <p className="errorMessages">
                Title of the board.{errors.title?.message}
              </p>
            )}
          </label>
          <input
            {...register('title')}
            id="title"
            className="addBoardInput"
            type="text"
          />
        </div>
        <div className="addBoardTextField">
          <label className="addBoardLabel" htmlFor="shortDescription">
            {errors.shortDescription === undefined && <p>Short description</p>}
            {errors.shortDescription?.message && (
              <p className="errorMessages">
                Password.{errors.shortDescription?.message}
              </p>
            )}
          </label>
          <textarea
            rows={5}
            {...register('shortDescription')}
            id="shortDescription"
            className="addBoardInput"
          />
        </div>

        <button
          type="submit"
          className="formSubmit"
          onMouseEnter={() => setHoverBtn(true)}
          onMouseLeave={() => setHoverBtn(false)}
        >
          Create board
          {hoverButton && <NewWindow color="white" />}
        </button>
      </form>
      {loader && <Popup boardTitle={titleBoard} />}
    </div>
  );
};
