import React, {ReactElement,  ReactNode, useState } from 'react';
import { Image } from 'react-bootstrap';
import albumCovers from './AlbumCovers';
//INTERFACES
import { AlbumDetail } from '../discography';
import ModalReusable from '../UI/ModalReusable';

type AlbumModal = {
    contentToBeRenderedInModal: ReactNode;
    album: AlbumDetail;
  };

const AlbumModal:React.FC<AlbumModal> = ({contentToBeRenderedInModal, album}): ReactElement => 
{
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (event: React.SyntheticEvent) => {
    event.preventDefault();
    setShow(true);
  };

  const modalTitle: string = `${album.title} (${album.dateRelease.getFullYear()})`;

  return (
    <div>
        <Image 
        src={albumCovers[album.imgCovername]}
        className="btn img-rounded center-block img-fluid" 
        onClick={handleShow} 
        alt={album.imgCovername}/>

        <ModalReusable show={show} handleClose={handleClose} modalTitle={modalTitle}>
            <div className="table-responsive">
                {contentToBeRenderedInModal}
            </div>
        </ModalReusable>
    </div>
  )
}

export default AlbumModal