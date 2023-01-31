import { useSession } from "next-auth/react"
import Layout from "../components/layout"

export default function OpenMePage() {
  const { data } = useSession()

  return (
    <Layout>
        <p>
            Not Secured
        </p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </Layout>
  )
}
