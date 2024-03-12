import "./App.css";
import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackagingLIst from "./PackagingLIst";
import Stats from "./Stats";

export default function App() {
  const [itemList, setItemList] = useState([]);

  function handleAddItems(item) {
    setItemList((itemList) => [...itemList, item]);
  }
  function handleDeleteItem(id) {
    setItemList((itemList) => itemList.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItemList((itemList) =>
      itemList.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );

    if (confirmed) setItemList([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItems} />
      <PackagingLIst
        itemList={itemList}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={itemList} />
    </div>
  );
}
