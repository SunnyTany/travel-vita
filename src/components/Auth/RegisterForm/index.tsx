import { useDispatch } from 'react-redux'
import { registerAsync } from '../../../redux/slices/registerSlice'
import * as Yup from 'yup'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { ValuesInterface, ActionsInterface } from '../../../interface/FormLogin.interface'
import WrapperMain from '../../common/WrapperMain'
import s from './style.module.css'

const RegisterForm = () => {
  const dispatch = useDispatch()

  const validationSchema = Yup.object({
    userName: Yup.string()
      .required('Имя пользователя не может быть пустым')
      .min(2, 'Имя пользователя должно содержать не менее 2 символов')
      .max(25, 'Имя пользователя должно содержать не более 25 символов'),
    password: Yup.string()
      .required('Пароль не может быть пустым')
      .min(6, 'Пароль должен содержать не менее 6 символов')
      .max(20, 'Пароль должен содержать не более 20 символов'),
    password2: Yup.string()
      .required('Пароль не может быть пустым')
      .min(6, 'Пароль должен содержать не менее 6 символов')
      .max(20, 'Пароль должен содержать не более 20 символов')
      .oneOf([Yup.ref('password')], 'Пароли должны совпадать')
  })

  const handleSubmit = (values: ValuesInterface, actions: ActionsInterface) => {
    setTimeout(() => {
      console.log(JSON.stringify(values, null, 2))
      actions.setSubmitting(false)
      actions.resetForm()
    }, 200)
  }

  return (
    <WrapperMain>
        <h2 className={s.title}>Регистрация</h2>
        <Formik
            initialValues={{ userName: '', password: '', password2: ''}} 
            validationSchema={validationSchema} 
            onSubmit={handleSubmit}
        >
          <Form>
            <div>
              <Field  className={s.field} type="text" name="userName" placeholder="Ваше имя"/>
              <ErrorMessage className={s.error} name="userName" component="div"/>
            </div>
            <div>
              <Field  className={s.field} type="password" name="password" placeholder="Ваш пароль"/>
              <ErrorMessage className={s.error} name="password" component="div"/>
            </div>
            <div>
              <Field  className={s.field} type="password" name="password2" placeholder="Повторите пароль"/>
              <ErrorMessage className={s.error} name="password2" component="div"/>
            </div>
            <button onClick={() => dispatch(registerAsync())}>Войти</button>
          </Form>
        </Formik>
    </WrapperMain>
  )
}

export default RegisterForm