import React, {useState} from 'react';

const Test = () => {
  const [count] = useState(19);
  const a = 5 + 6 + count;
  return (
    <div>
      <span>{a}</span>
    </div>
  );
};
export default Test;
