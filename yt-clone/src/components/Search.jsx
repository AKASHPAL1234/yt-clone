import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchData } from '../utiles/rapidapi';
import Sidebar from "./Sidebar.jsx";
import SearchCard from './SearchCard.jsx';


function Search() {
  const [result,setResult]=useState();
  const {searchQuery}=useParams();

  const fetchsearchresult=()=>{
    fetchData(`search/?q=${searchQuery}`).then(({contents})=>{
      console.log(contents);
      setResult(contents);
    })
  }
  
  useEffect(()=>{
    fetchsearchresult()
  },[searchQuery])
  return (  
    <div>
      <div className='flex flex-row  '>
        <Sidebar/>
        <div className='h-[calc(100vh-6.625rem)] overflow-y-scroll overflow-x-hidden'>
          <div className='grid grid-cols-1 gap-2  p-2 w-[50rem]'>
            {result?.map((item,index)=>{
              if(item?.type!=="video") return false;
              return <SearchCard key={index} video={item?.video}/>
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
