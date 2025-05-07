import styles from './overview.module.css'

const OverviewBoxes = ({socialMedia, pageInteraction, totalInteraction, socialIcon,stadisticIcon, value}) => {
    return <div className={styles['overviewbox']}>
    <div>
      <div>
        <p>{pageInteraction}</p>
        <img src={socialIcon}/>
      </div>
      <div>
      <h3>{totalInteraction}</h3>
      <div>
        <img src={stadisticIcon}/>
        <p>{value}</p>
      </div>
      </div>
    </div>
  </div>
}
export default OverviewBoxes