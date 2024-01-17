import { useState } from "react";

const User = ({ name }) => {
    const [count] = useState(0);
    const [count2] = useState(1);
  return (
    <div className="userCard">
      <div>Count : {count}</div>
      <div>Count2 : {count2}</div>
      <div>Name:{name}</div>
      <div>Location: Daltonganj</div>
      <div>Designation: SSE - PAYTM</div>
    </div>
  );
};
export default User;
