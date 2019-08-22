//TODO: STEP 1 - Import the useState hook.
import React, { useState } from 'react';
import './App.css';
import BottomRow from './BottomRow';
import Button from './components/ScoreChange';

function App() {
	//TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
	const [homeScore, setHomeScore] = useState(0);
	const [awayScore, setAwayScore] = useState(0);

	const homeTouchDown = () => {
		setHomeScore(homeScore + 7);
	};

	const homeFieldGoal = () => {
		setHomeScore(homeScore + 3);
	};

	const awayTouchDown = () => {
		setAwayScore(awayScore + 7);
	};

	const awayFieldGoal = () => {
		setAwayScore(awayScore + 3);
	};

	return (
		<div className="container">
			<section className="scoreboard">
				<div className="topRow">
					<div className="home">
						<h2 className="home__name">Lions</h2>

						{/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

						<div className="home__score">{homeScore}</div>
					</div>
					<div className="timer">00:03</div>
					<div className="away">
						<h2 className="away__name">Tigers</h2>
						<div className="away__score">{awayScore}</div>
					</div>
				</div>
				<BottomRow />
			</section>
			<section className="buttons">
				<div className="homeButtons">
					{/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}

					<Button onChange={homeTouchDown} classGiven="homeButtons__touchdown" label="Home Touchdown" />

					<Button onChange={homeFieldGoal} classGiven="homeButtons__fieldGoal" label="Home Field Goal" />
				</div>
				<div className="awayButtons">
					<Button onChange={awayTouchDown} classGiven="awayButtons__touchdown" label="Away Touchdown" />

					<Button onChange={awayFieldGoal} classGiven="awayButtons__fieldGoal" label="Away Field Goal" />
				</div>
			</section>
		</div>
	);
}

export default App;
