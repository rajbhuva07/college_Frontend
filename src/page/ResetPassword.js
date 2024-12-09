import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const ResetPassword = () => {
    const { token } = useParams(); // Get the reset token from the URL params
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        // Log the token value to check if it's correctly retrieved
        console.log('Reset token:', token);
    }, [token]);

    const handleNewPasswordChange = (e) => {
        setNewPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (newPassword !== confirmPassword) {
            toast.error('Passwords do not match');
            return;
        }

        try {
            const response = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/reset-password/${encodeURIComponent(token)}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ newPassword }),
            });

            if (response.ok) {
                toast.success('Password reset successfully');
                navigate('/login'); // Redirect to login page after successful password reset
            } else {
                toast.error('Failed to reset password. Please try again later.');
            }
        } catch (error) {
            console.error('Error resetting password:', error);
            toast.error('An error occurred. Please try again later.');
        }
    };


    return (
        <div className="w-full max-w-sm bg-white m-auto flex flex-col p-4">
            <h1 className="text-center text-2xl font-bold mb-4">Reset Password</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="newPassword">New Password:</label>
                <input
                    type="password"
                    id="newPassword"
                    name="newPassword"
                    className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
                    value={newPassword}
                    onChange={handleNewPasswordChange}
                    required
                />
                <label htmlFor="confirmPassword">Confirm Password:</label>
                <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                    required
                />
                <button type="submit" className="w-full bg-red-400 hover:bg-red-500 cursor-pointer text-white text-xl font-medium text-center py-1 rounded-full mt-4">
                    Reset Password
                </button>
            </form>
            <p className="text-sm mt-4">
                Remember your password? <Link to="/login" className="text-red-500 underline">Sign In</Link>
            </p>
        </div>
    );
};

export default ResetPassword;
