import { Dialog, withStyles, Box, Typography, makeStyles,List, ListItem} from "@material-ui/core";
const useStyles =makeStyles({
    component: {
        display:'flex'
    },
    leftcomponent:{
        padding: '56px 0 56px 56px'
    },
    qrCode:{
        height:264,
        width:264,
        padding: '50px 0 0 50px'
    }

})
const style ={
    dialogPaper:{
        height: '95%',
        width: '60%',
        marginTop:'12%',
        boxShadow: 'none',
        borderRadius :0 ,
        maxHeight:'100%',
        maxWidth:'100%',

}
}

const Login = ({classes}) => {
    const classname = useStyles();
    const qrurl ='https://www.ginifab.com/feeds/qr_code/img/qrcode.jpg';
    return (
        <Dialog open={true}
            classes={{ paper: classes.dialogPaper}}
             BackdropProps={{style:{backgroundColor:'unset'}}}>
            <Box className={classname.component}>
                <Box className={classname.leftcomponent}>
                    <Typography>To use wp on ur pc</Typography>
                    <List>
                        <ListItem>1. open wp on ur phone</ListItem>
                        <ListItem>2. tap menu</ListItem>
                        <ListItem>3. point phone on screen</ListItem>
                    </List>

                </Box>
                <Box>
                    <img src={qrurl} alt='qr'  className="classname.qrCode"/>
                </Box>
            </Box>
        
            
        </Dialog>
    )
}
export default withStyles(style)(Login);