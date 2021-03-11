
import { writable } from 'svelte/store'
import localProducts from '../localProducts'

const store = writable(flatten([...localProducts]));

// store.subscribe(val => {
//   console.log(val)
// })

// store.set(1)

// store.update(n => n + 1)

function flatten(data) {
  return data.map(item => {
    let image = item.image.url
    return { ...item, image }
  });
}


export default store