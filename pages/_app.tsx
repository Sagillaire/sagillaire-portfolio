import '@/styles/globals.css'
import { useRouter } from 'next/router'
import Navbar from '@/components/Navbar'
import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'
import { AnimatePresence, motion } from 'framer-motion'
import { homeTransitions, homeVariants } from '@/Data/MotionHome'

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  return (
    <main className={inter.className}>
      <Navbar />
      <AnimatePresence mode='wait'>
        <motion.div key={router.route} initial='initialState' animate='animateState' exit='exitState'
          transition={homeTransitions}
          variants={homeVariants}>
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </main>
  )
}
