import  React,{useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, loadUsers } from '../action/action';
import { useNavigate } from 'react-router-dom';






const Home = () => {
let dispatch = useDispatch();
const {users} =useSelector(state => state.data)
useEffect(()=>{
  dispatch(loadUsers());
},[]);
//nativage to push to various pages
let navigate = useNavigate();
const handleDelete = (id)=>{
    dispatch(deleteUser(id));
    dispatch(loadUsers());
    setOpen(false);
  }
  


//state to open and close dialogue
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  

  return (
    //basic table derived from material ui
<TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Username</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">City</TableCell>
            <TableCell align="center">Edit</TableCell>
            <TableCell align="center">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users && users.map((user) => (
            <TableRow
              key={user.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {user.id}
              </TableCell>
              <TableCell align="center">{user.name}</TableCell>
              <TableCell align="center">{user.username}</TableCell>
              <TableCell align="center">{user.email}</TableCell>
              <TableCell align="center">{user.city}</TableCell>
              <TableCell align="center"><Button onClick={()=> navigate(`/editUser/${user.id}`)} style={{
        backgroundColor: "#F9CD83",
    }}variant="contained">Edit</Button></TableCell>
              <TableCell align="center"><Button style={{
        backgroundColor: "#D2393C",
    }} onClick={handleClickOpen} variant="contained">delete</Button></TableCell>
    <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {/*Dialogue pop up from material ui */}
        <DialogTitle id="alert-dialog-title">
          {"Warning"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you Sure you want to delete data?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>No</Button>
          <Button onClick={()=> handleDelete(user.id)}>Yes</Button>
        </DialogActions>
      </Dialog>
            </TableRow>
          ))}
        </TableBody> 
      </Table>
      
    </TableContainer>     
  )
}

export default Home
