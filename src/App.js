import "./index.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Login from "./routes/Login";
import Posts from "./routes/Posts";
import { Route, Routes } from "react-router-dom";
import ContentPage from "./pages/ContentPage/ContentPage";
import ContentView from "./components/ContentView/ContentView";
import Admin from "./routes/Admin";
import AdminCategory from "./routes/AdminCategory";
import Staff from "./routes/Staff";
import StaffCategory from "./routes/StaffCategory";
import AdminUsers from "./routes/AdminUsers";
import AdminDashboard from "./components/AdminDashboard";
// import AdminContent from "./routes/AdminContent";

function App() {

  // const [currentUser, setcurrentUser] = useState('');

  // useEffect(()=>{
  //   fetch('https://snudgeapi.onrender.com/login')
  //   .then(res => {
  //     if(res.ok){
  //       res.json().then(user => setcurrentUser)
  //     }
  //   })
  // },[])

  // if(!currentUser) return <Login setcurrentUser={setcurrentUser} />
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/content" element={<ContentPage />} />
        <Route path="/content/:id" element={ <ContentView /> } />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/category" element={<AdminCategory />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/staff/category" element={<StaffCategory />} />
        <Route path="/admin/users" element={<AdminUsers />} />
        <Route path="/dashboard" element={<AdminDashboard />} />
        {/* <Route path="/admin/content" element={<AdminContent />} /> */}
      </Routes>
    </>
  );
}

export default App;
