import React from 'react'

const PodcastDetail = ({params}:{params :{postcastId:string}}) => {
  return (
    <p className="text-white-1">PodcastDetail for {params.postcastId}</p>
  )
}

export default PodcastDetail