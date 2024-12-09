import React, { useState } from 'react'
import { IoCloudUploadSharp } from "react-icons/io5";
import { ImagetoBase64 } from '../utility/imageToBase64';
import toast from 'react-hot-toast';
const Newproduct = () => {
  const [data, setData] = useState({
    name: '',
    category: '',
    image: '',
    price: '',
    description: ''
  })
  const handleOnChange = (e) => {
    const { name, value } = e.target
    setData((prev) => {
      return {
        ...prev,
        [name]: value
      }
    })
  }

  const uploadImage = async (e) => {
    const data = await ImagetoBase64(e.target.files[0])
    // console.log(data);
    setData((prev) => {
      return {
        ...prev,
        image: data
      }
    })

  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(data);

    const { name, image, category, price } = data
    if (name && image && category && price) {
      const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/uploadProduct`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),

      })
      const featchRes = await fetchData.json()
      console.log(featchRes)
      toast(featchRes.message)
      setData(() => {
        return {
          name: '',
          category: '',
          image: '',
          price: '',
          description: ''
        }
      })
    } else {
      toast("Enter a required feild")
    }


  }
  return (
    <div className='p-4'>
      <form className='m-auto w-full max-w-md p-3 shadow flex flex-col bg-white' onSubmit={handleSubmit}>
        <label htmlFor='name'>name</label>
        <input type={'text'} name='name' className='bg-slate-200 p-1 my-1' onChange={handleOnChange} value={data.name} />
        <label htmlFor='category'>Category</label>
        <select className='bg-slate-200 p-1 my-1' id='category' name='category' onChange={handleOnChange} value={data.category}>
          <option value={"other"}> Selecct category</option>
          <option value={'fruites'}>Fruites</option>
          <option value={'vegetdable'}>Vegetdable</option>
          <option value={'icecream'}>Icecream</option>
          <option value={'dosa'}>Dosa</option>
          <option value={'pizaa'}>Pizaa </option>
        </select>

        <label htmlFor='image'>image
          <div className='h-40 w-full bg-slate-300  rounded flex items-center justify-center'>
            {data.image ? <img className='h-full' src={data.image} /> : <span className='text-5xl'><IoCloudUploadSharp /></span>
            }

            <input type='file' accept='image/*' id='image' onChange={uploadImage} className='hidden' />

          </div>
        </label>
        <label htmlFor='price' className='my-1'>price</label>
        <input type={'number'} className='bg-slate-200 p-1 my-1' name='price' onChange={handleOnChange} value={data.price} />

        <label htmlFor='description' className='my-1'>description</label>
        <textarea rows={3} className='bg-slate-200 p-1 my-1 resize-none' name='description' onChange={handleOnChange} value={data.description} />

        <button className='bg-red-500 hover:bg-red-600 text-white text-lg font-medium my-2 drop-shadow'>save</button>
      </form>
    </div>
  )
}

export default Newproduct