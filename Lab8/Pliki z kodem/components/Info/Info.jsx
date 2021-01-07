import React from 'react';
import PropTypes from 'prop-types';

const Info = ({ weight, height, id, date, bmi, category, deleteCard }) => {
  const handleDelete = () => {
    deleteCard(id);
  };

  return (
    <div className="col m6 s12">
      <div className="card">
        <div className="card-content">
          <span className="card-title" data-test="bmi">
            BMI: {bmi}
          </span>
          <div className="card-data">
            <span data-test="weight">Weight: {weight} kg</span>
            <span data-test="height">Height: {height} cm</span>
            <span data-test="date">Date: {date}</span>
            <br />
            <span>Category: {category}</span>
          </div>

          <button className="delete-btn" onClick={handleDelete}>
            X
          </button>
        </div>
      </div>
    </div>
  );
};

Info.propTypes = {
  weight: PropTypes.string,
  height: PropTypes.string,
  id: PropTypes.string,
  date: PropTypes.string,
  bmi: PropTypes.string,
  deleteCard: PropTypes.func
};

export default Info;
