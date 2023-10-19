import { Link } from 'react-router-dom'
import { useTheme } from '../../components/ThemeContext/ThemeContext'

// css
import styles from './About.module.css'
import missionImage from "../../assets/img/default-pic2.jpg"
import aboutMaria from "../../assets/img/aboutMaria.jpg"

const About = () => {
  const { theme, setTheme } = useTheme()

  return (
    <div className={styles.mainAboutContainer}>
      <div className={`${styles.mainHeader} ${styles[theme]}`}>
        <h1>About Us</h1>
      </div>
      <div className={styles.aboutUsContainer}>
        <div className={styles.headerAbout}>Our<span>Mission</span></div>
        <div className={`${styles.paragraphAbout} ${styles[theme]}`}>
          <p><span className={styles.pSpan}>Our mission</span> is <br /> 
            to inspire others to step out of their comfort zones, 
            <br />
            discover new cultures, 
            <br />
            traditions, landscapes, 
            <br /> 
            and create lasting <br /> memories. 
            <br />
            <br /> 
            We <span className={styles.pSpan}>believe</span> that every journey has a story to tell,
            <br />  
            and by sharing these stories, 
            <br />
            we can inspire others <br /> to embark on <br /> their own adventures. <br />
            <br /> Through our <span className={styles.pSpan}>platform</span>, <br /> we provide resources,  
            <br />inspiration, <br /> and a place for travelers 
            <br /> to connect, exchange ideas, 
            <br /> and foster <br /> a sense of belonging. <br />
            <br /> <span className={styles.pSpan}>Together,</span> <br />
            we're redefining the way we experience the world.
          </p>
        </div>
        <div className={`${styles.ourImages} ${styles[theme]}`}>
          <div className={styles.imageContainer}>
            <img src={missionImage} alt="image" />
            <div className={styles.imageText}>
              <Link to="https://www.linkedin.com/in/mariia-zhuravleva/" target="_blank" rel="noopener noreferrer"
              style={{
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
              onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
              >
                LinkedIn
              </Link>
            </div>
          </div>
          <div className={styles.imageContainer}>
            <img src={missionImage} alt="image" />
            <div className={styles.imageText}>
              <Link to="https://www.linkedin.com/in/mariia-zhuravleva/" target="_blank" rel="noopener noreferrer"
              style={{
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
              onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
              >
                LinkedIn
              </Link>
            </div>
          </div>
          <div className={styles.imageContainer}>
            <img src={missionImage} alt="image" />
            <div className={styles.imageText}>
              <Link to="https://www.linkedin.com/in/mariia-zhuravleva/" target="_blank" rel="noopener noreferrer"
              style={{
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
              onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
              >
                LinkedIn
              </Link>
            </div>
          </div>
          <div className={styles.imageContainer}>
            <img src={aboutMaria} alt="image" />
            <div className={styles.imageText}>
              <Link to="https://www.linkedin.com/in/mariia-zhuravleva/" target="_blank" rel="noopener noreferrer" 
                style={{
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
                onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
              >
                LinkedIn
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.anotherHeader}><span className={styles.team}>Our Team</span><span>Meet</span></div>
      </div>
    </div>
  )
}

export default About

