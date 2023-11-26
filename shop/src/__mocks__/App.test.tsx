// import 'jest';
// import '@testing-library/jest-dom/extend-expect';
// import React, {MouseEventHandler, ReactNode} from 'react';
// import {render, screen, fireEvent} from '@testing-library/react';
//
// /* 1. Keep in mind [Arrange, Act, Assert] */
//
// /* 2.
//   getBy* (most commonly used)
//   queryBy* (used when testing the absence of an element without throwing an error)
//   findBy* (used when testing asynchronous code)
// */
//
// /*
//   1. const mockFunction = jest.fn(); - create own implementation of function
//   2. const spy = jest.spyOn(obj, 'someMethod'); - spy on existed function
//   3. jest.spyOn(global, 'fetch') - own implementation of spied function
//     .mockImplementation(() => Promise.resolve({
//       status: 200,
//       json: () => Promise.resolve({
//         value: 'own value'
//       })
//     }));
//   4. global.fetch.mockClear(); - don't forget to clean everything after
//   5. afterEach(() => {  - or remove all mocks
//        jest.restoreAllMocks()
//      });
//  */
//
// /* 3. Articles and documentation
//   https://react-testing-library-examples.netlify.app/
//   https://www.digitalocean.com/community/tutorials/how-to-test-a-react-app-with-jest-and-react-testing-library
//   https://testing-library.com/docs/guiding-principles
//   https://jestjs.io/docs/asynchronous
//  */
//
// const OneRowComponent = () => <div>test</div>;
//
// test('Render simple content', () => {
//   render(<OneRowComponent />);
//   const linkElement = screen.getByText(/test/i);
//   expect(linkElement).toBeInTheDocument();
// });
//
// const FunctionalComponent = () => {
//   const [value, setValue] = React.useState(1);
//   const btnHandler = () => {
//     setValue((st: number) => st + 1);
//   };
//   return (
//     <div>
//       <button onClick={btnHandler}>Click me</button>
//       <div data-testid='test-comp'>{value}</div>
//     </div>
//   );
// };
//
// test('Render functional component', () => {
//   render(<FunctionalComponent />);
//   const buttonElement = screen.getByText(/Click me/i);
//   fireEvent.click(buttonElement); // 1 type of getting the element
//   fireEvent.click(screen.getByText('Click me')); // 2 type of getting the element
//
//   const valueElement = screen.getByTestId('test-comp');
//   expect(buttonElement).toBeInTheDocument();
//   expect(valueElement).toHaveTextContent('3');
// });
//
// const InputComponent = () => <input placeholder='User name' type='text' id='userName' />;
//
// test('Render input', () => {
//   render(<InputComponent />);
//   // 1 type of getting the input
//   const inputElement: HTMLInputElement = screen.getByPlaceholderText('User name');
//
//   fireEvent.change(inputElement, {target: {value: 'Alex'}});
//   // 2 type of getting the input
//   const inputElement2: HTMLInputElement = screen.getByDisplayValue('Alex');
//   expect(inputElement).toBeInTheDocument();
//   expect(inputElement2.value).toBe('Alex');
// });
//
// const Button = ({onClick, children}: {onClick: MouseEventHandler<HTMLButtonElement>; children: ReactNode}) => (
//   <button onClick={onClick}>{children}</button>
// );
//
// test.skip('Skip one test', () => {
//   //
// });
//
// test('Calls onClick prop when clicked', () => {
//   const handleClick = jest.fn();
//   render(<Button onClick={handleClick}>Click Me</Button>);
//   fireEvent.click(screen.getByText(/click me/i));
//   expect(handleClick).toHaveBeenCalledTimes(1);
// });
