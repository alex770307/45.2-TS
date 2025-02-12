import { useFormik } from 'formik';
import { useState } from 'react';
import styles from './formGender.module.css'
import MyButton from '../../components/myButton/MyButton';


interface IFormGenderProps {
  name: string;
  gender: string;
  probability: number;
  text?: string;
}

export default function FormGender(): JSX.Element {
  const [genderData, setGenderData] = useState<IFormGenderProps | null>(null);

  const formic = useFormik({
    initialValues: {
      name: '',
      gender: '',
      probability: 0
    } as IFormGenderProps,
    onSubmit: (values: IFormGenderProps, {resetForm}) => {
      resetForm();
    }


  });

  return (
    <div>
      <h2>Form Gender</h2>
      <form onSubmit={formic.handleSubmit} className={styles.form}>
        <input
          value={formic.values.name}
          onChange={formic.handleChange}
          name="name"
          type="text"
          placeholder="name" />
        <MyButton text="send" />
      </form>

    </div>
  )
}