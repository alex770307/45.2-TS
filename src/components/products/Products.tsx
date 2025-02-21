import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styles from './products.module.css';
import ProductCard from '../productCard/ProductCard';
import MyButton from '../myButton/MyButton';
import Loader from '../loader/Loader';

export interface IProduct {
    id: number;
    title: string;
    price: number;
    description: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
}

export default function Products(): JSX.Element {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [limit, setLimit] = useState<number>(5);
    const [loading, setLoading] = useState<boolean>(true);

    const getProducts = async (limit: number) => {
        setLoading(true);
        const res = await fetch(`https://fakestoreapi.com/products?limit=${limit}`);
        const data: IProduct[] = await res.json();
        setProducts(data);
        setLoading(false);
    };

    useEffect(() => {
        getProducts(limit);
    }, [limit]);

    const formik = useFormik({
        initialValues: {
            quantity: 10,
        },
        validationSchema: Yup.object().shape({
            quantity: Yup
                .number()
                .typeError('Введите число')
                .min(1, 'Минимальное значение 1')
                .max(20, 'Максимальное значение 20')
                .required('Обязательное поле'),
        }),
        onSubmit: (values) => {
            setLimit(values.quantity);
        },
    });

    return (
        <div>
            <form onSubmit={formik.handleSubmit} className={styles.formContainer}>
                <label htmlFor="quantity">Количество товаров:</label>
                <input
                    id="quantity"
                    name="quantity"
                    type="number"
                    value={formik.values.quantity}
                    onChange={formik.handleChange}
                />
                {formik.errors && 
                <p>{formik.errors.quantity}</p>}
                <MyButton type='submit' text='Загрузить' />
            </form>
            
            {loading ? ( <Loader /> ) : (
                <div className={styles.gridContainer}>
                    {products.map(product => (
                        <ProductCard
                            key={product.id}
                            title={product.title}
                            image={product.image}
                            price={product.price}
                            id={product.id} />
                    ))}
                </div>
            )}

        </div>
    );
}