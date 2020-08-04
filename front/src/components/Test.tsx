import React, {FC, useState, useEffect, MouseEvent} from 'react';

type ITestComp = {
  value: number;
  kk?: number;
};

// const TestComp: FunctionComponent<ITestComp> = ({value}) => {
const TestComp: FC<ITestComp> = ({value, kk = 5, children}) => {
  const [v, setV] = useState(kk);
  const [name] = useState('Stefan');
  useEffect(() => {
    document.title = `Hello ${name}`;
  }, [name]);
  return (
    <div role='button' tabIndex={0} onClick={(ev: MouseEvent) => (ev ? setV(v + 1) : null)}>
      test component, value({v}) is {value} {kk} {children}
    </div>
  );
};

export default TestComp;
