import React, {Suspense} from 'react';

const OtherComponent = React.lazy(() => {
    return import('./OtherComponent');
});

function MyComponent() {
  return (
    <div>
      <Suspense fallback={<div>Загрузка...</div>}>
        <OtherComponent/>
      </Suspense>
    </div>
  );
}

export default MyComponent;
