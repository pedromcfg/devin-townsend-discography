import { ReactElement } from 'react';
//INTERFACES
import { AlbumDetail } from '../discography';
//OBJECTS
import AlbumModal from './AlbumModal';
import InfoTable from './InfoTable';
import TrackList from './TrackList';


const Album: React.FC<{album: AlbumDetail}> = ({album}): ReactElement => 
{
  let contentToBeRenderedInModal: JSX.Element = <InfoTable album= {album}/>

  return (
    <div className='col-md-3'>

      <AlbumModal contentToBeRenderedInModal={contentToBeRenderedInModal} album={album}/>

      <div className="text-center">
        <h6>{album.title}<small> ({album.dateRelease.getFullYear()})</small></h6>
      </div>   

      <TrackList tracks={album.tracks}/>

    </div>
  )
}

export default Album