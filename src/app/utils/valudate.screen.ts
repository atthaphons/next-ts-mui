function validateLimitLenth(
  fieldLabel: string,
  fieldLimitLenth: number,
  fieldValue: string
) {
  let error: string = "";
  if (fieldValue && fieldValue.length > fieldLimitLenth) {
    error = `${fieldLabel} must not over ${fieldLimitLenth} digit`;
  }
  return error;
}
export { validateLimitLenth };
