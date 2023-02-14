import '@/styles/globals.css'
import { useEffect } from 'react'
import { Provider, useDispatch } from 'react-redux'
import { store } from './store'

export default function App({ Component, pageProps }) {

  return (
    <>
      <Provider store={store}>
        <div className='main'>
          <Component {...pageProps} />
        </div>
      </Provider>
    </>
  )
}
