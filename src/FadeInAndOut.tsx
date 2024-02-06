import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';

export function FadeInAndOut() {
  const [show, setShow] = useState(false);
  return (
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
  );
}
