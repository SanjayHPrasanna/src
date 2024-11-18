import React, { useState } from 'react';
import axios from 'axios'; // Import Axios
import { Link } from 'react-router-dom';

const Signup = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '' // Add confirmPassword field
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/signup', formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
                        console.log(response.data);
            alert(response.data.message);
        } catch (error) {
            console.error('Error during signup:', error);
            alert(error.response?.data?.message || 'Something went wrong!');
        }
    };

    return (
        <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
            <h2>Signup</h2>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '15px' }}>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        style={{ width: '100%', padding: '8px', marginTop: '5px' }}
                    />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        style={{ width: '100%', padding: '8px', marginTop: '5px' }}
                    />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label>Confirm Password:</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                        style={{ width: '100%', padding: '8px', marginTop: '5px' }}
                    />
                </div>
                <button type="submit" style={{ width: '100%', padding: '10px', background: '#007BFF', color: 'white', border: 'none', borderRadius: '4px' }}>
                    Signup
                </button>
            </form>
            <p style={{ marginTop: '15px', textAlign: 'center' }}>
                Already have an account? <Link to="/" style={{ color: '#007BFF' }}>Login here</Link>
            </p>
        </div>
    );
};

export default Signup;