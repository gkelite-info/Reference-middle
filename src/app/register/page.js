'use client';

import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Register() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        username: '',
        email: '',
        phone: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (
            !formData.firstname ||
            !formData.lastname ||
            !formData.username ||
            !formData.email ||
            !formData.phone || !formData.phone.length > 10
        ) {
            alert('Please fill in all fields');
            return;
        }

        console.log("Registration Data:", formData);
        router.push('/about');
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
            <div className="card shadow" style={{ maxWidth: '900px', borderRadius: '12px' }}>
                <div className="row g-0">
                    {/* Left Side */}
                    <div className="col-md-5 bg-primary text-white d-flex flex-column justify-content-center align-items-center p-4 rounded-start">
                        <h2 className="mb-3">Join Us 🎉</h2>
                        <p className="text-center">
                            Create your account to explore our awesome platform.
                        </p>
                    </div>

                    {/* Right Side (Form) */}
                    <div className="col-md-7 p-4">
                        <h3 className="text-center mb-4">Register</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="firstname" className="form-label">First Name</label>
                                    <input
                                        type="text"
                                        id="firstname"
                                        name="firstname"
                                        className="form-control"
                                        value={formData.firstname}
                                        onChange={handleChange}
                                        placeholder="Enter first name"
                                        required
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="lastname" className="form-label">Last Name</label>
                                    <input
                                        type="text"
                                        id="lastname"
                                        name="lastname"
                                        className="form-control"
                                        value={formData.lastname}
                                        onChange={handleChange}
                                        placeholder="Enter last name"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="username" className="form-label">Username</label>
                                <input
                                    type="text"
                                    id="username"
                                    name="username"
                                    className="form-control"
                                    value={formData.username}
                                    onChange={handleChange}
                                    placeholder="Choose a username"
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="form-control"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Enter email"
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="phone" className="form-label">Phone</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    className="form-control"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Enter phone number"
                                    required
                                />
                            </div>

                            <button type="submit" className="btn btn-success w-100 mb-3">
                                Register
                            </button>

                            <button
                                type="button"
                                className="btn btn-outline-primary w-100"
                                onClick={() => router.push('/login')}
                            >
                                Already have an account? Login
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
