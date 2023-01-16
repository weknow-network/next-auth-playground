import { useSession, signIn, signOut,  } from "next-auth/react"
import { useEffect, useState, useTransition } from "react"
import Layout from "../components/layout"

export default function AltAuthPage() {
  const { data, status, ...other } = useSession()
  const [info, setInfo] = useState("")
  const [isPending, startTransition] = useTransition();


  useEffect(() => {
    console.log("session", {status, other});
    if(status === "authenticated"){
      if(data)
      {
        const inf = JSON.stringify(data, null, 2);
        setInfo(inf);
        sessionStorage.setItem("auth", inf);
        // startTransition(()=>{
        //   signOut();
        // });
      }
    } else {
      const inf = sessionStorage.getItem("auth");
      setInfo(inf ?? '');
    }
  }, [status])
  // }, [data])
  

  return (
    <Layout>
      <button type="button" onClick={() => signIn('linkedin')}>Sign In</button>
      <pre>Is pending: {JSON.stringify(isPending)}</pre>
      <pre>{info}</pre>
    </Layout>
  )
}
