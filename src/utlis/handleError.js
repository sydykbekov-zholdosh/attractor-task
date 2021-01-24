import Notice from './Notice';

export function handleError(error, message = '', type = 'error') {
  let errorMsg = error.message;
  if (error && error.request) {
    errorMsg = `
      STATUS: ${error.request.status},
      STATUS_TEXT: ${error.request.statusText}
      METHOD: ${error.config.method},
      URL: ${error.config.url}
      REQUEST_BODY:  ${error.config.data} \n
      RESPONSE_BODY: ${JSON.stringify(error.data)}
    `;
  }

  if (error && error.response) {
    errorMsg = `
      STATUS: ${error.response.status},
      STATUS_TEXT: ${error.response.statusText}
      METHOD: ${error.response.config.method},
      URL: ${error.response.config.url}
      REQUEST_BODY:  ${error.response.config.data} \n
    `;
    if (error.response.data) {
      errorMsg += `RESPONSE_BODY: ${JSON.stringify(error.response.data)}`;
    } else {
      errorMsg += `RESPONSE_BODY: ${JSON.stringify(error.response)}`;
    }
  }

  if (message) {
    message += '\n';
    Notice[type](`${message}${errorMsg}`);
  }
  return `${message}${errorMsg}`;
}
