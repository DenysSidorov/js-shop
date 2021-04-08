const example = `
mutation EditUser {
  editUserByIdFromREST(token: "", data: {age: 344, isAdmin: true, sex:female}) {
    _id,
      login,
      sex,
      isAdmin,
      nick,
      age
  }
}`;
