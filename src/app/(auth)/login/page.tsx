import LoginForm from "@/components/shared/auth/login-form";
import { Metadata} from "next";

export const metadata: Metadata = {
  title: "Login"
}

const LoginPage = () => {
  return (
    <main className={"flex items-center justify-center min-h-screen"}>
      <div className="flex p-2 md:p-4 w-full max-w-[400px] items-center justify-center shadow-lg rounded-md border">
        <div className={"flex w-full items-center justify-center "}>
          <LoginForm/>
        </div>
      </div>
    </main>
  )
}
export default LoginPage;