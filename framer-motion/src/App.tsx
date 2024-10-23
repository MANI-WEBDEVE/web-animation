import {motion} from 'framer-motion'
import './App.css'
import { useState } from 'react'

function App() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    // <>
    //  <motion.div className='box'
    // //  animate={{x: 900 , rotate: 180}}
    // drag
    // dragConstraints={{left: 100, right: 100, top:500, bottom: 100}}
    //  transition={{duration: 1, delay: 1, ease:"backInOut", repeat: Infinity, velocity: 0.2}}
    //  >

    //  </motion.div>
    // </>
    <>
      <motion.div
      layout
      // data-isOpen={isOpen}
      initial={{ borderRadius: 50 }}
      className="parent"
      onClick={() => setIsOpen(!isOpen)}
    >
      <motion.div layout className="child" />
    </motion.div>
    </>
  )
}

export default App
