// Products.tsx
import { useEffect, useState } from "react";
import { List, ListItem, ListItemText } from "@mui/material";
import { apiFetch } from "./api";
import './Products.css'

interface Product {
    product_id: string;
    name: string;
    price: number;
    description: string;
}

export default function Products() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);

    useEffect(() => {
        setLoading(true);
        apiFetch("/api/productss")
            .then((products) => {
                setLoading(false);
                setProducts(products);
            })
            .catch((error: { message: string }) => {
                setLoading(false);
                setError(true);
                alert(`Failed to fetch products: ${error.message}`)
            }
            );
    }, []);

    return (
        <div>
            <h3>Products</h3>
            {/* we use a chain of ternary operators to conditionally return JSX */}
            {loading ?
             <div id="loading"> Loading ... </div>
             : error
             ? <div>Error loading data</div>
             :
             <List sx={{ listStyle: "decimal", pl: 4 }}>
                {products.map((product) => (
                    <ListItem key={product.product_id}>
                        <ListItemText
                            primary={product.name}
                            secondary={`Price: $${product.price}`}
                        />
                        <div>
                            {product.description}
                        </div>
                    </ListItem>
                ))}
            </List>}
        </div>
    );
}
