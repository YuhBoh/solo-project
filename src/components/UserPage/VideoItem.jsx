import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import '../Nav/Nav.css'; //Will make own css later
import './VideoItem.css';
import Playlist from './Playlist';
import { useHistory } from 'react-router-dom';


export default function VideoItem({video}) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <li>
      <a href={video.video_url}>
        {video.video_url}
      </a>
      <div>
        <button onClick={() => {setOpenModal(true);}}>
          ...
        </button>
      </div>

      {openModal && <Playlist closeModal={setOpenModal} 
                              video={video}/>}
    </li>
  )
}