import AuthForm from "./components/AuthForm";

export default function LandingPage() {
    return (
        <div className="auth-container flex flex-col items-stretch lg:items-center justify-center h-screen">
            <div className="rounded-md border-2 border-gray-300">
                <AuthForm />
            </div>
        </div>
    )
}