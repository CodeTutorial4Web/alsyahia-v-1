import { useState } from "react";
import ".././../assets/css/sideNavbar.css";
import UserAvatar from "./UserAvatar";
import { Link } from "react-router-dom";
import { to } from './../../../node_modules/moment/src/lib/moment/to';
import CommunityPreview from "./CommunityPreview";
import ConversationPreview from './ConversationPreview';
import SimpleBar from "simplebar-react";

export default function SideNavbar() {

  return (

    <aside className="sideNavbar">
      <div className="sideNavbar__userData">
        <UserAvatar scale={1} avatarImage={null} />

        <div className="sideNavbar__userData__name">
          <p>Mostafa Ahmed</p>
          <span>mostafa_ahmed</span>
        </div>
      </div>


      <div className="sideNavbarLinks">

      <Link to="/" >Dashboard</Link>
      <Link to="/videos" > Videos</Link>
        
      <h4 className="navSubheadingLink">Communities</h4>

      <ul className="list">
          <CommunityPreview communityGrade={8}/>
         
      </ul>

      <h4 className="navSubheadingLink">Friends</h4>

      <ul className="conversationsList">
      <ConversationPreview user={{
          username: "Ahmed Elsisi",
          grade: 8
        }}/>
        <ConversationPreview user={{
          username: "Omar Sherif",
          grade: 8
        }}/>
        <ConversationPreview user={{
          username: "Ahmed Hossam",
          grade: 8
        }}/>
         <ConversationPreview user={{
          username: "Mohanad Mohamed",
          grade: 8
        }}/>
         <ConversationPreview user={{
          username: "Yassir El-Nemery",
          grade: 0
        }}/>
         <ConversationPreview user={{
          username: "Ahmed Hossam",
          grade: 0
        }}/>
      </ul>
      </div>

 
    </aside>
  );
}