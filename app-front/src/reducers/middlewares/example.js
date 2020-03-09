const middleware = store => next => action => {
    console.log('Do something before calling next(action)');
    return next(action);
}