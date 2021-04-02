export function setLoginError(state, error) {
  state.error = error.message;
  // switch (error.code) {
  //   case "auth/invalid-email":
  //     state.errorr = error.message
  //     break;
  // }
}
