// import styles from './ErrorPage.module.css'

interface IErrorPageProps {
  text?: string;
}

export default function ErrorPage({ text = 'error text' }: IErrorPageProps): JSX.Element {
    return (
      <div>
        <p style={{color: 'red'}}> {text === 'Request failed with status code 400' ? 'wrong username or password 🫣' : text}</p>
      </div>
    )
  }
  