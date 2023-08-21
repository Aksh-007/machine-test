import React, { useState } from "react";

const ItemList = () => {
  //  this state hook for input field value
  const [newItem, setNewItem] = useState("");
  // this hook is for all items list
  const [items, setItems] = useState([]);
  // this hook for editing list
  const [editingIndex, setEditingIndex] = useState(null);
  // this hook for edited items list
  const [editedItem, setEditedItem] = useState("");

  // Function to add Items
  const handleAddItem = () => {
    if (newItem.trim() !== "") {
      setItems([...items, newItem]);
      setNewItem("");
    }
  };

  //  Function to Edit Items
  const handleEditItem = (index) => {
    setEditedItem(items[index]);
    setEditingIndex(index);
  };

  // Function to save Items
  const handleSaveItem = (index) => {
    const updatedItems = [...items];
    updatedItems[index] = editedItem;
    setItems(updatedItems);
    setEditingIndex(null);
    setEditedItem("");
  };

  // Function to Delete Item
  const handleDeleteItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
    setEditingIndex(null);
    setEditedItem("");
  };

  return (
    <section
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
      }}
    >
      <div style={{ width: "50%" }}>
        <h2>Item List</h2>
        <div>
          <input
            type="text"
            placeholder="Enter item"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            style={{ width: "50%", height: "6vh" }}
          />
          <button
            onClick={handleAddItem}
            style={{ width: "52%", height: "6vh" }}
          >
            Add
          </button>
        </div>
        {items.length === 0 ? (
          <p>No Items in List. Please Enter Items.</p>
        ) : (
          <ul>
            {items.map((item, index) => (
              <li key={index}>
                {editingIndex === index ? (
                  <div>
                    <input
                      type="text"
                      value={editedItem}
                      onChange={(e) => setEditedItem(e.target.value)}
                    />
                    <button
                      style={{ width: "80px" }}
                      onClick={() => handleSaveItem(index)}
                    >
                      Save
                    </button>
                  </div>
                ) : (
                  <div style={{ display: "flex", gap: "20px" }}>
                    {item}
                    <button
                      style={{ width: "80px" }}
                      onClick={() => handleEditItem(index)}
                    >
                      Edit
                    </button>
                    <button
                      style={{ width: "80px" }}
                      onClick={() => handleDeleteItem(index)}
                    >
                      Delete
                    </button>
                  </div>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default ItemList;
