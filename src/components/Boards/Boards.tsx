import React from 'react';
import './Boards.css';

export const Boards = () => {
  return (
    <div>
      <h2 className="title">My boards</h2>
      <div className="boards cards">
        <div className="board card">
          <h1 className="boardHeader cardHeader">My new board</h1>
          <p className="boardText cardText">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
            deleniti, distinctio eligendi illo mollitia pariatur quam quas
            ratione temporibus ut.
          </p>
          <div className="cardFooter boardFooter">
            <p className="cardDate boardDate">Jul 25, 2021</p>
          </div>
        </div>
      </div>
    </div>
  );
};
