import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
// import axios from "axios";
import axios from "../../Uri";
import { Container, Grid, InputLabel } from "@mui/material";
import moment from "moment";
import Gender from "layouts/profile/GuestLoginForm/components/Gender";

import { makeStyles } from "@mui/styles";
import MDTypography from "components/MDTypography";
import state from "layouts/profile/GuestLoginForm/components/State";

import Textfield from "layouts/profile/GuestLoginForm/components/TextField";
import Select from "layouts/profile/GuestLoginForm/components/Select";
// import Purpose from "./Purpose";
// import DateTimePicker from "../../../../layouts/profile/GuestLoginForm/components/DataTimePicker";
import Button from "layouts/profile/GuestLoginForm/components/Button";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Backdrop, CircularProgress } from "@mui/material";
// import "./GuestPaymentsinPopUp.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const useStyles = makeStyles({
    root: {
        height: 40,
    },
    size: {
        width: 40,
        height: 30,
    },
    gap: {
        paddingLeft: 20,
        height: 100,
    },
});

const FORM_VALIDATION = Yup.object().shape({
    email: Yup.string().email("Invalid email."),
    // dateOfBirth: Yup.date().test(
    //     "DOB",
    //     "Please choose a valid date of birth",
    //     (date) =>
    //         moment().diff(moment(date), "years") >= 12 &&
    //         moment().diff(moment(date), "years") <= 80
    // ),


});
const notify = () => toast();

const AddImageForm = (props) => {
const settingImages = props.setAllImages
    const [File, setFile] = React.useState(null);
    const uploadImageHandler = (event) => {
        console.log(event.target.files[0]);
        setFile(event.target.files[0]);

    }
    console.log(File)
    const onSubmit = () => {

    }

    const [disableButtons, setDisableButtons] = React.useState(false);
    const [INITIAL_FORM_STATE, setINITIAL_FORM_STATE] = React.useState({
            Name:"" ,
            type:"",
            description:"",
            image:""







    })

    // let userData = JSON.parse(sessionStorage.getItem("userdata"));
    // let userId = userData.data.userId
    // console.log(userId)

    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleToggle = () => {
        setOpen(!open);
    };


    // var GuestOccupancyType = props.guestdetails.occupancyType;
    // var buildingId = props.guestdetails.buildingId;
    // var GuestID = props.guestdetails.id;
    // var INITIAL_FORM_STATE = ;

    const classes = useStyles();
    // const editGuestHandler=props.editGuestHandler;

    return (
        // <div className="record-payment">
        <Grid container>
            {/* <Grid item xs={12}><MDTypography gutterBottom><h5 className='head-1-checkOut' >Clear Due amount</h5></MDTypography></Grid> */}
            <Grid item xs={12}>
                <Container maxWidth="md">
                    <div>
                        <Formik
                            initialValues={{ ...INITIAL_FORM_STATE }}
                            // validationSchema={FORM_VALIDATION}
                            onSubmit={async (guest, { resetForm }) => {
console.log(guest);
                                if (File !== null) {
                                    const formData = new FormData();
                                    formData.append("file", File);
                                    formData.append("fileName", File.name);
                                    const config = {
                                        headers: {
                                            "content-type": "multipart/form-data",
                                        },
                                    };
                                    axios.post("guest/uploadimage", formData, config)
                                        .then((res) => {
                                            toast.success("Image was uploaded")
                                            settingImages(res.data)
                                        })
                                        .catch((err) => toast.error("Network Error"))
                                }
                                else {
                                    toast.error("Please select an Image")
                                }
                                // handleToggle();






                            }}
                        >
                            {(formProps) => (
                                <Form>
                                    <Grid container spacing={2}>
                                        <Grid item xs={6}>
                                            <h5> Name</h5>
                                            <Textfield
                                                // inputProps={{ readOnly: true, }} 
                                                name="Name" />


                                        </Grid>
                                        <Grid item xs={6}>
                                            <h5>Type</h5>
                                            <Textfield name="type" />
                                        </Grid>

                                        <Grid item xs={6}>
                                            <h5>Description</h5>
                                            <Textfield name="description" />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <h5>Add</h5>
                                            <input
                                                type="file"
                                                name="image"
                                                onChange={uploadImageHandler}
                                            />

                                        </Grid>









                                        <Grid item xs={6} sx={{ marginTop: 2 }} >

                                            <Button style={{ align: "center" }} disabled={disableButtons} onClick={() => { setDisableButtons(true) }}>Submit</Button>

                                        </Grid>
                                    </Grid>

                                    <ToastContainer maxWidth="sx"
                                        position="top-right"
                                        autoClose={3000}
                                        type="toast.TYPE.SUCCESS"
                                        hideProgressBar={false}
                                        newestOnTop={false}
                                        closeOnClick
                                        rtl={false}
                                        pauseOnFocusLoss
                                        draggable
                                        pauseOnHover
                                    />
                                </Form>
                            )}
                        </Formik>
                    </div>
                    <Backdrop
                        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                        open={open}
                        onClick={handleClose}
                    >
                        <CircularProgress color="inherit" />
                    </Backdrop>
                </Container>
            </Grid>
        </Grid>

        // </div>
    );
};

export default AddImageForm;