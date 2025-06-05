
interface Props{
  text:string
}
import "./Image.scss"
export const Image = ({text}:Props) => {
  return (
    <div className='containerImage'>
        <img src={`../../src/assets/${text}.png`} alt="" className='imagesPrincipal' />
    </div>
  )
}
