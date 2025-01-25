'use client';

import Link from "next/link";
import Image from "next/image";
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import React, {useState} from "react";
import {FormControl} from "@mui/material";
import { useActionState} from "react";
import { loginAction} from "@/lib/action";


const LoginForm = () => {
  const [state, formAction, isPending] = useActionState(loginAction, undefined)
  console.log(state, isPending);

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <form
      action={formAction}
      className={"w-full items-center space-x-0 py-12"}
    >
      <div className="flex items-center justify-center font-semibold leading-normal ">
        <Image
          src=".public/next.svg"
          alt="Logo"
          width="350"
          height="20"
        />
      </div>
      <div className="items-center leading-normal">
        <h3 className={"font-semibold text-md md:text-lg"}>Login to continue.</h3>
        <p className={"text-sm"}>Provide your email and password to login</p>
      </div>
      <div className="flex w-full flex-col items-center justify-center">
        <div className="flex w-full mt-6">
          <FormControl className="flex w-full">
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              size="small"
              required
              sx={{
                '& .MuiOutlinedInput-root': {
                  '&.Mui-focused fieldset': {
                    borderColor: '#3B82F6',
                  },
                },
                '& .MuiInputLabel-root': {
                  color: 'gray',
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: '#3B82F6',
                },
              }}
            />
            {/*<FormHelperText>Email is required</FormHelperText>*/}
          </FormControl>
        </div>
        <div className={"flex flex-col w-full mt-6"}>
          <FormControl className={"flex w-full"}>
            <TextField
              id="password"
              label="Password"
              variant="outlined"
              required={true}
              type={showPassword ? 'text' : 'password'}
              size="small"
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label={
                          showPassword ? 'hide the password' : 'display the password'
                        }
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        onMouseUp={handleMouseUpPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                },
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '&.Mui-focused fieldset': {
                    borderColor: '#3B82F6',
                  },
                },
                '& .MuiInputLabel-root': {
                  color: 'gray',
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: '#3B82F6',
                },
              }}
            />
            {/*<FormHelperText>*/}
            {/*  Password is required*/}
            {/*</FormHelperText>*/}
          </FormControl>
        </div>
        <div
          className={"flex w-full mt-6 text-white font-semibold items-center justify-center bg-tasty-primary-400 hover:bg-blue-500 shadow-md rounded-xl"}
        >
          <button
            className={"py-1"}
            type={"submit"}
          >
            Login
          </button>
        </div>
        <div className={"mt-1 text-sm hover:underline hover:text-neutral-500"}>
          <Link href={"forgot-password"}>
            Forgot password?
          </Link>
        </div>
        <div
          className={"flex w-full mt-12 py-1 font-semibold items-center justify-center border border-neutral-400 shadow-sm rounded-xl hover:border-gray-500 hover:shadow-md cursor-pointer"}
        >
          <Link href={'sign-up'}> Create new account </Link>
        </div>
      </div>
    </form>
  )
}
export default LoginForm;