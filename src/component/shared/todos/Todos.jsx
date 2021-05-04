import React from "react";
import styled from "styled-components";
import Card from "../card/Card";
import ProgressBar from "../items/ProgressBar";

const ListTodo = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-template-rows: auto auto;
  grid-column-gap: 1rem;
`;
const Todos = () => {
  return (
    <ListTodo>
      <Card todos="1" title="Group Task 1" month="January-March">
        <h3>This is items Group Task 1</h3>
        <ProgressBar value="20" />
      </Card>
      <Card todos="2" title="Group Task 2" month="April-June">
        <h3>This is items Group Task 2</h3>
        <ProgressBar value="100" />
      </Card>
      <Card todos="3" title="Group Task 3" month="July-September">
        <h3>This is items Group Task 3</h3>
        <ProgressBar value="null" />
      </Card>
      <Card todos="4" title="Group Task 4" month="October-December">
        <h3>This is items Group Task 4</h3>
        <ProgressBar value="100" />
      </Card>
    </ListTodo>
  );
};

export default Todos;
