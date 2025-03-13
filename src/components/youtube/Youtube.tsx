// import styles from './Youtube.module.css'

export default function Youtube():JSX.Element {
  return (
    <div>
      <h2>Youtube API</h2>

      <iframe width="560" 
      height="315" 
      src="https://www.youtube.com/embed/AUSl0rtytz8?si=b0QCaMPmPZ0jIJwM" 
      title="YouTube video player" 
      frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerPolicy="strict-origin-when-cross-origin" 
      allowFullScreen></iframe>
    </div>
  )
}