import type { FC } from 'hono/jsx'
import {Link, ViteClient} from "vite-ssr-components/hono";

export const Layout: FC = (props) => {
  return (
    <html>
    <head>
      <ViteClient />
      <Link href="/src/style.css" rel="stylesheet" />
    </head>
    <body>{props.children}</body>
    </html>
  )
}