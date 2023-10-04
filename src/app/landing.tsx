import styles from './landing.module.scss';
import {hi} from './index.js';

function goto_landing(){
    window.location.href="/landing";
    
  }

  function goto_projects(){
    window.location.href="/projects";
    
  }

  function goto_about(){
    window.location.href="/about";
    
  }

  function goto_profile(){
    window.location.href="/profile";
    
  }

export function Landing(){
    return (
        <div id="bod" className={styles.home}>
        <div className={styles.header}>
          <a><img src="./home-img.png" alt="" height="80" width="80" /></a>
    
          <div className={styles.topnav}>
            <a className={styles.active} href="/landing">Home</a>
            <a href="/projects">Projects</a>
            <a href="/about">About</a>
            <a href="/profile">Profile</a>
            
          </div>
        </div>
      
        <div className={styles.homeWrapper} > 
          <div className={styles.row}>
            <div className={styles.collg2}>
              <div className={styles.homeText}></div>
            </div>
          </div>
          <div className={styles.centerBox}
            
          >
            <div style={{visibility: "hidden"}}>k</div>
            <div className={styles.homeText2} style={{color:"black"}}>Patreonish</div>
    
            <div className={styles.intro}>
              Be a part of the journey of aspiring Game Devs, NFT Artists, Web 3 Social Entrepreneurs, and Project BUIDLers <br/>
              Support the causes that are important, donate to the projects you love privately, become a patron <br/>
              Get the latest updates and releases from the project before anyone else with the Platinum Sporsor Access NFT
            </div>
            <br /><br /><br />
          </div>
          <br /><br />
          <div className={styles.homeText} id="msg">
            This is the beta app by the Resurgence Labs Team. The complete app will be
            released in 2024!
          </div>
        </div>
        
        <footer className={styles.homeFooter}>
          <div className={styles.container}>
            <div className={styles.row}>
              <div className={styles.collg8}>
                <div className={styles.footerLink}>
                  <a
                    ><img src="./img/home-img.png" alt="" height="100" width="100"
                  /></a>
                  <a
                    ><img
                      src="./img/home-img.png"
                      alt=""
                      height="30"
                      width="30"
                      style={{visibility: "hidden"}}
                  /></a>
                  <a className={styles.footerNav2}
                    >Resurgence Labs Inc © 2023 All Rights Reserved</a
                  >
                  <a target="_blank" href="./about.html" className={styles.footerNav}>about</a>
                  <a
                    target="_blank"
                    href="https://docs.google.com/document/d/1QjUSCfs_4Pjicf6DM1xDJC38_9wtl9d2-f1P5V4n6_o/edit?usp=sharing"
                    className={styles.footerNav}
                    >privacy policy</a
                  >
                  <a
                    target="_blank"
                    href="https://docs.google.com/document/d/1nDRvixpSWLnjxbeX-hGXFpufSRq8UidupEhR-AWzvak/edit?usp=sharing"
                    className={styles.footerNav}
                    >terms of service</a
                  >
                </div>
              </div>
            </div>
          </div>
        </footer>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js"></script>
      </div>
        
    );
}