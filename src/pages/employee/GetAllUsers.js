import { useEffect, useState } from 'react';
import './GetAllUsers.css';
import { Col, Container, Row, Table } from 'react-bootstrap';

const GetAllUsers = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => { 
        const fetchUsers = async () => {
            try {
                const response = await fetch('http://localhost:8080/api/employees', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await response.json();
            setUsers(data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        }
        fetchUsers();
    }, []);

    const DeleteUser = async (id) => {
        try {
            const response = await fetch(`http://localhost:8080/api/employee/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (response.ok) {
                setUsers(users.filter(user => user.id !== id));
                console.log('User deleted successfully', JSON.stringify(users.map(user => user.name)));
            } else {
                console.error('Error deleting user:', response.statusText);
            }
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

return (
    <Container className="get-all-users">
        <Row>
            <Col>
            <h1 className='text-center'>All Users</h1>
                    <Table striped bordered hover responsive>
                            <thead>
                                    <tr>
                                            <th>ID</th>
                                            <th>Name</th>
                                            <th>Email</th>  
                                            <th>Phone</th>
                                            <th>Department</th>
                                            <th>Actions</th>
                                    </tr>
                            </thead>
                            <tbody>
                                    {users.map(user => (
                                            <tr key={user.id}>
                                                    <td>{user.id}</td>
                                                    <td>{user.name}</td>
                                                    <td>{user.email}</td>
                                                    <td>{user.phone}</td>
                                                    <td>{user.department}</td>
                                                    <td>
                                                         <button className="btn btn-primary me-2">Edit</button>
                                                        <button className="btn btn-danger" onClick={() => DeleteUser(user.id)}>Delete</button>
                                                    </td>
                                            </tr>
                                    ))}
                            </tbody>
                    </Table>
            </Col>
        </Row>
    </Container>
);
};

export default GetAllUsers;