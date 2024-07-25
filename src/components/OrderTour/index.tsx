import * as Yup from 'yup'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import Container from "../common/Container"
import { ValuesInterface, ActionsInterface } from '../../interface/FormOrderTour.interface'
import s from './style.module.css'



const OrderTour = () => {

  const validationSchema = Yup.object({
    userName: Yup.string()
      .required('Имя пользователя не может быть пустым')
      .min(2, 'Имя пользователя должно содержать не менее 2 символов')
      .max(25, 'Имя пользователя должно содержать не более 25 символов'),
    phone: Yup.string()
      .required('Телефон не может быть пустым')
      .min(13, 'Телефон должен быть в формате +420222333444 и содержать не менее 13 символов')
      .max(13, 'Телефон должен быть в формате +420222333444 и содержать не более 13 символов'),
    numberOfTravelers: Yup.number()
      .required('Количество путешественников не может быть пустым')
      .min(1, 'Количество путешественников должно быть не менее 1 человека')
      .max(35, 'Количество путешественников должно быть не более 35 человек')
  })

  const handleSubmit = (values: ValuesInterface, actions: ActionsInterface) => {
    setTimeout(() => {
      console.log(JSON.stringify(values, null, 2))
      actions.setSubmitting(false)
      actions.resetForm()
    }, 200)
  }

  return(
    <Container>
      <div className={s.orderTour}>
        <Formik
            initialValues={{ userName: '', phone: '', numberOfTravelers: 1, tour: 'Nica'}} 
            validationSchema={validationSchema} 
            onSubmit={handleSubmit}
        >
          <Form>
            <div>
              <Field  className={s.field} type="text" name="userName" placeholder="Ваше имя"/>
              <ErrorMessage className={s.error} name="userName" component="div"/>
            </div>
            <div>
              <Field  className={s.field} type="phone" name="phone" placeholder="Ваш телефон"/>
              <ErrorMessage className={s.error} name="phone" component="div"/>
            </div>
            <div>
              <Field  className={s.field} type="number" name="numberOfTravelers" placeholder="Количество путешественников"/>
              <ErrorMessage className={s.error} name="numberOfTravelers" component="div"/>
            </div>
            <Field as="select" name="tour" className={s.field} >
              <option value="Italy">Великолепная Италия</option>
              <option value="Rimini">Римини</option>
              <option value="Venecie">Венеция</option>
              <option value="Sen-Tropes">Сен-Тропе</option>
              <option value="Nica">Ницца</option>
            </Field>
            <button className={`${s.btn} ${s.field}`} type="submit">Заказать тур</button>
          </Form>
        </Formik>
      </div>
    </Container>
  )
}

export default OrderTour