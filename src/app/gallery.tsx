import styles from './gallery.module.scss';
import {get_pics} from './index.js';
import { useState, useEffect} from 'react';

export function Gallery(){
    const [selectedSource, setSelectedSource] = useState('./home-img.png'); 
    var pid = localStorage.getItem("projId") || "0";
    useEffect(()=>{
        
      if (pid == "1") {
        setSelectedSource("./dogs.png");
        var pics = get_pics();
        var root = document.getElementById('rootx')!;
        var i = 0;
        var childrenIfAny = root.childNodes;
        document.getElementById("proj_name")!.textContent = "Stray Rescue St Louis Gallery";
        while (childrenIfAny.length != 0){
            var e = childrenIfAny[0];
            e.remove();
            childrenIfAny = root.childNodes;
        }
        var elr = document.createElement('div');
        elr.className = styles.cardRow;
        while (i < pics.length){
            if (i % 4 == 0 && i != 0){
              root.appendChild(elr);
              var space = document.createElement('br');
              root.appendChild(space);
              space = document.createElement('br');
              root.appendChild(space);
              elr = document.createElement('div');
              elr.className = styles.cardRow;
            }
            var el = document.createElement('div');
            el.className = styles.colx;
            el.innerHTML = `
            <div class="exploreCardBody" style="margin-left: 10px;">
                                <div class="exploreCard">
                                  <img
                                    class="homeImg2"
                                    src="`.concat(pics[i][1]).concat(`"
                                    alt=""
                                    style="width: 250px; height: 220px; object-fit: fill;"
                                   
                                  />
                                  <div class="exploreCardFooter" style="text-align:right;display:none;" >
                                    <div class="exploreCardText">`
                                      .concat("").concat(
                                    `</div>
                                  </div>
                                </div>
                                <div class="exploreCardButton">
                                  <a id="icpvg" style="color: rgb(0, 223, 223); font-size: .5em;"`.concat(`">`.concat(pics[i][0]).concat(`</a>
                                </div>
                              </div>
            `))));
            console.log(i.toString().concat(": ").concat(pics[i][0]));
            elr.appendChild(el);
            i += 1;
          
        }
        while (i % 4 != 0){
            var el = document.createElement('div');
            el.className = styles.colx;
            elr.appendChild(el);
            i += 1;
          }
        
          root.appendChild(elr);
      }
      else if (pid == "2") {
        document.getElementById("proj_name")!.textContent = "Hot or Not Gallery";
        setSelectedSource("./gbzn.png");
      }
      else {}
      
    }, [])
    return (
        <div id="bod" className={styles.home}>
    <div className={styles.header}>
        <a><img src="./home-img.png" alt="" height="80" width="80" /></a>

        <div className={styles.topnav}>
          <a  href="/landing">Home</a>
          <a  href="/projects">Projects</a>
          <a  href="/about">About</a>
          <a  href="/profile">Profile</a>
          
        </div>
    </div>
    <a className={styles.back} href="/project_details">back</a>
    <div className={styles.homeWrapper}>
    <div id="proj_name" className={styles.phead}>None</div>
      <img id="h_im" className={styles.homeImg} src={selectedSource} alt="" />
      
      <br /><br />
      <div id="h_tx" className={styles.homeText2} style={{color: "aquamarine"}}></div>
      <br/><br/>
      <div className={styles.intro}>______________________________________________________ </div><br/>
      <div className={styles.intro}>Here are our dogs </div><br/>
      <div className={styles.row}>
        
        
        <div id="rootx" className={styles.collg10}>
          
         
          
        </div>
      </div>
      
      
    </div>
   <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
   <br/><br/><br/><br/><br/><br/><br/><br/><br/>
  </div>
    )
 }