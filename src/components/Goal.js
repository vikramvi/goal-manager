import React from "react";
import StyledGoal from "../styles/StyledGoal.js";
import StyledCheckbox from "../styles/StyledCheckbox.js";
import StyledGoalDetails from "../styles/StyledGoalDetails.js";


//destructuring props object
const Goal = ({ goal, updates }) => {
    return (
        <StyledGoal>
            <StyledCheckbox>
                {" "}
                <input type="checkbox" defaultChecked={goal.fields.complete} disabled />
                <span />
            </StyledCheckbox>
            <h2>{goal.fields.title}</h2>
            <StyledGoalDetails>
                <h3>DETAILS</h3>
                <p>{goal.fields.details}</p>
                <h3>UPDATES</h3>
                {updates.map((update, index) => (
                    <p key={index}>{update.fields.update}</p>
                ))}
            </StyledGoalDetails>
        </StyledGoal>
    );
};

export default Goal;