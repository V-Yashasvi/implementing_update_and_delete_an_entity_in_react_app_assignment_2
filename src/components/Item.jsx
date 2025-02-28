/* eslint-disable react/prop-types */
const Item = ({ item, onDelete }) => {

    return(
        <>
            <h4 >{item.name} (Status:{item.status})</h4>
            <button onClick={()=>onDelete(item.id)}>Delete item</button>
        </>
    )
};

export default Item;
