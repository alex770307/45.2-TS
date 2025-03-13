
import * as Yup from 'yup';
import { useFormik } from "formik";
import MyButton from "../myButton/MyButton";
import MyInput from "../myInput/MyInput";
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { loginAction } from '../../features/auth/authAction';
import ErrorPage from '../errorPage/ErrorPage';
import { useNavigate } from 'react-router-dom';

const schema = Yup.object().shape({
  username: Yup
    .string().required('username is required'),
  password: Yup
    .string().min(8, 'password must be at least 8 symbols long').required('password is required')
});

export default function Login(): JSX.Element {
  const {error} =useAppSelector(state => state.auth)
  // готовимся отправлять данные в redux
  const dispatch = useAppDispatch()
  // готовим функцию для переадресации
  const navigate = useNavigate()


 
  const formik = useFormik({
    initialValues: {
      username: 'emilys',
      password: 'emilyspass'
    } as { username: string; password: string; },
    validationSchema: schema,
    validateOnChange: false,
    onSubmit: async (values, {resetForm}) => {
      // не просто отправляем через dispatch action, а проверяем
      // получаем ли мы в ответ данные по юзеру и если да,
      // то в таком случае делаем переадресацию
      const user = await dispatch(loginAction(values)).unwrap()
      // если данные по юзеру есть совершаем переадресацию
      if (user) {
        navigate('/')
      }
      // resetForm()
    }
  });


  return (
    <div>
      <h2>Login 🔐</h2>
      <form onSubmit={formik.handleSubmit}>
        <MyInput label="username: " placeholder="type your username" type="text" name="username" formik={formik} />
        <MyInput label="password: " placeholder="type your password" type="password" name="password" formik={formik} />
        <MyButton type="submit" text="sign in" />
      </form>
      {error && <ErrorPage text={error}/>}

    </div>
  );
}