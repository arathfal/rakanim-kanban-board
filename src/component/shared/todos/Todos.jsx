import React from "react";
import styled from "styled-components";
import Card from "../card/Card";
import Items from "../items/Items";
import ButtonAdd from "./ButtonAdd";

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
        <Items
          title="Re-designed the zero-g doggie bags. No more spills!"
          progress="100"
        />
        <ButtonAdd />
      </Card>
      <Card todos="2" title="Group Task 2" month="April-June">
        <Items
          title="Re-designed the zero-g doggie bags. No more spills!"
          progress="80"
        />
        <ButtonAdd />
      </Card>
      <Card todos="3" title="Group Task 3" month="July-September">
        <Items
          title="Re-designed the zero-g doggie bags. No more spills!"
          progress="30"
        />
        <ButtonAdd />
      </Card>
      <Card todos="4" title="Group Task 4" month="October-December">
        <Items
          title="Re-designed the zero-g doggie bags. No more spills!"
          progress="40"
        />
        <ButtonAdd />
      </Card>
    </ListTodo>
  );
};

export default Todos;
