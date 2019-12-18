import React from 'react';
import './App.css';
import WeekView from "./components/WeekView";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <WeekView />
    </div>
  );
}

export default App;

/* *********************************************
                   STATE
   *********************************************
* Current state includes a list of workouts for each day.
* Who knows about the state?
* each DayView component knows about the list of workouts for that day.
* Who needs to know about the state?
* at least the whole week.
* What else needs to be in the state?
* User details
* Actual dates
* Individual workout's state (completed or not)
* What needs to go to the database?
* each day's workouts and their state
* users details
* link between users and their workouts
* visibility status? allow users to share their weeks with other users
* (one week or every week)

   *********************************************
                   RESPONSIVE
   *********************************************
   - make the days stack on top of each other (flex direction column)
   upon relevant breakpoint
*/