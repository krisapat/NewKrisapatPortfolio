'use client'

import * as motion from 'motion/react-client'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import type { Transition } from 'motion'

type ReorderingProps = {
  images: string[]
}

export default function Reorder({ images }: ReorderingProps) {
  const [order, setOrder] = useState<string[]>(images)

  useEffect(() => {
    const timeout = setTimeout(() => setOrder(shuffle(order)), 2000)
    return () => clearTimeout(timeout)
  }, [order])

  return (
    <div className="w-full flex justify-center">
      <ul className="grid grid-cols-2 sm:grid-cols-4 gap-2 pointer-events-none">
        {order.map((imageUrl) => (
          <motion.li
            key={imageUrl}
            layout
            transition={spring}
            className="relative aspect-square w-24 sm:w-28 overflow-hidden rounded-md"
          >
            <Image
              src={imageUrl}
              alt="snack"
              fill
              className="object-cover rounded-md"
            />
          </motion.li>
        ))}
      </ul>
    </div>

  )
}

function shuffle([...array]: string[]): string[] {
  return array.sort(() => Math.random() - 0.5)
}

const spring: Transition = {
  type: 'spring',
  damping: 30,
  stiffness: 200,
}
