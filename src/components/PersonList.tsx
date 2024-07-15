import React from "react";
type PersonListProps = {
  names: {
    first: string;
    second: string;
  }[];
};
const PersonList = (props: PersonListProps) => {
  return (
    <div>
      <h1>{props.names[0].first}</h1>
    </div>
  );
};

export default PersonList;
