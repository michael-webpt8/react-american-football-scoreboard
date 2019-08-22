import React from 'react';

const ScoreChange = (props) => {
	const { onChange, label, classGiven } = props;
	return (
		<>
			<button onClick={onChange} className={classGiven}>
				{label}
			</button>
		</>
	);
};

export default ScoreChange;
