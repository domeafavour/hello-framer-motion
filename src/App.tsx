import { LayoutGroup, motion } from 'framer-motion';
import React, { useState } from 'react';

let id = 0;

function createItem() {
  return {
    id: id++,
    text: `new item ${id}`,
  };
}

function App() {
  const [list, setList] = useState(() => [createItem()]);
  function removeItem(id: number) {
    setList(list.filter((item) => item.id !== id));
  }
  return (
    <>
      <LayoutGroup>
        <button
          type="button"
          className="rounded-md text-sm px-3 py-1 bg-blue-400 hover:bg-blue-500 text-white align-middle"
          onClick={() => setList((prev) => [...prev, createItem()])}
        >
          new item
        </button>
        <div className="flex flex-col gap-2">
          {list.map((item) => (
            <motion.div
              key={item.id}
              layout="position"
              className="flex justify-between py-4 px-3 items-center bg-gray-200 rounded-md shadow-md w-1/4 hover:shadow-lg ease-in-out"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {item.text}
              <button
                type="button"
                onClick={() => removeItem(item.id)}
                className="rounded-md text-sm px-3 py-1 bg-red-400 hover:bg-red-500 text-white align-middle"
              >
                x
              </button>
            </motion.div>
          ))}
        </div>
      </LayoutGroup>
    </>
  );
}

export default App;
