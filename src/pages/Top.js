import React, { useContext, useEffect } from 'react'
import { fetchPopularData } from '../apis'
import Layout from '../components/Layout/Layout'
import { Store } from '../store'

const Top = () => {
  const { globalState, setGlobalState } = useContext(Store)

  useEffect(() => {
    fetchPopularData().then((res) => {
      console.log('data', res)
      setGlobalState({type: 'SET_POPULAR', payload: {popular: res.data.items}})
      console.log(globalState);
    })
  }, [])

  return (
    <Layout>
        Top page
    </Layout>
  )
}

export default Top