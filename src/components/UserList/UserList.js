import Card from '../UI/Card';
import UserItem from '../UserItem/UserItem';
import Wrapper from '../Helper/Wrapper';

import  './UserList.css';

const UserList = (props)=>{

    return (
        <Wrapper>
            <Card>
                <ul  className = "user-list">
                {
                    props.items.map((item)=>{
                       return <UserItem key = {item.id} id={item.id} userName = {item.userName} age = {item.age}/>
                    })
                }
                </ul>
            </Card>
        </Wrapper>
    )

}

export default UserList;