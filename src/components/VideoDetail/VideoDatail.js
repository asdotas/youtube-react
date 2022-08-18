import React, { useContext, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { fetchSelectdData } from '../../apis'
import { Store } from '../../store'

const VideoDatail = () => {
    const { globalState, setGlobalState } = useContext(Store)
    const location = useLocation()
    const setSelectedVideo = async () => {
      const searchParams = new URLSearchParams(location.search)
      const id = searchParams.get('v')
      await fetchSelectdData(id).then((res) => {
        const item = res.data.items.shift()
        setGlobalState({ type: 'SET_SELECTED', payload: {selected: item} })
      })
    }
    useEffect(() => {
      setSelectedVideo()
    }, [])

  return (
    <div>

    </div>
  )
}

export default VideoDatail