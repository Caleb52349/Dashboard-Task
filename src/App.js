import Home  from "./pages/Home";
import AddUser  from "./pages/AddUser";
import{BrowserRouter as Router,Routes,Route,Link} from "react-router-dom"
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import EditUser from "./pages/EditForm";




function App() {
  return (
    <div >
      <Router>
      <div>
        <h1>Dashboard</h1>
        <div className='user'>
        <Stack
  direction="row"
  justifyContent="space-between"
  alignItems="baseline"
  spacing={0}
>
            <h4>UserList</h4>
            <Link to={"/addUser"}>
            <Button variant="contained"  >Add New</Button>
            </Link>
            
            </Stack>
            </div>
    </div>
        <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/addUser" element={<AddUser/>}/>
        <Route exact path="/editUser/:id" element={<EditUser/>}/>
        </Routes>
    
      </Router>
        
      
    </div>
  );
}

export default App;
