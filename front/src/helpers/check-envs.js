const checkENVs = (envs, inProduction) => {
  // List variables which will be checked
  const arrForCheckEnvs = []; // ['hostname', 'DOMAIN_SETTINGS', 'API', 'PUBLISH',
  // 'SETTINGS_API', 'DEFAULT_REDIRECTION', 'AUTH', 'BACKEND_DOMAIN_SOCKET'];

  // array of names
  const listENVs = envs ? Object.getOwnPropertyNames(envs) : [];

  console.log('================================================================ ');
  console.log('===================== Application got ENVs ===================== ');
  console.log('================================================================ ');
  console.log('NODE_ENV', ' : ', JSON.stringify(inProduction));

  // See all variables which were set before start
  for (let i = 0; i < listENVs.length; i++) {
    console.log(listENVs[i], ' : ', envs[listENVs[i]]);
  }

  // find required variables
  const listOfErrors = [];
  for (let j = 0; j <= arrForCheckEnvs.length - 1; j++) {
    if (listENVs.indexOf(arrForCheckEnvs[j]) === -1) {
      listOfErrors.push(`${arrForCheckEnvs[j]} : undefined ---------- <<<<<<<<<<<`);
    }
  }

  // show errors, prevent the build
  if (listOfErrors.length > 0) {
    console.log('============================================================== ');
    console.log('=================== Application requires NEXT ENVs =============== ');
    console.log('============================================================== ');
    for (let k = 0; k <= listOfErrors.length - 1; k++) {
      console.log(listOfErrors[k]);
    }
    throw new Error('Set All required environment variables');
  }

  // end of message
  console.log('================================================================ ');
  console.log('================================================================ ');
};

module.exports = checkENVs;
