import Image from 'next/image'
import React from 'react'

const PodcastCard = ({id,title,description,imgURL}:{
    imgURL:string,
    description:string,
    title:string,
    id:number
}) => {
  return (
    <div className='cursor-point'>
        <figure className='flex flex-col gap-2'>
            <Image src={imgURL}
            width={174}
            height={174}
            alt={title}
            className='aspect-square h-fit w-full rounded-xl 2xl:size[200px]'
            />

            <div className='flex flex-col'>
                <h1 className='text-white-1 text-16 truncate font-bold'>{title}</h1>
                <h2 className='text-white-1 text-12 font-normal truncate capitalize'>{description}</h2>
            </div>
        </figure>
    </div>
  )
}

export default PodcastCard