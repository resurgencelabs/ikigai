import styles from './projects.module.scss';
import {load_projects_all, load_projects_dapp, load_projects_nft, load_projects_meta, load_projects_game, load_projects_social, load_projects_other, project_search} from './index.js';

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

export function Projects(){
    return (
      <div id="bod" className={styles.home} onLoad={() =>load_projects_all()}>
        <div className={styles.header}>
            <a><img src="./home-img.png" alt="" height="80" width="80" /></a>
    
            <div className={styles.topnav}>
              <a  href="/landing">Home</a>
              <a className={styles.active} href="/projects">Projects</a>
              <a href="/about">About</a>
              <a href="/profile">Profile</a>
              
            </div>
        </div>
        <div className={styles.homeWrapper}>
          <img id="h_im" className={styles.homeImg} src="./home-img.png" alt="" />
          <br />
          <div>
            <div id="h_tx" className={styles.homeText2}>Browse the Current Projects</div>
            <div className={styles.searchArea} id="searcher">
              <div className={styles.row}>
                <div className={styles.collg11}>
                  <input
                    type="search"
                    id="project_key"
                    className={styles.searchBox}
                    placeholder="Search by project name  "
                  />
                </div>
                <div className={styles.collg1}>
                  <span id="sbtn" className={styles.searchBtn} onClick={() => project_search()}>Search</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br/><br/>
        <div className={styles.row}>
            <div id="menuBar" className={styles.sideMenu}>
            
                <div className={styles.menuWrapper}>
                  
                  <div className={styles.sideMenuLinks}>
                    <a className={styles.sideMenuLink} onClick={() => load_projects_all()} 
                      ><span></span
                      >All</a
                    >
                    <a className={styles.sideMenuLink} onClick={() => load_projects_social()} 
                      ><span></span
                      >Social</a
                    >
                    <a className={styles.sideMenuLink} onClick={() => load_projects_dapp()} 
                      ><span></span>Dapps</a
                    >
                    <a className={styles.sideMenuLink} onClick={() => load_projects_game()} 
                      ><span></span>Games</a
                    >
                    <a className={styles.sideMenuLink} onClick={() => load_projects_meta()} 
                      ><span></span>Metaverse</a
                    >
                    <a className={styles.sideMenuLink} onClick={() => load_projects_nft()} 
                      ><span></span>NFTs
                      
                    </a>
                    <a className={styles.sideMenuLink} onClick={() => load_projects_other()} 
                      ><span></span>Other
                    </a>
                    
                    
                  </div>
                </div>
             </div>
             <div  className={styles.rootContainer}>kkk</div>
            <div id="rootx" className={styles.collg10}>
              
            
              
            </div>
          </div>
      </div>
        
    );
}