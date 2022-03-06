import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Marketplace.css";

const customerShopping1 = [
    { name: "OVO Zeus 2021", price: "$20", description: "Feeling fresh", stock: "232" },
    { name: "OVO Zeke 2020", price: "$30", description: "You will get all the ladies", stock: "23" },
    { name: "OVO Medusa 2019", price: "$40", description: "Looking sick", stock: "144" },
];
const customerShopping2 = [
    { name: "Gucci Killua", price: "$22", description: "Be the coolest man on earth", stock: "52" },
    { name: "Gucci Gon", price: "$30", description: "You'll look differently good", stock: "45" },
    { name: "Gucci Hisoka", price: "$40", description: "Now your just built different", stock: "532" },
];
export const Marketplace = () => {
    console.log('Clothing list generated');
    const [isTheStore, setTheStore] = useState(false);
    const navigate = useNavigate();
    const Marketplace = isTheStore ? customerShopping1 : customerShopping2;
    return (
        <div className="Marketplace">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Stock</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {Marketplace.map(({ name, price, description, stock}, index) => (
                        <tr key={index}>
                            <td>{name}</td>
                            <td>{price}</td>
                            <td>{description}</td>
                            <td>{stock}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="Enter">
                <h2>Add a new clothing</h2>
                <form className= "Message">
                    <input type="text"
                        name="name"
                        required="required"
                        placeholder="enter a clothing name"
                    />
                    <input type="text"
                        name="price"
                        required="required"
                        placeholder="enter a price"
                    />
                    <input type="text"
                        name="description"
                        required="required"
                        placeholder="enter a description"
                    />
                    <input type="text"
                        name="stock"
                        required="required"
                        placeholder="enter a stocks"
                    />
                    <button className="Add" type="submit">Add</button>
                </form>
                <div className="Nextpage">
                 <button className="Edit" type="submit">Edit</button>
                    <button onClick={() => setTheStore((prevState) => !prevState)}>
                        Next Page
                    </button>
                    <div className="Logout">
                        <button onClick={() => navigate('/')}>
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
};
