import {useState} from 'react';
import UserForm from './components/UI/UserForm';
import UserList from './components/UserList/UserList';
import Wrapper from './components/Helper/Wrapper';

const App = ()=>{
  
  const [userData,addUserData] = useState([]);
  let content = "";

  const addUserObjectHandler = (userName,age)=>{
    

    addUserData((prevUsers)=>{
      
      const updatedUsers = [...prevUsers];
      updatedUsers.unshift({age,userName,id:Math.random().toString()});
      return updatedUsers;

    })


  }


  content = userData.length>0 && <UserList items={userData}></UserList>
  
  return (

    <Wrapper>

      <UserForm onAddUser = {addUserObjectHandler}></UserForm>

        {content}

    </Wrapper>
    
  );
}

export default App;
