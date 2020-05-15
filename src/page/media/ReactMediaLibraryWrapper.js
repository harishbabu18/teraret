import React, {useEffect, useState} from 'react';
import {FileLibraryListItem, ReactMediaLibrary, FileMeta} from 'react-media-library';
import { Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles( theme => ({
    modal:{
        top: 500

    }


}));


function ReactMediaLibraryWrapper () {
    const classes = useStyles();

    const [display, setDisplay] = useState(false);
    const [fileLibraryList, setFileLibraryList] = useState([]);
        
    useEffect(() => {
        // TODO Get file list from database
        setFileLibraryList([
            {
                "_id": 1,
                "title": "Me and my dog",
                "size": 294880,
                "fileName": "img_3549.jpg",
                "type": "image/jpeg",
                "createdAt": new Date("2019-10-17T03:12:29.866Z"),
                "thumbnailUrl": "https://mycustomcdn.com/mg_3549.jpg"
            },
            {
                "_id": 2,
                "title": "2019 Summer Vacation",
                "size": 864483,
                "fileName": "201702.jpg",
                "type": "image/jpeg",
                "createdAt": new Date("2019-10-17T03:12:45.018Z"),
                "thumbnailUrl": "https://mycustomcdn.com/201702.jpg"
            },
            {
                "_id": 3,
                "title": "Our new baby",
                "size": 586458,
                "fileName": "271092.jpg",
                "type": "image/jpeg",
                "createdAt": new Date("2019-10-17T03:19:33.498Z"),
                "thumbnailUrl": "https://mycustomcdn.com/271092.jpg"
            },
            {
                "_id": 4,
                "title": "My new car",
                "size": 894665,
                "fileName": "photo-107.jpg",
                "type": "image/jpeg",
                "createdAt": new Date("2019-10-17T03:28:39.723Z"),
                "thumbnailUrl": "https://mycustomcdn.com/photo-107.jpg"
            }
        ]);

    }, []);

    async  function fileUpload(){

    }
    async  function getNewFileList(){

    }

      function clientSelectCallback(){

    }

    async  function fileDelete(){

    }



    async function uploadCallback(fileBase64: string, fileMeta: FileMeta): Promise<boolean> {
        // TODO Upload file to backend APIs
        const result = await fileUpload(fileBase64, fileMeta);

        if (result.success) {
            // New file uploaded
            // TODO Reacquire new file list from database
            const newFileList = await getNewFileList();
            setFileLibraryList(newFileList);

            // Return true to display upload success in modal
            return true;
        } else {
            // Return false to display upload failed in modal
            return false;
        }
    }

    function selectCallback(item: FileLibraryListItem) {
        // Hide modal
        setDisplay(false);

        // TODO Pass selected file back to client component callback function
        clientSelectCallback(item);
    }

    async function deleteCallback(item: FileLibraryListItem) {
        // TODO Delete file from backend service
        const result = await fileDelete(item);
        
        if (result.success) {
            // Deleted file 
            // TODO Reacquire file list from database
            const newFileList = await getNewFileList();
            setFileLibraryList(newFileList);
        }
    }

    return (
        <React.Fragment>
            <Button onClick={() => setDisplay(true)}>Open React Media Library</Button>
            <ReactMediaLibrary
                show={display}
                onHide={() => setDisplay(false)}
                fileUploadCallback={uploadCallback}
                fileLibraryList={fileLibraryList}
                fileSelectCallback={selectCallback}
                fileDeleteCallback={deleteCallback}
            />
        </React.Fragment>
    );
};

export default ReactMediaLibraryWrapper;