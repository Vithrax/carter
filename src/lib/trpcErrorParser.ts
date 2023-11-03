export const parseError = (message: string): string => {
  const code = message.match(/code = ([a-zA-Z]*)/i);

  if (code) {
    const value = code[1];
    switch (value) {
      case "AlreadyExists":
        return "Duplicate values are not allowed.";
      default:
        return "Something went wrong.";
    }
  }

  return "Something went wrong.";
};
