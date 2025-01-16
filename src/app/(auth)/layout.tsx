import { Metadata } from "next";
import Header from "./components/Header";

interface AuthLayoutProps {
    children: React.ReactNode;
}
export const metadata: Metadata = {
    title: "Login / Register",
    description: "This is joyful user authentication",
};

const AuthLayout = ({ children }: AuthLayoutProps) => {
    return (
        <>
            <Header />
            <div className="bg-blue-100 flex items-center" style={{ minHeight: "calc(100vh - 142px)" }}>
                <div className="container mx-auto p-4">
                    <div className="p-6 bg-white rounded-xl">
                        <div className="flex flex-col sm:flex-row justify-between gap-2 flex-wrap">
                            <div className="flex-1 w-full">
                                {children}
                            </div>
                            <div className="w-full sm:w-[45%] flex items-center justify-center">
                                <h2 className="text-3xl text-gray-500">Place for offer</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AuthLayout