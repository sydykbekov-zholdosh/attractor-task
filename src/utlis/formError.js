export function errorMsg(name, { errors, touched, submitCount }) {
  let errorMsg = '';
  if (submitCount && errors[name]) {
    errorMsg = errors[name];
  } else if (touched[name] && errors[name]) {
    errorMsg = errors[name];
  }
  return errorMsg;
}

export function isError(name, { errors, touched, submitCount }) {
  return (submitCount || touched[name]) && Boolean(errors[name]);
}
