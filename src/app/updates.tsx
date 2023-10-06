import styles from './updates.module.scss';
import {get_news} from './index.js';
import { useState, useEffect } from 'react';



export function Updates(){
  const [selectedSource, setSelectedSource] = useState('./home-img.png'); 
  var pid = localStorage.getItem("projId") || "0";
    useEffect(()=>{
      if (pid == "1") {
        var news = get_news();
        
        var pname = "Stray Rescue St Louis";
        document.getElementById('proj')!.textContent = pname;
        document.getElementById('heading')!.textContent = 'The Latest News and Updates on '.concat(pname);
        var root1 = document.getElementById('ups')!;
        
        var i = 0;
        while (i < news.length) {
          if (i % 2 == 0) {
            root1.innerHTML += `<div style="margin-top: .1em;padding-left: 10px;">
            <a target="_blank" href="`.concat(news[i][1]).concat(`">`.concat(news[i][0]).concat(': ').concat(news[i][2]).concat(`</a>
            <br/>
          </div>`));
          }
          else {
            root1.innerHTML += `<div style="margin-top: .0em;background-color: aqua;color:#000000;padding-left: 10px;">
            <a target="_blank" href="`.concat(news[i][1]).concat(`">`.concat(news[i][0]).concat(': ').concat(news[i][2]).concat(`</a>
            <br/>
          </div>`));
          }
          i++;
        }
        console.log("hm");
        setSelectedSource("./dogs.png");
        var el = document.getElementById("imm")!;
        if (el instanceof HTMLImageElement){
          el.src = "./dogs.png";
        }
        
      }
      else if (pid == "2") {
        
        var pname = "Hot or Not";
        document.getElementById('proj')!.textContent = pname;
        document.getElementById('heading')!.textContent = 'The Latest News and Updates on '.concat(pname);
        var root2 = document.getElementById('ups')!;
        var news = get_news();
        var j = 0;
        while (j < news.length) {
          if (j % 2 == 0) {
            root2.innerHTML += `<div style="margin-top: .1em;padding-left: 10px;">
            <a target="_blank" href="`.concat(news[j][1]).concat(`">`.concat(news[j][0]).concat(': ').concat(news[j][2]).concat(`</a>
            <br/>
          </div>`));
          }
          else {
            root2.innerHTML += `<div style="margin-top: .0em;background-color: aqua;color:#000000;padding-left: 10px;">
            <a target="_blank" href="`.concat(news[j][1]).concat(`">`.concat(news[j][0]).concat(': ').concat(news[j][2]).concat(`</a>
            <br/>
          </div>`));
          }
          j++;
        }
        console.log("ok");
        setSelectedSource("./gbzn.png");
        var el = document.getElementById("imm")!;
        if (el instanceof HTMLImageElement){
          el.src = "./gbzn.png";
        }
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
          <a href="/about">About</a>
          <a href="/profile">Profile</a>
          
        </div>
    </div>
    <a className={styles.back} href="/project_details">back</a>
    <div className={styles.homeWrapper}>
      <div id="proj" className={styles.homeText4}></div>
     
      <div className={styles.homeText3}>Click to read the latest news & articles across the Web about what's happening on Venom </div>

      <br />
      
     
      <div className={styles.rowx}>
        <div id="ups" className={styles.collg10}>
          <div className={styles.upCont}>
            <a>
              <img id="imm" className={styles.homeImg2} src={selectedSource}
              height="240"  width="240" alt="" />
              
        
            </a><a id="heading" className={styles.heads}  target="_blank" href="">The Latest on</a>
            <br/>
            <br/>
            
          </div>
            
          <br/>
          
          
          
          
          
        </div>
      </div>
      
      
    </div>
    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
  </div>
    )
}