import { Button, Label, TextInput } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
export default function Signup() {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-6">
        <div className="flex-1">
          <Link
            to="/"
            className=" text-sm sm:text-xl font-bold dark:text-white"
          >
            <span className="px-2 py-1 text-4xl bg-gradient-to-r from-indigo-500 via-purple-700  to-pink-500 rounded-lg text-white">
              Balaj's
            </span>
            Blog
          </Link>
          <p className="text-sm mt-5">
            this is a demo project. you can signup with your email and password
            or with google
          </p>
        </div>
        <div className="flex-1">
          <form action="" className="flex flex-col gap-4">
            <div>
              <Label value="Your Username"/>
                <TextInput
                type="text"
                placeholder="Username"
                id="username"
                />
            </div>
            <div>
              <Label value="Your Email"/>
                <TextInput
                type="email"
                placeholder="name@email.com"
                id="email"
                />
            </div>
            <div>
              <Label value="Your Password"/>
                <TextInput
                type="password"
                placeholder="Password"
                id="password"
                />
            </div>
<Button gradientDuoTone='purpleToPink'>Sign up</Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account?</span>
            <Link to="/sign-in" className="text-blue-500">Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
