import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { Home } from './home.js';
import { About } from './about.js';
import './index.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import { Landing } from './landing.js';
import  { Projects } from './projects.js';
import { Profile } from './profile.js';
import { type } from 'os';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <>
      {/* This is the alias of BrowserRouter i.e. Router */}
      <Router>
        <Routes>
          {/* This route is for home component 
          with exact path "/", in component props 
          we passes the imported component*/}
          <Route path="/" element={<Home/>}/>
            
          {/* This route is for about component 
          with exact path "/about", in component 
          props we passes the imported component*/}
          <Route path="/about" element={<About/>} />
            
           {/* This route is for about component 
          with exact path "/landing", in component 
          props we passes the imported component*/}
          <Route path="/landing" element={<Landing/>} />

           {/* This route is for about component 
          with exact path "/profile", in component 
          props we passes the imported component*/}
          <Route path="/profile" element={<Profile/>} />

           {/* This route is for about component 
          with exact path "/projects", in component 
          props we passes the imported component*/}
          <Route path="/projects" element={<Projects/>} />
            
          {/* If any route mismatches the upper 
          route endpoints then, redirect triggers 
          and redirects app to home component with to="/" */}
          
        </Routes>
      </Router>
    </>
  </React.StrictMode>,
);

export function hi(){
  console.log("hi");
}

export function load_profile() {
  
}



export function get_user_data() {
  var arr = [];
  arr.push("zias");
  arr.push("resurgencelabs@gmail.com");
  arr.push("nambi_");
  return arr;
}

export function get_projects() {
  var proj_pre = [["Stray Rescue St Louis", "social", "dogs.png", "https://www.strayrescue.org/adopt-a-dog", "https://twitter.com/StrayRescue", "coming soon", "Stray Rescue is a Dog Shelter in St Louis, Missouri, registered as a Non Profit Organization. Help us stay afloat in these testing times by making a small donation. Every amount, big or small counts. Here are the tiers: \n- Bronze: For donations < $30. Get all the updates and news on our dog shelter weekly \n- Silver: For donations < $100. Get all the updates and news weekly, along with the pics of our latest incoming and outgoing (adopted) puppers  \n- Gold Tier: For donations < $300. Get all the news and updates, pics of our dogs, adopt a particular dog whose expenses your donation helped cover, and get all its updates \n- Platinum Tier: For donations > $500. Get all the news and updates, the pics of our dogs, adopt one dog whose updates you get access to, and weekly face timing with the dog and the caretakers", "4"],
  ["Hot or Not", "dapp", "gbzn.png", "https://www.hotornot.wtf", "https://twitter.com/hotornot_dapp", "https://discord.com/invite/GZ9QemnZuj", "Presenting Hot or Not, the TikTok on Web 3. Monetize your free time, not just by uploading short videos, but by correctly judging all videos as Hot or Not. Coming soon to Aztec Network. Here are the tiers: \n- Bronze: For donations < $30. Get all the updates and news on our development status weekly \n- Silver: For donations < $100. Get all the updates and news weekly, along with the an exclusive weekly personalized update from our founders  \n- Gold Tier: For donations < $300. Get all the news and updates, exclusives personalized weekly updates from our founders, and access to the Hot or Not Club Chatroom \n -Platinum Tier: For donations < $1000. Get weekly news and updates, exclusive personalized weekly updates from our founders, access to the Chat Room, and an 5 NFT in our upcoming HoN NFT Airdrop \n- Noir Tier: For donations > $1000. Get all the news and updates, weekly exclusive personalized updates from our founders, access to the chat room, 10 HoN NFTs during our upcoming NFT airdrop, AND lifetime Nitro subscription on Hot or Not when it launches.", "5"]];
  return proj_pre;
}

export function load_projects_all() {
  //document.getElementById("project_key")!.value = "";
  var factor = 5;
  var i = 0;
  var root = document.getElementById("rootx")!;
  var childrenIfAny = root.childNodes;
  while (childrenIfAny.length != 0){
    var e = childrenIfAny[0];
    e.remove();
    childrenIfAny = root.childNodes;
  }
  var elr = document.createElement('div');
    elr.className = 'row';
    elr.style.display = "flex";
    elr.style.position = "relative";
    elr.style.left = "20%";
    var proj = get_projects();
  while (i < proj.length){
    if (i % factor == 0 && i != 0){
      root.appendChild(elr);
      var space = document.createElement('br');
      root.appendChild(space);
      space = document.createElement('br');
      root.appendChild(space);
      elr = document.createElement('div');
      elr.className = 'row';
    }
    var el = document.createElement('div');
    el.className = "col";
    el.style.width="30%";
    el.innerHTML = `
    <div class="exploreCardBody">
                        <div class="exploreCard">
                          <img
                            class="homeImg2"
                            src="`.concat(proj[i][2]).concat(`"
                            alt=""
                            style="width: 300px; height: 175px; object-fit: fill;"
                           
                          />
                          <div class="exploreCardFooter" style="text-align:right;" >
                            <div class="exploreCardText">`
                              .concat("").concat(
                            `</div>
                          </div>
                        </div>
                        <div class="exploreCardButton">
                          <a id="icpvg" class="exploreCardBtn" href="project_details.html?`.concat(proj[i][0]).concat(`">`.concat(proj[i][0]).concat(`</a>
                        </div>
                      </div>
    `))));
    
    elr.appendChild(el);
    i += 1;
  }
  while (i % factor != 0){
    var el = document.createElement('div');
    el.className = "col";
    elr.appendChild(el);
    i += 1;
  }

  root.appendChild(elr);


}

export function load_projects_dapp() {

}

export function load_projects_social() {

}

export function load_projects_meta() {

}

export function load_projects_game() {

}

export function load_projects_nft() {

}

export function load_projects_other() {

}

export function project_search() {

}