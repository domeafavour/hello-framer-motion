import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

function App() {
  const [show, setShow] = useState(false);
  return (
    <>
      <div>
        <button type="button" onClick={() => setShow(!show)}>
          toggle show
        </button>
        <AnimatePresence>
          {show && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              hello world
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

export default App;
