import styles from "./Login.module.css";
import heroImg from "../../assets/loginImg.svg";
function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.heroText}>HeroText</div>
      <div className={styles.heroImage}>
        <img src={heroImg} />
      </div>
      <div className={styles.subText}>
        <div className={styles.line} />
        <div className={styles.loginText}>Login</div>
        <div className={styles.line} />
      </div>
      <div className={styles.username}></div>
      <div className={styles.password}></div>
      <div className={styles.button}></div>
      <div className={styles.forgotText}></div>
    </div>
  );
}

export default Login;
