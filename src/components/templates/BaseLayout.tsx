import React, { FC } from 'react'
import Header from './Header'

interface BaseLayoutProps {
  children: React.ReactNode
}

const BaseLayout: FC<BaseLayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <main>
        {children}
      </main>
      <footer className="py-4 text-center border-t mt-8 bg-white text-black">
        © 2023 Takeuchi Portfolio. All rights reserved.
      </footer>
    </div>
  )
}

export default BaseLayout
