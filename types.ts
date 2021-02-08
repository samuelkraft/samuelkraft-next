declare global {
  interface Window {
    goatcounter: {
      count: (data: { path: string }) => void // eslint-disable-line
    }
  }
}

export {}
