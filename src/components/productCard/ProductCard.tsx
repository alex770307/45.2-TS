
import { Link } from 'react-router-dom';
import styles from './productCard.module.css'
import MyButton from '../myButton/MyButton';

interface IProductCardProps {
    id: number;
    title: string;
    price: number;
    image: string;
    
}

export default function ProductCard({ title, image, id, price}: IProductCardProps): JSX.Element {
  return (
    <div className={styles.productCard}>
  
  <h4>{title.length < 30 ? title : title.slice(0, 30) + '...'}</h4>
      <p>Price {price}€</p>
      <div>
        <img src={image} alt="" />
      </div>
      <Link to={String(id)}><MyButton text="to product" /></Link>
    </div>
  )
}