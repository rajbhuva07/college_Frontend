import React, { useState } from "react";
import { useSelector } from "react-redux";
// import CartProduct from "../component/cartProduct";
import emptyCartImage from "../assest/empty.gif"
import { toast } from "react-hot-toast";
// import {loadStripe} from '@stripe/stripe-js';
import { useNavigate } from "react-router-dom";
import CartProduct from "../component/CartProduct";
import { loadStripe } from '@stripe/stripe-js'
import BillingPage from "./Bill";

const Cart = () => {
  const [showUserForm, setShowUserForm] = useState(false);
  const [billingInfo, setBillingInfo] = useState(null);
  const productCartItem = useSelector((state) => state.products.cartItem);
  console.log(productCartItem);
  const user = useSelector(state => state.user)
  const navigate = useNavigate()

  const totalPrice = productCartItem.reduce(
    (acc, curr) => acc + parseInt(curr.total),
    0
  );
  const totalQty = productCartItem.reduce(
    (acc, curr) => acc + parseInt(curr.qty),
    0
  );


  // const handlePayment = async () => {
  //   console.log("payment btn");

  //   // Check if user is logged in
  //   if (user.email) {

  //     // Check if user has required details (name and address)
  //     if (user.name && user.address && user.address.line1 && user.address.city) {

  //       // Load Stripe
  //       const stripePromise = await loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

  //       // Make API call to create Checkout Session
  //       const res = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/create-checkout-session`, {
  //         method: "POST",
  //         headers: {
  //           "content-type": "application/json"
  //         },
  //         body: JSON.stringify(productCartItem)
  //       });

  //       // Check for successful response
  //       if (res.ok) {
  //         const data = await res.json();
  //         console.log(data);

  //         // Notify user and redirect to Checkout
  //         toast("Redirect to payment Gateway...!");
  //         stripePromise.redirectToCheckout({ sessionId: data });

  //       } else {
  //         // Handle error response, e.g., show an error message
  //         toast("Failed to create Checkout Session. Please try again later.");
  //       }

  //     } else {
  //       // User is missing required details, prompt for information or handle accordingly
  //       toast("User is missing required details. Please update your profile.");
  //     }

  //   } else {
  //     // User is not logged in, redirect to login
  //     toast("You have not logged in!");
  //     setTimeout(() => {
  //       navigate("/login");
  //     }, 1000);
  //   }
  // }

  // const handlePayment = async () => {
  //   console.log("payment btn");
  //   if (user.email) {

  //     const stripePromise = await loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY)
  //     const res = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/create-checkout-session`, {
  //       method: "POST",
  //       headers: {
  //         "content-type": "application/json"
  //       },
  //       body: JSON.stringify(productCartItem)
  //     })
  //     if (res.statusCode === 500) return;

  //     const data = await res.json()
  //     console.log(data)

  //     toast("Redirect to payment Gateway...!")
  //     stripePromise.redirectToCheckout({ sessionId: data })
  //   }
  //   else {
  //     toast("You have not Login!")
  //     setTimeout(() => {
  //       navigate("/login")
  //     }, 1000)
  //   }

  // }
  // const handleBillingInfoSubmit = async (billingInfo) => {
  //   try {
  //     // Perform any necessary validation or additional processing here

  //     // Assuming you want to set the billingInfo in the state or dispatch an action
  //     setBillingInfo(billingInfo);

  //     // Optionally, you can perform any additional actions after handling the billing information submission
  //     // For example, you might want to navigate back to the cart page
  //     navigate("/cart");
  //   } catch (error) {
  //     console.error("Error handling billing information submission:", error);
  //     // Handle the error as needed (e.g., display an error message)
  //   }
  // };
  // const handlePayment = async () => {
  //   if (user.email) {
  //     if (user.name && user.address && user.address.line1 && user.address.city) {
  //       const stripePromise = await loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);
  //       const res = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/create-checkout-session`, {
  //         method: 'POST',
  //         headers: {
  //           'content-type': 'application/json',
  //         },
  //         body: JSON.stringify(productCartItem),
  //       });

  //       if (res.ok) {
  //         const data = await res.json();
  //         console.log(data);
  //         toast('Redirect to payment Gateway...!');
  //         stripePromise.redirectToCheckout({ sessionId: data });
  //       } else {
  //         toast('Failed to create Checkout Session. Please try again later.');
  //       }
  //     }
  //     // No else block needed here, as the user will be prompted to fill in details in BillingPage
  //   } else {
  //     toast('You have not logged in!');
  //     setTimeout(() => {
  //       navigate('/login');
  //     }, 1000);
  //   }
  // };

  // const handleUserFormSubmit = async (updatedUserData) => {
  //   // Assuming you have logic to update user information
  //   setBillingInfo(updatedUserData);

  //   // Optionally, you can perform any additional actions after handling the billing information submission
  //   setShowUserForm(false); // Set showUserForm to false

  //   // Handle payment after billing information is successfully submitted
  //   handlePayment();
  // };



  const handlePayment = async () => {
    console.log("payment btn");
    if (user.email) {

      const stripePromise = await loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY)
      const res = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/create-checkout-session`, {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(productCartItem)
      })
      if (res.statusCode === 500) return;

      const data = await res.json()
      console.log(data)

      toast("Redirect to payment Gateway...!")
      stripePromise.redirectToCheckout({ sessionId: data.session })
    }
    else {
      toast("You have not Login!")
      setTimeout(() => {
        navigate("/login")
      }, 1000)
    }

  }


  return (
    <>

      <div className="p-2 md:p-4">
        <h2 className="text-lg md:text-2xl font-bold text-slate-600">
          Your Cart Items
        </h2>

        {productCartItem[0] ?
          <div className="my-4 flex gap-3">
            {/* display cart items  */}
            <div className="w-full max-w-3xl ">
              {productCartItem.map((el) => {
                return (
                  <CartProduct
                    key={el._id}
                    id={el._id}
                    name={el.name}
                    image={el.image} 
                    category={el.category}
                    qty={el.qty}
                    total={el.total}
                    price={el.price}
                  />
                );
              })}
            </div>

            {/* total cart item  */}
            <div className="w-full max-w-md  ml-auto">
              <h2 className="bg-blue-500 text-white p-2 text-lg">Summary</h2>
              <div className="flex w-full py-2 text-lg border-b">
                <p>Total Qty :</p>
                <p className="ml-auto w-32 font-bold">{totalQty}</p>
              </div>
              <div className="flex w-full py-2 text-lg border-b">
                <p>Total Price</p>
                <p className="ml-auto w-32 font-bold">
                  <span className="text-red-500">₹</span> {totalPrice}
                </p>
              </div>
              <button className="bg-red-500 w-full text-lg font-bold py-2 text-white" onClick={handlePayment}>
                Payment
              </button>
            </div>
          </div>

          :
          <>
            <div className="flex w-full justify-center items-center flex-col">
              <img src={emptyCartImage} className="w-full max-w-sm" />
              <p className="text-slate-500 text-3xl font-bold">Empty Cart</p>
            </div>
          </>
        }

      </div>

    </>
  );
};

export default Cart;
