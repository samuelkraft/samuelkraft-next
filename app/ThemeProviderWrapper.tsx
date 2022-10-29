'use client'

import { ThemeProvider } from 'next-themes'
import { ReactNode } from 'react'

function ThemeProviderWrapper({ children }: { children: ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>
}

export default ThemeProviderWrapper
