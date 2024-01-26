import React from 'react'
import styles from './login.module.css'
import { NavLink } from 'react-router-dom'

const Login = () => {
    return (
        <div className={styles.loginContainer}>
            <div className={styles.login}>

                <div className={styles.loginOuter}>
                    <div className={styles.heading}>


                        <h1>Sign in to <span>E Commerce</span></h1>
                    </div>
                    <div className={styles.inputDetails}>

                        <form className={styles.inputForm} action="#">

                            <div className={styles.inputField}>
                                <label htmlFor="userName">Email address / Username</label>
                                <input type="text" className={styles.formControl} id="userName" placeholder='Only alphanumeric allowed [a-z, 0-9]' />
                            </div>

                            <div className={styles.inputField}>
                                <label htmlFor="password">Password</label>
                                <input type="password" className={styles.formControl} id="password" placeholder='Enter a new password' />
                            </div>
                            <button className={styles.submit}>Sign In</button>

                        </form>
                        <div className={styles.useEmail}>

                            <p>Or continue with</p>

                        </div>

                        <div className={styles.loginWithGF}>
                            <NavLink className={styles.withLogin}>G</NavLink>
                            <NavLink className={styles.withLogin}>F</NavLink>
                        </div>

                        <div className={styles.createAccount}>
                            <p>Don't have an account? <NavLink to='/signUp' className={styles.createSignUp}> Create Account</NavLink></p>
                        </div>

                        <div className={styles.verifyEmail}>
                            <p>This site is protected by reCAPTCHA and the Google Privacy
                                Policy and Terms of Service apply.</p>
                        </div>

                    </div>


                </div>
            </div>
        </div>
    )
}

export default Login


