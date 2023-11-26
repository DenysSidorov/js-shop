import {gql} from 'apollo-boost';

export const GET_USER_BY_TOKEN = gql`
  query GetUser($token: String) {
    getUser(token: $token) {
      _id
      login
      nick
      password
      isAdmin
      age
      phone
      sex
    }
  }
`;

export const EDIT_USER_BY_TOKEN = gql`
  mutation EditUser($token: String!, $data: EditUserInput) {
    editUserByIdFromREST(token: $token, data: $data) {
      _id
      login
      sex
      isAdmin
      nick
      age
      phone
    }
  }
`;

// const example = `
// mutation EditUser {
//   editUserByIdFromREST(token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Y2Q2ZTRlNWMxZmZjZWRkYzNhNDE1NDkiLCJpYXQiOjE2MTAyMDE1NzEsImV4cCI6MTYxMDM3NDM3MX0.qABEW5rRKcVZMAWHxm18PnXaiRARnwcNLQ6csm0bESY", data: {age: 344, isAdmin: true, sex:female}) {
//     _id,
//       login,
//       sex,
//       isAdmin,
//       nick,
//       age
//   }
// }`;

// const GET_USER_BY_TOKEN = gql`{
//   getUser($token: String){
//   _id,
//   login,
//   nick,
//   password,
//   isAdmin
// }
// }`;

// export  GET_USER_BY_TOKEN;

// export default gql`
//   query AllEvents($filter: String) {
//     allEvents(filter: $filter) {
//       id
//       title
//     }
//   }
// `

// export default gql`{
//   getUser(token: ""){
//     _id,
//     login,
//     nick,
//     password,
//     isAdmin
// }
// }`;
