function importAll(r) {
  let images = {}
  r.keys().forEach((item) => {
    images[item.replace('./', '')] = r(item)
  })
  return images
}

export const icons = importAll(require.context('../assets/icons', false, /\.(png|jpe?g|svg)$/))
export const images = importAll(require.context('../assets/images/', false, /\.(png|jpe?g|svg)$/))
