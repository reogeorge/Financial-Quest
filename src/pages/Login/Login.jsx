import styles from "./Login.module.css";
import heroImg from "../../assets/loginImg.svg";
function Login() {
  return (
    <div className={styles.outercontainer}>
        <div className={styles.container}>
            <div className={styles.heroText}>FINANCIAL QUEST</div>
            <img src={heroImg} />
            <div className={styles.subText}>
                <div className={styles.line} />
                <div className={styles.loginText}>LOGIN</div>
                <div className={styles.line} />
            </div>
            <div className={styles.username}>
                <label className={styles.user}>USERNAME</label>
                <input type="text" placeholder="Username" className={styles.input} />
            </div>
            <div className={styles.username}>
                <label className={styles.user}>PASSWORD</label>
                <input type="text" placeholder="Password" className={styles.input} />
            </div>
            <div className={styles.button}>
                <button className={styles.loginButton}>Login</button>
                <h3 className={styles.or}>sign up instead</h3>
            </div>
            <h4 className={styles.forgot}>oops i forgot my password</h4>
        </div>
    </div>    
  );
}

export default Login;
