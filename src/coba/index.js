import React, {useState} from 'react'
import { sendMsg } from '../openAiConf';

export default function Coba() {

    const [input, setInput] = useState('');
  
    const handelSubmit = async () => {
        const res = await sendMsg(input)
        console.log(res)
    }

  return (
    <div>
      <input type="text" placeholder='masukan text' value={input} onChange={(e) => setInput(e.target.value)}/>
      <button type="button" onClick={handelSubmit}>Tanyakan</button>
      <p className='text-black' >hello</p>
    </div>
  )
}
