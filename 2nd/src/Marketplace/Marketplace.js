import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Marketplace.css";
import { AddClothes } from "../AddClothes/AddClothes";

const customerShopping1 = [
    { name: "OVO Zeus 2021", price: "$650", description: "Feeling fresh", stock: "232" },
    { name: "OVO Zeke 2020", price: "$1500", description: "You will get all the ladies", stock: "23" },
    { name: "OVO Medusa 2019", price: "$350", description: "Looking sick", stock: "144" },
];
export const Marketplace = ({storeOwner}) => {
    console.log();
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [stock, setStock] = useState("");
    const [filter, setfilter] = useState("")
    const MarketplaceFilter = Marketplace.filter(clothing => clothing.name.startsWith(filter));
    const navigate = useNavigate();
    const [Marketplace, setMarketplace] = useState(customerShopping1);
    const addClothes = (Clothes) =>
        setMarketplace([...Marketplace, Clothes])
    return (
        <div className="Marketplace">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Stock</th>
                    </tr>
                </thead>
                <tbody>
                    {MarketplaceFilter.map(({ name, price, description, stock }, index) => (
                        <tr key={index}>
                            <td>{name}</td>
                            <td>{price}</td>
                            <td>{description}</td>
                            <td>{stock}</td>
                        </tr>
                    ))}
                </tbody>    
            </table>
            <RoleWrapper rolesAllowed={["admin"]} currentRole={storeOwner}>
            <AddClothes name={name} setName={setName} price={price} setPrice={setPrice} description={description} setDescription={setDescription} stock={stock} setStock={setStock} addClothes={addClothes} />
            </RoleWrapper>
            <div className="Logout">

                <label>Filter:</label>
                <input
                    type="text"
                    value={filter}
                    onChange={(e) => setfilter(e.target.value)}
                >
                </input>
                <button onClick={() => navigate('/')}>
                    Logout
                </button>
            </div>
        </div>
    );
};
