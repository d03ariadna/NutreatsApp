export interface LoginFormFields {
    loginEmail: string;
    loginPassword: string;
}

export interface RegisterFormFields {
    registerName: string;
    registerEmail: string;
    registerPassword: string;
}

export type FormState = {
  [key: string]: any;
};

export type FormValidations = {
    [key: string]: [(value: any) => boolean, string];
};

export type FormValidation = {
    [key: string]: string | null;

};