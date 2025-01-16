import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

function SignInPage() {
    return (
        <>
            <div>
                <h4 className="text-red-500 text-3xl font-semibold">Sign in</h4>
                <p className="text-gray-600 font-medium text-base mt-1">Dont have an account ? <Link className="text-brand hover:underline" href="/registration">Sign up</Link></p>
            </div>
            <form className="mt-5 w-[93%]">
                <div className="grid w-full items-center gap-1.5">
                    <Label className="text-md text-gray-700" htmlFor="picture">Email or Phone*</Label>
                    <Input className="mt-1" placeholder="Enter your email" />
                </div>
                <div className="grid w-full items-center gap-1.5 mt-4">
                    <Label className="text-md text-gray-700" htmlFor="picture">Password*</Label>
                    <Input className="mt-1" placeholder="Enter your password" />
                </div>
                <div>
                    <Link href="/forgot-password" className="text-md font-medium inline-block mt-2 text-gray-600 hover:underline hover:text-brand">Forgot password?</Link>
                </div>
                <Button type="submit" size="full" className="mt-4 uppercase text-md">Sign In</Button>
            </form>
            <div className="relative flex py-5 items-center w-[93%]">
                <div className="flex-grow border-t-2 border-gray-500"></div>
                <span className="flex-shrink mx-4 text-gray-600 font-medium text-sm">or sign in</span>
                <div className="flex-grow border-t-2 border-gray-500"></div>
            </div>
            <div className="grid gap-x-20 gap-y-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 w-[93%]">
                <div>
                    <Button size="full" className="uppercase text-md">OTP</Button>
                </div>
                <div>
                    <Button size="full" className="uppercase text-md">Gmail</Button>
                </div>
            </div>
        </>
    )
}

export default SignInPage