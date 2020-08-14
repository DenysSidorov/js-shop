interface IServiceRedecer {
  number1: string;
  email1: string;
}

const initialState: IServiceRedecer = {
  number1: '093-687-76-13',
  email1: 'doshki.craft@gmail.com'
};

export default (state = initialState /* ,action */) => {
  return state;
};
