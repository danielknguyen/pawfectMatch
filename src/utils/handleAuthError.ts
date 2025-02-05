/**
 * Checks if the given error is an Unauthorized error and if so, logs out.
 *
 * @param {Error} error The error to check.
 * @param {() => void} callback The callback to call if the error is an Unauthorized error.
 * @returns {void}
 */
export const handleAuthError = (error: any, callback: () => void) => {
  if (
    error instanceof SyntaxError &&
    error.message.includes("Unexpected token 'U'") &&
    error.message.includes("Unauthorized")
  ) {
    console.error("Unauthorized error detected. Logging out...");
    callback();
  }
};
