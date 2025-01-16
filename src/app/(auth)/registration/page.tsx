import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

function SignUpPage() {
    return (
        <>
            <div>
                <h4 className="text-red-500 text-3xl font-semibold">Sign up</h4>
                <p className="text-gray-600 font-medium text-base mt-1">Already have an account ? <Link className="text-brand hover:underline" href="/login">Sign in</Link></p>
            </div>
            <form className="mt-5 w-[93%]">
                <div className="grid gap-x-4 gap-y-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2">
                    <div className="grid w-full items-center gap-1.5">
                        <Label className="text-md text-gray-700" htmlFor="picture">Full Name*</Label>
                        <Input className="mt-1" placeholder="Enter your full name" />
                    </div>
                    <div className="grid w-full items-center gap-1.5">
                        <Label className="text-md text-gray-700" htmlFor="picture">Username</Label>
                        <Input className="mt-1" placeholder="Enter your username" />
                    </div>
                    <div className="grid w-full items-center gap-1.5">
                        <Label className="text-md text-gray-700" htmlFor="picture">Email*</Label>
                        <Input className="mt-1" placeholder="Enter your email" />
                    </div>
                    <div className="grid w-full items-center gap-1.5">
                        <Label className="text-md text-gray-700" htmlFor="picture">Phone Number*</Label>
                        <Input className="mt-1" placeholder="Enter your phone number" />
                    </div>
                    <div className="grid w-full items-center gap-1.5">
                        <Label className="text-md text-gray-700" htmlFor="picture">Password*</Label>
                        <Input className="mt-1" placeholder="Enter your password" />
                    </div>
                    <div className="grid w-full items-center gap-1.5">
                        <Label className="text-md text-gray-700" htmlFor="picture">Confirm password*</Label>
                        <Input className="mt-1" placeholder="Confirm your password" />
                    </div>
                </div>
                <div className="flex items-center space-x-2 mt-5 mb-2 cursor-pointer">
                    <Checkbox className="h-6 w-6" id="terms" />
                    <label
                        htmlFor="terms"
                        className="text-[15px] font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                        I agree to receive special updates, offers, and promotions from Joyfulsurprice.in
                    </label>
                </div>
                <Button type="submit" size="full" className="mt-4 uppercase text-md">Register</Button>
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

export default SignUpPage