import React, { useContext, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { fetchSelectdData } from '../../apis'
import { Store } from '../../store'
import VideoPlay from '../VideoPlay/VideoPlay'
import Style from './VideoDatail.module.scss'
import Liinkify from 'react-linkify'

const VideoDatail = () => {
    const { globalState, setGlobalState } = useContext(Store)
    const location = useLocation()

    const setSelectedVideo = async () => {
      const searchParams = new URLSearchParams(location.search)
      const id = searchParams.get('v')
      await fetchSelectdData(id).then((res) => {
        const item = res.data.items.shift()
        setGlobalState({ type: 'SET_SELECTED', payload: {selected: item}})
      })
    }

    useEffect(() => {
      setSelectedVideo()
    }, [])

  return  globalState.selected && globalState.selected.id ? (
    <div className={Style.wrap}>
      <VideoPlay id={globalState.selected.id} />
      <p>{globalState.selected.snippet.title}</p>
      <hr />
      <Liinkify>
        <pre>{globalState.selected.snippet.description}</pre>
      </Liinkify>
    </div>
  ) : ( <span>no data</span>)
}

export default VideoDatail