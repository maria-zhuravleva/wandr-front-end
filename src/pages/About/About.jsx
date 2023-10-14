// css
import styles from './About.module.css'
import missionImage from "../../assets/img/default-pic2.jpg"

const About = () => {
  return (
    <>
      <div className={styles.mainHeader}>
        <h1>About Us</h1>
      </div>
      <div className={styles.container}>
        <div className={styles.header}>Our<span>Mission</span></div>
        <div className={styles.paragraph}>
          <p>Our mission is to inspire others to step out of their comfort zones, discover new cultures, traditions, landscapes and create lasting memories. <br />
            We believe that every journey has a story to tell, <br /> 
            and by sharing these stories, <br />
            we can inspire others to embark on their own adventures. <br />
            Through our platform, we provide resources, inspiration, and a platform for travelers to connect, exchange ideas, <br />
            and foster a sense of belonging. <br />
            Together, <br />
            we're redefining the way we experience the world.
          </p>
        </div>
        <div className={styles.images}>
          <div className={styles.imageContainer}>
            <img src={missionImage} alt="waterfall" />
            <div className={styles.imageText}>LinkedIn</div>
          </div>
          <div className={styles.imageContainer}>
            <img src={missionImage} alt="waterfall" />
            <div className={styles.imageText}>LinkedIn</div>
          </div>
          <div className={styles.imageContainer}>
            <img src={missionImage} alt="waterfall" />
            <div className={styles.imageText}>LinkedIn</div>
          </div>
          <div className={styles.imageContainer}>
            <img src={missionImage} alt="waterfall" />
            <div className={styles.imageText}>LinkedIn</div>
          </div>
        </div>
        <div className={styles.anotherHeader}><span className={styles.team}>Our Team</span><span>Meet</span></div>
      </div>
    </>
  )
}

export default About