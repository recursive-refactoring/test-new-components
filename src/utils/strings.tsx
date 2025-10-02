const RANDOM_STRINGS = {
  ALPHA_NUMERIC_FAV_SPECIALS:
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$!",
};

export const replaceSpaceWithSep = (string: any, sep: any = "_") =>
  string?.replace(/ /g, sep);

export const generateRandomText = (
  character = RANDOM_STRINGS?.ALPHA_NUMERIC_FAV_SPECIALS,
  length = 8,
) => {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += character?.charAt(
      Math?.floor(Math?.random() * character?.length),
    );
  }
  return result;
};
