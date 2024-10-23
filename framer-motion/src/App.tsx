import {motion} from 'framer-motion'
import './App.css'

function App() {

  return (
    <>
     <motion.div className='box'
     animate={{x: 900 , rotate: 180}}
     transition={{duration: 1, delay: 1, ease:"backInOut", repeat: Infinity, velocity: 0.2}}
     >

     </motion.div>
    </>
  )
}

export default App
