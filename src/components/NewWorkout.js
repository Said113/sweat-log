import React, { useState } from 'react';

const NewWorkout = ({ onSubmit }) => {
  const [desc, setDesc] = useState('');

  const handleChange = event => {
    event.preventDefault();
    if (desc !== '') { // do not add empty workouts
      onSubmit({ id: Date.now(), text: desc });
      setDesc(''); // set the description to empty string again so the input form is empty
    }
  };

  return (
    <form className="NewWorkout" onSubmit={handleChange}>
      <input
        className="NewWorkout-input"
        placeholder="Add Workout"
        type="text"
        value={desc}
        onChange={event => setDesc(event.target.value)}
      />
      <input className="NewWorkout-submit button" type="submit" value="+" />
    </form>
  );
};

export default NewWorkout;
