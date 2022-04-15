import React, {useState} from 'react';

import Form from "../Layout/Form";
import Button from "../Layout/Button";



const AddUser = ({addNewUserHandler, closeModal}) => {
    const [input, setInput] = useState({
        name: '',
        age: '',
        address:'',
        phone: ''
    });
    
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [phone, setPhone] = useState('');
    const [type, setType] = useState('');
    const [address, setAddress] = useState('');
    

    // const (e) => setName(e.target.value) = (e) => {
    //     const key = e.target.id;
    //     const value = e.target.value;
    //     // setInput((prevState) => ({ ...prevState, [key]:value }));
    //     setInput((prevState) => {
    //         return { ...prevState, [key]:value }
    //     });
    // }

    // const (e) => setName(e.target.value) = (e) => {
    //     const key = e.target.id;
    //     const value = e.target.value;

    // }

    const onSubmitHandler = (e, setformState) => {
        e.preventDefault();
        
        addNewUserHandler({
            id: Math.round(Math.random() * 100),
            name,
            age,
            address,
            phone,
            type
        });

        setName('');
        setAge('');
        setPhone('');
        setType('');
        setAddress('');
    };


    
return (         
    <form onSubmit={onSubmitHandler}>
        <Form.Controller>
            <label htmlFor="name">Name</label>
            <input 
                type="text" 
                id="name" 
                placeholder="Enter name" 
                value = {name} 
                onChange= {(e) => setName(e.target.value)}
            />
        </Form.Controller>
        <Form.Controller>
            <label htmlFor="age">Age</label>
            <input 
                type="text" 
                id="age" 
                placeholder="Enter age" 
                value = {age} 
                onChange= {(e) => setAge(e.target.value)}
            />
        </Form.Controller>
        <Form.Controller>
            <label htmlFor="phone">Phone</label>
            <input 
                type="text" 
                id="phone" 
                placeholder="Enter phone" 
                value = {phone} 
                onChange= {(e) => setPhone(e.target.value)}
            />
        </Form.Controller>
        <Form.Controller>
            <label htmlFor="address">Address</label>
            <input 
                type="text" 
                id="address" 
                placeholder="Enter address" 
                value = {address} 
                onChange= {(e) => setAddress(e.target.value)}
            />
        </Form.Controller>
        <Form.Controller>
            <label htmlFor="type">Type</label>
            <input 
                type="text" 
                id="type" 
                placeholder="Enter type" 
                value = {type} 
                onChange= {(e) => setType(e.target.value)}
            />
        </Form.Controller>
        <div style= {{marginTop : '20px'}}>
            <Button type='submit'style= {{marginRight : '20px'}} onClick={closeModal}>Save</Button>
            <Button type='reset'>Reset</Button>
        </div>
    </form>
);
}
 
export default AddUser;