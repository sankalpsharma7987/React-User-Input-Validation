import React from 'react';
import Card from '../UI/Card';
import UserItem from '../UserItem/UserItem';

import  styles from './UserList.module.css';

const UserList = (props)=>{

    return (
        <React.Fragment>
            <Card>
                <ul  className = {styles["user-list"]}>
                {
                    props.items.map((item)=>{
                       return <UserItem key = {item.id} id={item.id} userName = {item.userName} age = {item.age}/>
                    })
                }
                </ul>
            </Card>
        </React.Fragment>
    )

}

export default UserList;