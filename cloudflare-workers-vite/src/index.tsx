import { Hono } from 'hono'
import { renderer } from './renderer'
import {logger} from "hono/logger";
import {AuthLoginView} from "./AuthLoginView";
import {basicAuth} from "hono/basic-auth";

const app = new Hono()

app.use(renderer)
app.use(logger())

app.get('/auth/login', (c) => {
  return c.render(<AuthLoginView />)
})

app.get('/*', basicAuth({
    username: 'hono',
    password: 'acoolproject',
  }))
app.get('/', (c) => {
  return c.render(<h1>Hello World! MyFirst Cloudflare Workers</h1>)
})

export default app
