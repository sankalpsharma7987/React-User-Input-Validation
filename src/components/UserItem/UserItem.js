import styles from './UserItem.module.css';

const UserItem = (props)=>{

    return (
        <li className = {styles["user-item"]} id = {props.id}>
            {`${props.userName} (${props.age} years old)`}
        </li>
    )

}


export default UserItem;