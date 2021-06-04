import './UserItem.css';

const UserItem = (props)=>{

    return (
        <li className = "user-item" id = {props.id}>
            {`${props.userName} (${props.age} years old)`}
        </li>
    )

}


export default UserItem;