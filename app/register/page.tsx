import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import Link from "next/link";

const Register = async () => {
  return (
    <div className="mt-20 max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white border border-[#121212] dark:bg-black">
      <h2 className="mb-4 text-2xl font-semibold tracking-wide">
        Welcome to MyShope
      </h2>

      <form className="space-y-4">
        <div className="space-y-2">
          <div className="flex flex-row gap-2">
            <div>
              <Label htmlFor="firstName">First Name</Label>
              <Input
                type="text"
                id="firstName"
                placeholder="saad"
                name="firstName"
              />
            </div>

            <div>
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                type="text"
                id="lastName"
                placeholder="mamun"
                name="lastName"
              />
            </div>
          </div>

          <Label htmlFor="email">Enter Email</Label>
          <Input
            type="email"
            id="email"
            placeholder="saadmamun@gmail.com"
            name="email"
          />

          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            placeholder="12345678"
            name="password"
          />
        </div>

        <button
          type="submit"
          className="w-full border px-4 py-1 rounded-lg bg-blue-700 text-white font-bold tracking-wide"
        >
          Sign up
        </button>

        <p>
          Alredy have an account? <Link href="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
