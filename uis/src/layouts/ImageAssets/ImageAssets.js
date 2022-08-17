import React, { useEffect, useState } from 'react'
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import MDButton from 'components/MDButton';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import AddImagePopUp from './AddImagePopUp';
import axios from '../../Uri';


function ImageAssets() {

    const [allImages, setAllImages] = useState([])
    useEffect(async () => {
        await axios.get("guest/getAllImages")
            .then((res) => setAllImages(res.data))
    }, [])
    console.log(allImages)
    const [showAddImagePopUp, setShowAddImagePopUp] = React.useState(false)
    const showimagePopUp = () => {
        setShowAddImagePopUp(true)
    }
    const closeAddImagePopUpHandler = () => {
        setShowAddImagePopUp(false)
    }
    return (
        <div>
            <AddImagePopUp
                open={showAddImagePopUp}
                closeAddImagePopUpHandler={closeAddImagePopUpHandler}
                setAllImages={setAllImages}
            />
            {/* <Card sx={{minHeight:500 , minHeight:500}}> */}
            <Grid container spacing={2} rowSpacing={1} >
                <Grid item xs={12} style={{ paddingRight: "20px", paddingTop: "20px" }}>
                    <MDButton
                        width="20%"
                        variant="contained"
                        color="info"
                        size="small"
                        justify="center"
                        style={{ borderRadius: 10, float: "right", }}
                        onClick={showimagePopUp}
                    >
                        Add Photo <AddAPhotoIcon />
                    </MDButton>
                </Grid>
                {/* <Grid item xs={12}> */}
                    {allImages == [] ? (<></>):(allImages.map((item) => {
                        console.log("hellllllooo")
                    return(<Grid item xs={4} >
                        <img
                        src={`data:image/jpeg;base64,${item.data}`}
                            // src={item.data}
                            class="imagen"
                            alt="Medicina"
                            style={{ paddingTop: "10px", paddingLeft: "10px" ,maxHeight:200 , maxWidth:200}}
                        />
                        
                    </Grid>)}))
                        }
                   




            </Grid>

            {/* </Card> */}

        </div>
    )
}

export default ImageAssets