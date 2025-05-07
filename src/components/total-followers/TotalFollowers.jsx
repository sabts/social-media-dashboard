import styles from "./totalfollowers.module.css"
const TotalFollowers = ({socialMedia, socialIcon, username, followers,typefollow,upDown,registerRecent}) => {
  const borderColor =  `${styles['card-container']} ${styles[`${socialMedia}-line`]}`;

    return <div className={borderColor}>

    <div className={styles["user-social-div"]}>
      <img src={socialIcon} alt="social media icon" />
      <p className={styles['username']}>{username}</p>
    </div>

    <div className={styles["followers-div"]}>
    <h2 className={styles["follows-numbers"]}>{followers}</h2>
    <p className={styles["followers"]}>{typefollow}</p>
    </div>

    <div className={styles["registerRecent-div"]}>
      <img src={upDown} alt="up/down icon" />
      <p className={styles["recentfollowers"]}>{registerRecent}</p>
    </div>

  </div>
}
export default TotalFollowers