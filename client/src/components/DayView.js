import React, { useState } from 'react';
import WorkoutsList from './WorkoutsList';
import NewWorkout from './NewWorkout';

function DayView({ day, date }) {
  const [workouts, setWorkouts] = useState([]);

  const addWorkout = workout => {
    setWorkouts([ ...workouts, workout]);
  };

  const deleteWorkout = workoutId => {
    console.log('workoutId is: ', workoutId);
    const newWorkouts = workouts.filter((workout) => workout.id !== workoutId);
    setWorkouts(newWorkouts);
  };

  return (
    <div className="day">
      <p className='day'>{day}</p>
      <h5 className='date'>{date}</h5>
      <NewWorkout onSubmit={addWorkout} />
      <WorkoutsList workouts={workouts} deleteWorkout={deleteWorkout}/>
    </div>
  );
}

export default DayView;