import React from "react";
import style from "./style.module.css";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../../Reusablecomponents/CustomButton/CustomButton'
import SpotifyLogo from '../../Reusablecomponents/SpotifyLogo'
import CustomInput from '../../Reusablecomponents/CustomInput';
import { FaApple, FaFacebook } from "react-icons/fa6";
import { ReactComponent as GoogleIcon } from '../../assets/google.svg';
import Checkbox from '../../Reusablecomponents/CheckBox/index'

function Login() {
    const navigate = useNavigate();

    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };
    return (
        <section>
            <div className={style.logo}>
                <SpotifyLogo color="black" />
            </div>
            <main className={style.main}>
                <CustomButton className={style.facebook} onClick={() => navigate('home')}>
                    <FaFacebook size={'1rem'} /> CONTINUE WITH FACEBOOK
                </CustomButton>
                <CustomButton type="secondary" onClick={() => navigate('playlist')}>
                    <FaApple size={'1rem'} />  CONTINUE WITH APPLE
                </CustomButton>

                <CustomButton type="outline" className={style.google} onClick={() => navigate('google')}>
                    <GoogleIcon /> CONTINUE WITH GOOGLE
                </CustomButton >
                <div className={style.divider}>
                    <span>OR</span>
                </div>
                <CustomInput type='email' placeholder={'Email address or username'} label={'Email address or username'} />
                <CustomInput type='password' placeholder={'Password'} label={'Password'} />

                <h4>Forgot your password?</h4>


                <div className={style.checkbox}>
                <Checkbox label="Remember me" />
                    <button className={style.login}>Log in</button>
                </div>
                <div className={style.divider}></div>

                <p>Don't have an account?</p>
                <CustomButton type="outline" className={style.google} onClick={() => navigate('google')}>
                    SIGN UP FOR SPOTIFY
                </CustomButton >


            </main >
        </section>

    );
}

export default Login;