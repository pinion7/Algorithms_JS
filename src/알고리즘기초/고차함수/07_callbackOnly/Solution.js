function callbackOnly(callback, response) {
  if (response.status === 'fail') {
    return 'Something went wrong!'
  }
  else return callback(response.data);
}






