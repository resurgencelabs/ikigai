import styles from './about.module.scss';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export function About(){
    return (
        <div className={styles.home}>
    <div className={styles.header}>
      <a><img src="./home-img.png" alt="" height="80" width="80" /></a>

      <div className={styles.topnav}>
        <a  href="/landing">Home</a>
        <a href="/projects">Projects</a>
        <a className={styles.active} href="/about">About</a>
        <a href="/profile">Profile</a>
        
      </div>
    </div>
    
    <div className={styles.homeWrapper}>
      <div className={styles.homeText2} >About Ikigai</div>
      <img className={styles.homeImg} src="./home-img.png" width={170} height={100} alt="" />
      <br />
      
     
      <div className={styles.row}>
        <div>
          <a>Ikigai is more than a project. It is a mission to help artists, game developers, charitable organizations, among others raise funds
             on Web 3, while not having to compromise on their, or their patrons' privacy, 
             thanks to the privacy offered by Aztec Smart Contracts.</a>
          <br/><br/>
          Currently, Ikigai provides the following features:
            <br/><br/>
          <a className={styles.pointers}>
            
            - Browse and enquire about various ongoing fundraiser campaigns <br/>
            - Donate or participate in any of the campaigns without having your donor list public <br/>
            - Create your own fundraiser campaigns with ultra secure and private Aztec Smart Contracts <br/>
            - Receive NFTs as proof of participation in fundraiser campaigns <br/>
            - Get access to private channels to get news and alpha from the projects you have donated to <br/>
            - Enjoy the increasingly cooler multi-tier access depending on the range of your donation: Bronze, Silver, Gold, Platinum, and Noir tier access
            <br/><br/>
          </a>
          <a>
            We will add more features as the ecosystem grows. 
          </a>
          <br/>
        </div>
      </div>
      
      
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js"></script>
  </div>
    );
}