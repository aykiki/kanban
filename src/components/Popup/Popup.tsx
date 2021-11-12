import React from 'react';
interface IPopupProps {
  boardTitle: string;
}

export const Popup = ({ boardTitle }: IPopupProps) => {
  return (
    <div className="popup">
      <p className="popupText">The {boardTitle} board has been created</p>
      <button className="popupButton">Go to board</button>
    </div>
  );
};
