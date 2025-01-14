import { Metadata } from "next";

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
            <div>{children}</div>
        </>
    )
}

export default AuthLayout