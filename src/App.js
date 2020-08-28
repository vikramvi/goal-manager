import React, { useEffect, useState } from 'react';
import Airtable from "airtable";
import Goal from "./components/Goal";

import styled from "styled-components";
import { GlobalStyle } from "./styles/Global.style";

const base = new Airtable({ apiKey: "keyDxPwP49xAz0WNx" }).base("appezh1BBapxgL41D");

const StyledH1 = styled.h1`
text-align: center;
font-size: 4rem;
margin: 1rem 0;
`;

function App() {

  const [goals, setGoals] = useState([]);
  const [updates, setUpdates] = useState([]);

  //hooks can only be called inside body of function component
  //fetch data first time
  useEffect(() => {
    base("goals")
      .select({ view: "Grid view" })
      .eachPage((records, fetchNextPage) => {
        setGoals(records);
        console.log(records);
        fetchNextPage();
      });

    base("updates")
      .select({ view: "Grid view" })
      .eachPage((records, fetchNextPage) => {
        setUpdates(records);
        console.log(records);
        fetchNextPage();
      });
  }, []);

  return (
    <> { /* fragment element */}
      <GlobalStyle />
      <StyledH1>My Goals</StyledH1>
      {/* each goal */}
      {
        goals.map(goal => (
          //return goal component with data from each goal
          //Refer to console output from DB to find values from fields
          <Goal
            key={goal.id}
            goal={goal}
            updates={updates.filter(update => update.fields.goalid[0] === goal.id)}
          />
        ))
      }
    </>
  );
}

export default App;
