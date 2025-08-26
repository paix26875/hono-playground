import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { basicAuth } from 'hono/basic-auth'


const app = new Hono()

app.get('/welcome', (c) => {
  return c.text('Welcome to Hono!')
});
app.get('/*', basicAuth({
  username: 'hono',
  password: 'acoolproject',
}))
app.get('/hello', (c) => {
  return c.text('Hello Hono!')
})
serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
