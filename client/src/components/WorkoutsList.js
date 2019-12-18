import React, { useState } from 'react';
import Workout from "./Workout";

export default function WorkoutsList(props) {
  const [checked, setChecked] = useState([0]);

  const handleToggle = value => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <ul className='WorkoutsList'>
      {props.workouts.map(workout => {
        const labelId = `checkbox-list-label-${workout}`;

        return (
          <Workout
            workout={workout}
            labelId={labelId}
            deleteWorkout={props.deleteWorkout}
            handleToggle={handleToggle}
          />
        );
      })}
    </ul>
  );
}

/*
<ul className='WorkoutsList'>
      {props.workouts.map(workout => {
        const labelId = `checkbox-list-label-${workout}`;

        return (
          <li className='Workout' key={workout.id} role={undefined}>
            <span className='WorkoutCheckAndDesc'>
              <span>
                <Checkbox
                  onClick={handleToggle(workout)}
                  edge="start"
                  checked={checked.indexOf(workout) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </span>
              <span>{workout.text}</span>
            </span>
            <a href='#' aria-label="delete" onClick={() => props.deleteWorkout(workout.id)}>
              <DeleteIcon className='DeleteIcon' color="action"/>
            </a>
          </li>
        );
      })}
    </ul>
 */