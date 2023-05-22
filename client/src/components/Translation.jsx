
import {useState} from 'react'

import LoadingSpin from './LoadingSpin';
import axios from 'axios'




const TranslateText = () => {


  const [textForTranslation, setTextForTranslation] = useState("")
  const [translated, setTranslated] = useState("")

const [isLoading, setIsLoading] = useState(false)



const fetchTranslatedText = async()=>{
setIsLoading(true)

const res = axios.post("http://localhost:4567",
  {text:textForTranslation},
{
  headers: {
    'Content-Type': 'application/json'
  }
}).then((result)=>{
  console.log(result)
  return result
})

console.log((await res).data.text)

setTranslated((await res).data.text)
setIsLoading(false)

}













  return (

    <>
    <h1 className='bg-pink-100 text-pink-700 px-3 py-2 text-2xl rounded-lg text-center m-2'>English to Hindi Text Translation</h1>
    <div className='flex flex-col gap-4 justify-center items-center mx-4 my-4 h-full'>




<textarea  className='outline-none  w-full rounded-lg bg-pink-200 px-2 py-2 text-black placeholder:text-pink-700' autoFocus={true}  placeholder="Enter your text" id="" cols="30" rows="10"  onChange={e=>setTextForTranslation(e.target.value)} ></textarea>








<button className=' bg-blue-400 text-white  px-2 py-1 text-xl rounded-lg w-fit' onClick={fetchTranslatedText}>Translate</button>


{

isLoading   ?   <LoadingSpin/>  : textForTranslation && <div className="output  bg-yellow-200 text-black px-2 rounded-lg h-full m-4 pt-4 py-4">
    {translated}
</div>



}




    </div>
    </>
  )
}
export default TranslateText