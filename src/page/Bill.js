import { useState } from "react";
import { useNavigate } from "react-router-dom";

const BillingPage = ({ onSubmit }) => {
    const [billingInfo, setBillingInfo] = useState({
        name: "",
        address: "",
        city: "",
        postal_code: "",
    });
    
    const navigate = useNavigate()

    const handleBillingInfoSubmit = () => {
        // Validate and submit billing information
        if (billingInfo.name && billingInfo.address && billingInfo.city && billingInfo.postal_code) {
            onSubmit(billingInfo); // Pass billing information back to the parent component
            navigate("/cart"); // Redirect back to the cart page or the payment initiation
        } else {
            // Handle the case where billing information is incomplete
            alert("Billing information is incomplete. Please fill in all details.");
        }
    };

    return (
        <div className="billing-form">
            <label>
                Name:
                <input
                    type="text"
                    value={billingInfo.name}
                    onChange={(e) => setBillingInfo({ ...billingInfo, name: e.target.value })}
                />
            </label>
            <label>
                Address:
                <input
                    type="text"
                    value={billingInfo.address}
                    onChange={(e) => setBillingInfo({ ...billingInfo, address: e.target.value })}
                />
            </label>
            <label>
                City:
                <input
                    type="text"
                    value={billingInfo.city}
                    onChange={(e) => setBillingInfo({ ...billingInfo, city: e.target.value })}
                />
            </label>
            <label>
                Postal Code:
                <input
                    type="text"
                    value={billingInfo.postal_code}
                    onChange={(e) => setBillingInfo({ ...billingInfo, postal_code: e.target.value })}
                />
            </label>
            <button onClick={handleBillingInfoSubmit}>Submit</button>
        </div>
    );
};


export default BillingPage;
