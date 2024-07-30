export interface ValuesInterface {
  userName: string,
  password: string,
  password2: string
}

export interface ActionsInterface {
  setSubmitting: (isSubmitting: boolean) => void,
  resetForm: () => void
}