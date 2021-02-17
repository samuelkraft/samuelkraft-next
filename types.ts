declare global {
  interface Window {
    goatcounter: {
      count: (data: { path: string; title?: string; referrer?: string; event?: boolean }) => void // eslint-disable-line
    }
  }
}

export {}
