import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { IconBrandGithub, IconBrandGoogle } from "@tabler/icons-react";

import Link from "next/link";

const Login = () => {
  return (
    <div className="mt-20 max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white border border-[#121212] dark:bg-black">
      <h1 className="mb-3 text-xl font-bold tracking-wide">
        Login with your Information
      </h1>
      <form className="space-y-2">
        <Label htmlFor="email">Email Address</Label>
        <Input
          id="email"
          placeholder="liton@gmail.com"
          type="email"
          name="email"
        />

        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          placeholder="liton@gmail.com"
          type="password"
          name="password"
        />

        <button
          type="submit"
          className="mt-4 w-full border px-4 py-2 rounded-lg bg-blue-700 text-white font-bold tracking-wide"
        >
          Log In
        </button>

        <p>
          Do not have account?{" "}
          <Link href="/register" className="font-semibold tracking-wide">
            Register
          </Link>
        </p>

        <hr className="mt-6" />

        <section className="flex flex-col space-y-4">

          <form>
            <button
            type="submit"
            className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            >
              <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300"/>
              <span className="text-neutral-700 dark:text-neutral-300 text-sm">Github</span>
            </button>
          </form>

          <form>
            <button
            type="submit"
            className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            >
              <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300"/>
              <span className="text-neutral-700 dark:text-neutral-300 text-sm">Google</span>
            </button>
          </form>

        </section>

      </form>
    </div>
  );
};

export default Login;
