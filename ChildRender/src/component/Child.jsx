import React, { useState } from "react";

const Child = React.memo((handleParentFun) => {
  console.log("childrender", handleParentFun);
  return <div>I am child</div>;
});

export default Child;
