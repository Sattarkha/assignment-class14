import React from 'react'

const  DynamicData = async (props:any) => {
    const url = await fetch(`https://jsonplaceholder.typicode.com/users/${props.params.id}`)
    const res = await url.json()
    console.log(props)
  return (
    <div className='flex h-screen justify-center items-center flex-col'>
      <div className='bg-slate-400  rounded-lg shadow-2xl shadow-black  flex items-center flex-col justify-center h-[400px] w-[400px] gap-2'>
          <h2 className='text-xl text-center'>id:{res.id} </h2> 
          <h2 className='text-xl text-center'>name:{res.name}</h2>
          <h2 className='text-xl text-center'>email:{res.email}</h2>
          <h2 className='text-xl text-center'>address:</h2> 
          street: {res.address.street} <br />
          suite: {res.address.suite} <br />
          city: {res.address.city} <br />
          zipcode: {res.address.zipcode}
          
        </div>
    </div>
  ) 
}

export default DynamicData;