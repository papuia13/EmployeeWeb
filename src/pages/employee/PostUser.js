import { useState } from "react"
import './PostUser.css';
import Form from "react-bootstrap/Form"
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const PostUser = () => {
        const [formData, setUser] = useState(
            {
                name: '',
                email: '',
                phone: '',
                department: ''
            }
        );

        const navigate = useNavigate();

        const handleInputChange = (event) => {
            const { name, value } = event.target;
            setUser({ ...formData, [name]: value });
        }

        const handleSubmit = async(e) =>{
            e.preventDefault();
            console.log(formData);
            try {
                 const response = await fetch('http://localhost:8080/api/employee', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();
                console.log('Success:', data);
                navigate('/'); // Redirect to the dashboard after successful submission


            }catch (error) {
                    console.error('Error:', error);
            }
        }
        return (
        <div className="center-form">
            <h1>Employee</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlID="formBasicName">
                        <Form.Control
                            type="text"
                            name="name"
                            placeholder="Enter name"
                            value={formData.name}
                            onChange={handleInputChange}
                        />
                    </Form.Group>

                    <Form.Group controlID="formBasicName">
                        <Form.Control
                            type="email"
                            name="email"
                            placeholder="Enter email"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                    </Form.Group>

                    <Form.Group controlID="formBasicName">
                        <Form.Control
                            type="text"
                            name="phone"
                            placeholder="Enter phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                        />
                    </Form.Group>

                    <Form.Group controlID="formBasicName">
                        <Form.Control
                            type="text"
                            name="department"
                            placeholder="Enter department"
                            value={formData.department}
                            onChange={handleInputChange}
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit" className="w-100">
                        Post Employee
                    </Button>
                </Form>
            </div>
        )
}

export default PostUser;