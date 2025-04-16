import React from 'react'

export default function Listitem() {
    const categories=[
        "All","Music","React-router","Movie","Live","Akash_pal",
        "x","react","html","Apna collage","Song","Dekh tujhse",
        "React-router-dom","Movies","Live criket","html5","Apna_collage","Songa","Dekh_tujhse",
    ]
  return (
    <div className='flex  overflow-x-scroll px-4 hide-scroll-bar *: '>
       <div className='flex space-x-5 '>
       {
            categories.map((category)=>{
                return(
                    <div key={category}
                    className=' flex-none  rounded-r-full rounded-l-full bg-gray-100 border-gray-300 py-2 px-2 hover:bg-gray-200 duration-300  cursor-pointer'> 
                     {category}
                    </div>
                )
            })
        }
       </div>
    </div>
  )
}
