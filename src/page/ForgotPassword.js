import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/login/forgot-password`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            if (response.ok) {
                toast.success('Password reset instructions sent to your email.');
                // Extract the reset token from the response if available
                const { token } = await response.json();
                // Redirect to the reset password page with the token included in the URL
                navigate(`/reset-password/${token}`);
            } else {
                toast.error('Failed to initiate password reset. Please try again later.');
            }
        } catch (error) {
            console.error('Error initiating password reset:', error);
            toast.error('An error occurred. Please try again later.');
        }
    };


    return (
        <div className="w-full max-w-sm bg-white m-auto flex flex-col p-4">
            <h1 className="text-center text-2xl font-bold mb-4">Forgot Password</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
                    value={email}
                    onChange={handleInputChange}
                    required
                />
                <button type="submit" className="w-full bg-red-400 hover:bg-red-500 cursor-pointer text-white text-xl font-medium text-center py-1 rounded-full mt-4">
                    Send Reset Instructions
                </button>
            </form>
            <p className="text-sm mt-4">
                Remember your password? <Link to="/login" className="text-red-500 underline">Login</Link>
            </p>
        </div>
    );
};

export default ForgotPassword;
