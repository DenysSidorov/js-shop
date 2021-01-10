const example = `
mutation EditUser {
  editUserByIdFromREST(token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Y2Q2ZTRlNWMxZmZjZWRkYzNhNDE1NDkiLCJpYXQiOjE2MTAyMDE1NzEsImV4cCI6MTYxMDM3NDM3MX0.qABEW5rRKcVZMAWHxm18PnXaiRARnwcNLQ6csm0bESY", data: {age: 344, isAdmin: true, sex:female}) {
    _id,
      login,
      sex,
      isAdmin,
      nick,
      age
  }
}`;
