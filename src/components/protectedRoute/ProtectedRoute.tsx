// import styles from './ProtectedRoute.module.css'

import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";

interface IProtectedRouteProps {
  // за место этого ключа придет обернутый в ProtectedRoute компонент
  outlet: JSX.Element;
}

export default function ProtectedRoute({ outlet }: IProtectedRouteProps): JSX.Element {
  // забираем данные по юзеру
  const { user } = useAppSelector(state => state.auth);

  // если данные пришли (проверяем их наличие по любому обязательному ключу)
  if (user.id) {
    // показываем переданный через props элемент
    return outlet;
  }
  // если данных нет совершаем переадресацию на login
  return <Navigate to={'/login'}/>
}
