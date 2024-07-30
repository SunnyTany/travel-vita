export interface ValuesInterface {
  userName: string,
  password: string,
}

export interface ActionsInterface {
  setSubmitting: (isSubmitting: boolean) => void,
  resetForm: () => void
}