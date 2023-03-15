import Userlist from "./components/Userlist";

function MyButton() {
  return (
    <button>
      I'm a button
    </button>
  );
}

export default function App() {
  return (
    <div >
      <Userlist />
      <MyButton/>
    </div>
  );
}


