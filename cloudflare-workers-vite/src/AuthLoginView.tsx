import {Layout} from "./layout";

export const AuthLoginView = (props: any) => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center h-screen bg-linear-to-r from-cyan-500 to-blue-500">
        <div className="card w-96 bg-base-100 card-xl shadow-sm">
          <div className="card-body">
            <h2 className="card-title">ようこそ</h2>
            <div className="w-full card-actions">
              <a href="/" className="w-full btn bg-linear-to-r from-cyan-500 to-blue-500">ログイン</a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}