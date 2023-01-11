import { Provider } from 'react-redux'
import store from '../components/Store/Store'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  )
}
