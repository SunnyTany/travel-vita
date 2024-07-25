export interface ValuesInterface {
  userName: string,
  phone: string,
  numberOfTravelers: number,
  tour: string
}

export interface ActionsInterface {
  setSubmitting: (isSubmitting: boolean) => void,
  resetForm: () => void
}