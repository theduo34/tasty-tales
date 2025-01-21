'use client';

import Link from "next/link";
import Image from "next/image"
import {useActionState} from "react";
import {signupAction} from "@/lib/action";

const SignUpForm = () => {
  const [errorMessage, formAction] = useActionState( signupAction, undefined)
  console.log(errorMessage)
  return (
    <form
      action = {formAction}
      className={"w-full items-center space-y-4 space-x-0 py-12"}
    >
      <div className="flex items-center justify-center font-semibold leading-normal ">
        <Image
          src=".public/next.svg"
          alt="Logo"
          width="350"
          height="20"
        />
      </div>
      <div className="flex w-full flex-col items-center justify-center">
        <div className="flex flex-col w-full mt-4">
          <input
            id="fullName"
            className="py-1 px-2 border border-neutral-300 rounded-md"
            type={"string"}
            required={true}
            name={"fullName"}
            placeholder={"Full Name"}
          />
        </div>
        <div className="flex flex-col w-full mt-4">
          <input
            id="email"
            className="py-1 px-2 border border-neutral-300 rounded-md"
            type={"email"}
            name={"email"}
            required={true}
            placeholder={"Email"}
          />
        </div>
        <div className={"flex flex-col w-full mt-4"}>
          <input
            id="password"
            className="py-1 px-2 border border-neutral-300 rounded-md"
            type={"password"}
            name={"password"}
            required={true}
            placeholder="Password"
          />
        </div>
        <div className={"flex flex-col w-full mt-4"}>
          <input
            id="confirmPassword"
            className="py-1 px-2 border border-neutral-300 rounded-md"
            type={"password"}
            name={"confirmPassword"}
            required={true}
            placeholder="Confirm Password"
          />
        </div>
        <div className={"flex flex-col w-full mt-4"}>
          <input
            id="phoneNumber"
            className="py-1 px-2 border border-neutral-300 rounded-md"
            type={"number"}
            name={"phoneNumber"}
            required={true}
            placeholder="Phone Number"
          />
        </div>
        <div
          className={"flex w-full mt-4 text-white font-semibold items-center justify-center bg-tasty-primary-400 hover:bg-blue-500 shadow-md rounded-xl"}>
          <button
            className={"py-1"}
          > Create account
          </button>
        </div>
        <div
          className={"flex w-full mt-12 py-1 font-semibold items-center justify-center border border-neutral-400 shadow-sm rounded-xl  hover:shadow-md cursor-pointer"}>
          <Link href={'/auth/login'}> Already have an account </Link>
        </div>
      </div>
    </form>
  )
}
export default SignUpForm;