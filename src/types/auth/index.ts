export type CustomerType = {
  name: string;
  surname: string;
  email: string;
  password: string;
  passwordConfirmation: string;
};

export type SignInDataType = {
  email: string;
  password: string;
};

export type SignUpDataType = CustomerType & {
  passwordConfirmation: string;
};
