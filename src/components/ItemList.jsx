/* eslint-disable react/prop-types */
import Item from "./Item";

const ItemList = ({ items, onDelete }) => {
    return (
        <>
            {items.length===0? (<p>No items found</p>):(items.map((item) => (
                <Item key={item.id} item={item} onDelete={onDelete}/>
            )))}
        </>
    );
};

export default ItemList;
