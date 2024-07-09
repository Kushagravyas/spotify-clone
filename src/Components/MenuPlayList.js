import React from "react";
import { FaPlus } from "react-icons/fa";
import { BsMusicNoteList, BsTrash } from "react-icons/bs";
import { PlayList } from "./PlayList";

const MenuPlayList = () => {
  return ( <div className="playListContainer">
    <div className="nameContainer">
       <p>PlayList</p>
       <i>
         <FaPlus />
       </i>
    </div>
    <div className="playListScroll">

      {
        PlayList && PlayList.map((list) => (
          
          <div className="playList" key="{list.id}">

         <i className="List"> <BsMusicNoteList /></i>
        <p> {list.name} </p>

        <i className="Trash"><BsTrash /></i>
         </div>
        ))}

         
      </div>
    </div>
  )
}

export {MenuPlayList};