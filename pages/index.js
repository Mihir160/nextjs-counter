import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })
import Counter from '../components/Counter/Couter'
export default function Home() {
  return (
    <div>
      <Counter></Counter>
    </div>
  )
}
