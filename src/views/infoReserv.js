import React from "react";
import { Link } from "react-router-dom";

//material-ui
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

//custom-hook
import useForm from "../hooks/form";
import { MenuItem } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    ...theme.spreadThis,
    title: {
        margin: "48px 0px 10px 0px",
    },

    button: {
        marginTop: '40px'
    }
}));

export default function Register() {
    const classes = useStyles();

    // const dispatch = useDispatch();
    // const history = useHistory();

    const signupHandle = (props) => {
        const newUserData = {
            email: inputs.email,
            firstName: inputs.firstName,
            lastName: inputs.lastName,
            // role: "ROLE_USER",
            // password: inputs.password,
            // confirmPassword: inputs.confirmPassword,
        };
        // dispatch(signupUser(newUserData, history));
        // here we send the data to the server
    };

    const { inputs, handleInputChange, handleSubmit } = useForm(
        {
            firstName: "",
            lastName: "",
            email: ""
        },
        signupHandle
    );

    // console.log(errors);
    let emailError = null;
    let passwordError = null;
    let confirmPasswordError = null;
    let firstNameEmptyError = null;
    let lastNameEmptyError = null;

    // if (errors) {
    //     if (typeof errors !== "string") {
    //         for (let i = 0; i < errors.length; i++) {
    //             if (errors[i].msg.includes("First Name"))
    //                 firstNameEmptyError = errors[i].msg;
    //             if (errors[i].msg.includes("Last Name"))
    //                 lastNameEmptyError = errors[i].msg;
    //             if (errors[i].msg.includes("valid email")) emailError = errors[i].msg;
    //             if (errors[i].msg.includes("Email address already"))
    //                 emailError = errors[i].msg;
    //             if (errors[i].msg.includes("least 6 characters long"))
    //                 passwordError = errors[i].msg;
    //             if (errors[i].msg.includes("Passwords have to"))
    //                 confirmPasswordError = errors[i].msg;
    //         }
    //     }
    // }


    const currencies = [
        {
            value: 'JPY',
            label: '8h',
        },
        {
            value: 'JPY',
            label: '9h',
        },
        {
            value: 'BTC',
            label: '10h',
        },
        {
            value: 'JPY',
            label: '11h',
        },
        {
            value: 'JPY',
            label: '12h',
        },
        {
            value: 'JPY',
            label: '13h',
        },
        {
            value: 'JPY',
            label: '14h',
        },
        {
            value: 'JPY',
            label: '15h',
        },
        {
            value: 'JPY',
            label: '16h',
        },
        {
            value: 'JPY',
            label: '17h',
        },
        {
            value: 'JPY',
            label: '18h',
        },
        {
            value: 'JPY',
            label: '19h',
        },
        {
            value: 'JPY',
            label: '20h',
        },
        {
            value: 'JPY',
            label: '21h',
        },
    ];



        const [currency, setCurrency] = React.useState('EUR');

        const handleChange = (event) => {
            setCurrency(event.target.value);
        };
        
    return (
        <Grid container className={classes.form}>
            <Grid item sm />
            <Grid item sm>
            
            <div style={{backgroundColor: 'white', borderRadius: '20px', paddingRight: 15, paddingLeft: 15, textAlign: 'center'}}>
                <Typography variant="h4" className={classes.title}>
                    Informations
                    <span role="img" aria-label="Pizza Emoji">
                            
                    </span>
            
                </Typography>
                
                <Typography variant="h6" style={{textAlign: 'center'}}>
                    🌳1 billet acheté = 1 arbre planté🌳
                </Typography>
            </div>
                <form noValidate onSubmit={handleSubmit}>
                    <TextField
                        id="firstName"
                        name="firstName"
                        label="Prénom"
                        variant='outlined'
                        style={{ backgroundColor: 'white', marginTop: '20px' }}
                        onChange={handleInputChange}
                        value={inputs.firstName}
                        className={classes.textField}
                        helperText={firstNameEmptyError}
                        error={firstNameEmptyError ? true : false}
                        fullWidth
                        required
                    />
                    <TextField
                        id="lastName"
                        name="lastName"
                        label="Nom"
                        variant='outlined'
                        style={{ backgroundColor: 'white', marginTop: '20px' }}
                        onChange={handleInputChange}
                        value={inputs.lastName}
                        className={classes.textField}
                        helperText={lastNameEmptyError}
                        error={lastNameEmptyError ? true : false}
                        fullWidth
                        required
                    />
                    <TextField
                        id="email"
                        name="email"
                        label="Email"
                        variant='outlined'
                        style={{backgroundColor:'white', marginTop:'20px'}}
                        onChange={handleInputChange}
                        value={inputs.email}
                        className={classes.textField}
                        fullWidth
                        helperText={emailError}
                        error={emailError ? true : false}
                        required
                    />

                    <TextField
                        id="standard-select-currency"
                        select
                        label="Optionnel"
                        variant='outlined'
                        style={{ backgroundColor: 'white', marginTop: '20px' }}
                        value={currency}
                        onChange={handleChange}
                        helperText="Sélectionnez l'heure d'arrivée de votre vol"
                        fullWidth
                    >
                        {currencies.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>


                <Link to='/Card'>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        // disabled={loading}
                    >
                        Je réserve mon billet
            {/* {loading && (
                            <CircularProgress size={30} className={classes.progress} />
                        )} */}
                    </Button>
                </Link>
                    <br />
                    {/* <small className={classes.small}>
                        Déjà un compte ? Login <Link to="/login">ici</Link>
                    </small> */}
                </form>
            </Grid>
            <Grid item sm />
        </Grid>
    );
}
