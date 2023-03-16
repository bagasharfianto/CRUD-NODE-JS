import { BrowserRouter, Routes, Route } from "react-router-dom";
import Userlist from "./components/Userlist";
import { AddUser } from "./components/AddUser";
import { EditUser } from "./components/EditUser";

export default function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<Userlist />}/>
        <Route path="add" element={<AddUser />}/>
        <Route path="edit/:id" element={<EditUser />}/>
      </Routes>
    </BrowserRouter>
  );
}


