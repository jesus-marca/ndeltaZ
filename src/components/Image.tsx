import images from '../assets/send.jpeg'
import "./Image.css"
export const Image = () => {
  return (
    <div className='containerImage'>
        <img src={images} alt="" className='imagesPrincipal' />
    </div>
  )
}
