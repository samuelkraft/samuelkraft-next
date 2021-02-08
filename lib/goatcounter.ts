export const count = (url: string): void => {
  window.goatcounter.count({ path: url })
}
