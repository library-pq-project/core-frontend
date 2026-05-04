import { mount } from 'svelte'
import './app.css'
import "quill/dist/quill.snow.css"
import './toolbar-override.css'
import App from './App.svelte'

const app = mount(App, {
  target: document.getElementById('app')!,
})

export default app
