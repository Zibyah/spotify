import { Link } from "react-router-dom";
import NavBar from "../NavBar";
import style from "./style.module.css"
import CustomButton from '../../Reusablecomponents/CustomButton/CustomButton'

function Hero() {
  return (
    <div>
      <NavBar />
      <section className={style.hero}>
            <h1 className={style.title}> Get Premium free for 1 month</h1>
            <p className={style.description}>Just ₹119/month after. Debit and credit cards accepted. Cancel anytime.</p>
            <div className={style.button}>
            <CustomButton className={style.secondary} type='secondary'>Get Started</CustomButton>
            <CustomButton type='outline' white>See Other Plans</CustomButton>
            </div>
            <div className={style.terms}> <a>Terms and conditions apply. </a> 1 month free not available for users who have already tried Premium.
    
            </div>
        </section>
      
    </div>
  );
}

export default Hero;