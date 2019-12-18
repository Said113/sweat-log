import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';

export default function Workout({ workout, labelId, deleteWorkout, handleToggle }) {

  return (
    <li className='Workout' key={workout.id} role={undefined}>
            <span className='WorkoutCheckAndDesc'>
              <span>
                <Checkbox
                  onClick={handleToggle(workout)}
                  edge="start"
                  // checked={checked.indexOf(workout) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </span>
              <span>{workout.text}</span>
            </span>
      <a href='#' aria-label="delete" onClick={() => deleteWorkout(workout.id)}>
        <DeleteIcon className='DeleteIcon' color="action"/>
      </a>
    </li>
  );
}