import React from "react";
type PersonDetail = {
  firstName: string;
  secondName: string;
};

const Person = (props: PersonDetail) => {
  return (
    <div>
      <h1>
        {props.firstName} {props.secondName}
      </h1>
    </div>
  );
};

export default Person;
