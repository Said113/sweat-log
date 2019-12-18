import React from 'react';
import DayView from './DayView';

function WeekView() {

  let today = new Date();
  let week = [];
  let first = today.getDate() - today.getDay(); //  + i;

  for (let i = 0; i < 7; i++) {
    let day = new Date(today.setDate(first)).getDate();
    week.push(day);
    first++;
  }

  return (
    <div className="week">
      <DayView day='Sunday' date={week[0]}/>
      <DayView day='Monday' date={week[1]}/>
      <DayView day='Tuesday' date={week[2]}/>
      <DayView day='Wednesday' date={week[3]}/>
      <DayView day='Thursday' date={week[4]}/>
      <DayView day='Friday' date={week[5]}/>
      <DayView day='Saturday' date={week[6]}/>
    </div>
  );
}

export default WeekView;