 


import React from 'react'
import styles from './login.module.css'
import { NavLink } from 'react-router-dom'
const SignUp = () => {
    return (
        <div className='full-page-section'>
            <div className='centre-page-section min-h-[900px] justify-center'>

                <div className={styles.loginOuter}>
                    <div className={styles.heading}>
                        <h1>Create a <span>free account</span></h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolores voluptate molestiae sequi.</p>
                    </div>
                    <div className={styles.inputDetails}>
                        <div className={styles.loginWithGF}>
                            <NavLink className={styles.withLogin}>G</NavLink>
                            <NavLink className={styles.withLogin}>F</NavLink>
                        </div>
                        <div className={styles.useEmail}>

                            <p>Or use email to signup </p>

                        </div>
                        <form className={styles.inputForm} action="#">
                            <div className={styles.inputField}>
                                <label htmlFor="name">Name</label>
                                <input type="text" className={styles.formControl} id="name" placeholder='Enter your name' />
                            </div>
                            <div className={styles.inputField}>
                                <label htmlFor="userName">Username</label>
                                <input type="text" className={styles.formControl} id="userName" placeholder='Only alphanumeric allowed [a-z, 0-9]' />
                            </div>
                            <div className={styles.inputField}>
                                <label htmlFor="email">Email Address</label>
                                <input type="email" className={styles.formControl} id="email" placeholder='Enter your email Address' />
                            </div>
                            <div className={styles.inputField}>
                                <label htmlFor="password">Password</label>
                                <input type="password" className={styles.formControl} id="password" placeholder='Enter a new password' />
                            </div>
                            <button className={styles.submit}>Submit Details</button>

                        </form>
                        <div className={styles.createAccount}>
                            <p>Already Sign Up <NavLink to='/login' className={styles.createSignUp}>Login</NavLink></p>
                        </div>


                    </div>


                </div>
            </div>
        </div>
    )
}

export default SignUp


