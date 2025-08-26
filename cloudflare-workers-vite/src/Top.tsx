import type {FC} from "hono/jsx";
import {Layout} from "./layout";

export const Top: FC<{ messages: string[] }> = (props: {
  messages: string[]
}) => {
  return (
    <Layout>
      <div className={"p-4"}>
        <h1>Hello Hono!</h1>
        <ul className={"list-disc"}>
          {props.messages.map((message) => {
            return <li className={"ml-4"}>{message}!!</li>
          })}
        </ul>
      </div>
    </Layout>
  )
}
