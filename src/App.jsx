import { useEffect } from "react";
import ItemList from "./components/ItemList";
import { useState } from "react";

const API_URI = `http://${import.meta.env.VITE_API_URI}/doors`;

function App() {
  const [items, setItems] = useState([]);

  useEffect(()=>{
    fetch(API_URI).then((res)=>res.json()).then((data)=>{
      setItems(data)
      console.log(items)
    }).catch((err)=>{
      console.log(err)
    })
  },[])

  const handleDelete=(id)=>{
    fetch(`${API_URI}/${id}`, {method:"DELETE"}).then((res)=>res.json()).then((data)=>{
      setItems(items.filter((item)=>item.id!==data.id))
      alert("Deleted item sucessfully")
    }).catch((err)=>{
      console.log(err)
      alert("Failed to delete")
    })
  }

  return <ItemList items={items} onDelete={handleDelete}/>;
}

export default App;
