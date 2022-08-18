import React, { useContext, useEffect } from 'react'
import { fetchPopularData } from '../apis'
import Layout from '../components/Layout/Layout'
import { Store } from '../store'
import VideoGrid from '../components/VideoGrid/VideoGrid'
import VideoGridItem from '../components/VideoGridItem/VideoGridItem'

const Top = () => {
  const { globalState, setGlobalState } = useContext(Store)

  useEffect(() => {
    fetchPopularData().then((res) => {
      console.log('data', res)
      setGlobalState({type: 'SET_POPULAR', payload: {popular: res.data.items}})
    })
  }, [])
  
  return (
    <Layout>
      <VideoGrid>
        {
          globalState.popular && globalState.popular.map((popular) => {
            return(
              <VideoGridItem 
                id={popular.id}
                key={popular.id}
                src={popular.snippet.thumbnails.high.url}
                title={popular.snippet.title}
              />
            )
          })
        }
      </VideoGrid>
    </Layout>
  )
}

export default Top