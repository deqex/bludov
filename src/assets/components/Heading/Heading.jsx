import './Heading.css';

export default function Heading(props) {
  return (
    <div className='headingbox'>
      <h1 className="underline"><span>{props.text}</span></h1>
    </div>
  )
}
