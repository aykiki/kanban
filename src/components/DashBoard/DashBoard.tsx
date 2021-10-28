import React from 'react';
import './DashBoard.css';
import { User } from 'grommet-icons';

export const DashBoard = () => {
  return (
    <div>
      <h2 className="title">Welcome to dashboard!</h2>
      <div className="cards">
        {/*if todos exist*/}
        <div className="cardStatistic toDo">
          <div className="cardTab">
            <h3>To Do - 139</h3>
          </div>
          {/*{todos.map(item => (*/}
          {/*  <div className={card}>*/}
          {/*  </div>*/}
          {/*))}*/}
          <div className="card">
            <p className="cardHeader">Title Board - 124e98</p>
            <p className="cardText">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
              at corporis deserunt dolor ducimus earum error, expedita explicabo
              fugit libero nisi obcaecati, optio provident quia quo rem sit sunt
              veniam!
            </p>
            <div className="cardFooter">
              <p className="cardDate">Jul 25, 2021</p>
              <User color="#8b8cd0c7" size="small" />
            </div>
          </div>
        </div>
        <div className="cardStatistic onHold">
          <div className="cardTab">
            <h3>On hold - 39</h3>
          </div>
          {/*{todos.map(item => (*/}
          {/*  <div className={card}>*/}
          {/*  </div>*/}
          {/*))}*/}
          <div className="card">
            <p className="cardHeader">Title Board - 12498</p>
            <p className="cardText">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
              at corporis deserunt dolor ducimus earum error, expedita explicabo
              fugit libero nisi obcaecati, optio provident quia quo rem sit sunt
              veniam!
            </p>
            <div className="cardFooter">
              <p className="cardDate">Jul 25, 2021</p>
              <User color="#8b8cd0c7" size="small" />
            </div>
          </div>
        </div>
        <div className="cardStatistic inProgress">
          <div className="cardTab">
            <h3>In progress - 110</h3>
          </div>
          {/*{todos.map(item => (*/}
          {/*  <div className={card}>*/}
          {/*  </div>*/}
          {/*))}*/}
          <div className="card">
            <p className="cardHeader">Title Board - 12498</p>
            <p className="cardText">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
              at corporis deserunt dolor ducimus earum error, expedita explicabo
              fugit libero nisi obcaecati, optio provident quia quo rem sit sunt
              veniam!
            </p>
            <div className="cardFooter">
              <p className="cardDate">Jul 25, 2021</p>
              <User color="#8b8cd0c7" size="small" />
            </div>
          </div>
        </div>
        <div className="cardStatistic performed">
          <div className="cardTab">
            <h3>Performed - 39</h3>
          </div>
          {/*{todos.map(item => (*/}
          {/*  <div className={card}>*/}
          {/*  </div>*/}
          {/*))}*/}
          <div className="card">
            <p className="cardHeader">Title Board - 12498</p>
            <p className="cardText">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
              at corporis deserunt dolor ducimus earum error, expedita explicabo
              fugit libero nisi obcaecati, optio provident quia quo rem sit sunt
              veniam!
            </p>
            <div className="cardFooter">
              <p className="cardDate">Jul 25, 2021</p>
              <User color="#8b8cd0c7" size="small" />
            </div>
          </div>
          <div className="card">
            <p className="cardHeader">Title Board - 12498</p>
            <p className="cardText">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
              at corporis deserunt dolor ducimus earum error, expedita explicabo
              fugit libero nisi obcaecati, optio provident quia quo rem sit sunt
              veniam!
            </p>
            <div className="cardFooter">
              <p className="cardDate">Jul 25, 2021</p>
              <User color="#8b8cd0c7" size="small" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
