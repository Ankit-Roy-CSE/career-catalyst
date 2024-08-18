'use client'
import { useRouter } from "next/navigation";
import AuthForm from "./components/AuthForm";

export default function LandingPage() {
    const router = useRouter()

    const onSubmitHandler = (data: { firstName: string, lastName: string, email: string, password: string, confirmPassword: string }) => {
        console.log(data)
        router.push("/resume/builder")
    }

    return (
        <div className="auth-container flex flex-col items-stretch lg:items-center justify-center h-screen">
            <div className="rounded-md border-2 border-gray-300">
                <AuthForm onSubmit={onSubmitHandler} />
            </div>
        </div>
    )
}