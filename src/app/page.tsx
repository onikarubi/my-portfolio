"use client"

import dynamic from "next/dynamic"

const Home = dynamic(() => import("@/components/home/Home"), { ssr: false })

export default function page() {
  return (
    <Home />
  )
}
