
import './TextArea.css';


export default function TextArea(yap) {
    return (
        <div>
            <div className='TextArea-obal1'>
                <div className='TextArea-obal2'>
                    <p className='TextArea-subheading'>{yap.head}</p>
                    <p className='TextArea-text'>{yap.text}</p>
                </div>
            </div>
        </div>
    )
}
