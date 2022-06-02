import React, { ReactElement } from 'react';
import { Table } from 'react-bootstrap';
import { AlbumDetail } from '../discography';

const InfoTable: React.FC<{album: AlbumDetail}> = ({album}): ReactElement  => {

    let contentToBeRenderedInModal: JSX.Element = 
        <Table variant="dark table-striped table-sm" className='text-center'>
            <tbody>
                <tr key="modalAlbum">
                <th>{ album.type.charAt(0).toUpperCase() + album.type.slice(1)} Album by</th>
                    <td>{album.band}</td>
                </tr>
                {album.dateRelease.toString() !== "Invalid Date"  && <tr key="modalDateRelease">
                <th>Released on</th>
                    <td>{album.dateRelease.toLocaleString('en-US', {
                                                                        day: 'numeric', 
                                                                        year: 'numeric', 
                                                                        month: 'long',
                                                                    })}
                    </td>
                </tr>}
                {album.dateRecorded.toString() !== "Invalid Date" && <tr key="modalDateRecorded">
                <th>Recorded on</th>
                    <td>{album.dateRecorded.toLocaleString('en-US', {
                                                                        year: 'numeric', 
                                                                        month: 'long', 
                                                                    })}
                    </td>
                </tr>}
                {album.studio && <tr key="studio">
                <th>Studio</th>
                    <td>{album.studio}
                    </td>
                </tr>}
                
                <tr key="modalGenre">
                <th>Genre(s)</th>
                    <td className='text-center'>
                    <Table variant="dark table-sm" style={{marginBottom: '0'}}>
                        <tbody>
                        {album.genre.map((g,index) => 
                                                    <tr key={"genre"+index}>
                                                    <td style={{borderBottom: 'none', backgroundColor: 'rgba(210,130,240, 0.0)'}}>
                                                        <small>
                                                        {g.charAt(0).toUpperCase() + g.slice(1)}
                                                        </small> 
                                                    </td>
                                                    </tr>  
                        )}
                        </tbody>
                    </Table>
                    </td>
                </tr>
                <tr key="modalLength">
                <th>Total runtime</th>
                    <td>{album.length}</td>
                </tr>
                <tr key="modalLabel">
                <th>Label(s)</th>
                    <td>{album.label}</td>
                </tr>
                <tr key="modalProducer">
                <th>Produced by</th>
                    <td>{album.producer}</td>
                </tr>
            </tbody>
        </Table>;
  return contentToBeRenderedInModal;
}

export default InfoTable