import React from "react";

const About = () => {
  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "50px 20px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "50px" }}>About Us</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: "20px",
        }}
      >
        <div style={{ flexBasis: "30%" }}>
          <h2>Our Products and Services</h2>
          <p>
            We offer a wide variety of fresh produce, pantry staples, and household
            items. Our online shopping option allows you to shop from the comfort
            of your own home and have your groceries delivered right to your
            door.
          </p>
        </div>
        <div style={{ flexBasis: "30%" }}>
          <h2>Our Team</h2>
          <p>
            Our team is made up of passionate individuals who are dedicated to
            providing you with the best possible shopping experience. Meet our team
            members:
          </p>
          <ul>
            <li>John Doe, Store Manager</li>
            <li>Jane Smith, Assistant Manager</li>
            <li>Mike Johnson, Produce Manager</li>
            <li>Sara Lee, Cashier</li>
          </ul>
        </div>
        <div style={{ flexBasis: "30%" }}>
          <h2>Contact Us</h2>
          <p>
            You can reach us by phone at (555) 123-4567 or by email at
            info@groceryshop.com. Our physical address is 123 Main St, Anytown,
            USA.
          </p>
        </div>
        <div style={{ flexBasis: "30%" }}>
          <h2>Follow Us</h2>
          <ul>
            <li>
              <a href="https://www.facebook.com/groceryshop">Facebook</a>
            </li>
            <li>
              <a href="https://twitter.com/groceryshop">Twitter</a>
            </li>
            <li>
              <a href="https://www.instagram.com/groceryshop">Instagram</a>
            </li>
          </ul>
        </div>
        <div style={{ flexBasis: "30%" }}>
          <h2>Testimonials</h2>
          <p>
            "I love shopping at this grocery shop! The produce is always fresh and
            the staff is so friendly." - Sarah L.
          </p>
        </div>
        <div style={{ flexBasis: "30%" }}>
          <h2>FAQ</h2>
          <p>
            <strong>Q:</strong> Do you offer online shopping?
            <br />
            <strong>A:</strong> Yes, we offer online shopping with delivery options.
          </p>
          <p>
            <strong>Q:</strong> Do you accept credit cards?
            <br />
            <strong>A:</strong> Yes, we accept all major credit cards.
          </p>
        </div>
        <div style={{ flexBasis: "30%" }}>
          <h2>Sign Up for Our Newsletter</h2>
          <p>
            Sign up for our newsletter to receive updates on new products, sales,
            and promotions.
          </p>
          <form>
            <input
              type="email"
              placeholder="Enter your email"
              style={{ width: "100%", marginBottom: "10px" }}
            />
            <button type="submit" style={{ width: "100%" }}>
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
export default About