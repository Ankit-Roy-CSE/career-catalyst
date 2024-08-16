'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import "../../../styles/authForm.css"

const AuthForm: React.FC = (): JSX.Element => {
    const [firstName, setFirstName] = useState<string>("")
    const [lastName, setLastName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [confirmPassword, setConfirmPassword] = useState<string>("")

    const [inSignUpState, setInSignUpState] = useState<boolean>(true)
    const [showPassword, setShowPassword] = useState<boolean>(false)

    function onInputChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target
        switch (name) {
            case "first-name":
                setFirstName(value.trim())
                break
            case "last-name":
                setLastName(value.trim())
                break
            case "email":
                setEmail(value)
                break
            case "password":
                setPassword(value)
                break
            case "confirm-password":
                setConfirmPassword(value)
                break
            default:
                break
        }
    }

    function onSubmitHandler(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log({
            firstName,
            lastName,
            email,
            password,
            confirmPassword
        })
        console.log("Form submitted")
    }

    useEffect(() => {

    }, [])
    return (
        <div className="auth-form-container">
            <form className="auth-form" onSubmit={onSubmitHandler}>
                <div className="sign-up-heading bold-text">{inSignUpState ? "Create Account" : "Sign In"}</div>
                <div className="auth-form-input-box-container">
                    {inSignUpState && <div className="name-input-container">
                        <input
                            type="text"
                            name="first-name"
                            value={firstName}
                            onChange={onInputChangeHandler}
                            className="first-name auth-form-input-box"
                            placeholder="First Name" />
                        <input
                            type="text"
                            name="last-name"
                            value={lastName}
                            onChange={onInputChangeHandler}
                            className="last-name auth-form-input-box"
                            placeholder="Last Name" />
                    </div>}
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={onInputChangeHandler}
                        className="email auth-form-input-box"
                        placeholder="Email" />
                    <div className="password-container">
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            value={password}
                            onChange={onInputChangeHandler}
                            className="password auth-form-input-box"
                            placeholder="Password" />
                        <div className="show-icon" onClick={() => setShowPassword(!showPassword)}>
                            <Image alt='eye icon' src="/assets/Icons/eye.svg" width={20} height={20} />
                        </div>
                    </div>
                    {inSignUpState && <input
                        type={showPassword ? "text" : "password"}
                        name="confirm-password"
                        value={confirmPassword}
                        onChange={onInputChangeHandler}
                        className="confirm-password auth-form-input-box"
                        placeholder="Confirm Password" />}
                </div>
                <div className="submit-btn-container">
                    <button type='submit' className="create-account-btn">{inSignUpState ? "Create Account" : "Sign In"}</button>
                    <u onClick={() => setInSignUpState(val => !val)} ><p>or, {inSignUpState ? "Sign In" : "Create Account"}</p></u>
                </div>
                <div className="facebook-sign-up oauth-btn">
                    <Image alt='facebook icon' src="/assets/images/facebook.png" width={18} height={18} />
                    <div>Sign up with Facebook</div>
                </div>
                <div className="google-sign-up oauth-btn">
                    <Image alt='google icon' src="/assets/Icons/google.svg" width={18} height={18} />
                    <div>Sign up with Google</div>
                </div>
                <div className="github-sign-up oauth-btn">
                    <Image alt='github icon' src="/assets/Icons/github.svg" width={18} height={18} />
                    <div>Sign up with GitHub</div>
                </div>
                {inSignUpState && <div className="forgot-password-link">Forgot Password?</div>}
                {inSignUpState && <div className="privacy-policy-text">By signing up, you agree to our Terms & conditions, Privacy policy</div>}
            </form>

            <div className="auth-form-img-container">
                <div className="sign-up-text sign-in-link">
                    <span className="text">{inSignUpState ? "Already have an account? " : "Don’t have an account yet? "}</span>
                    <span className="sign-in-link-text bold-text" onClick={() => setInSignUpState(val => !val)}>{inSignUpState ? "Sign In" : "Create new for free!"}</span>
                </div>

                <img alt='sign up image' src="/assets/Icons/signUp.svg" />
            </div>
        </div>
    )
}

export default AuthForm
