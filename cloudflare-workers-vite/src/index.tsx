import { Hono } from 'hono'
import { renderer } from './renderer'
import {logger} from "hono/logger";

const app = new Hono()

app.use(renderer)
app.use(logger())

app.get('/', (c) => {
  return c.render(<h1>Hello World! MyFirst Cloudflare Workers</h1>)
})

export default app
