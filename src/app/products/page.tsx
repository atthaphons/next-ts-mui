"use client"
import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

type Product = {
    id: number;
    name: string;
    description: string;
};

const fetchProducts = async (searchTerm: string = '', productName: string = '') => {
    const response = await fetch(`/api/products`);
    const data = await response.json();
    return data;
};


const fetchProductsByCriteria = async (searchTerm: string = '', productName: string = '') => {

    console.log(searchTerm)
    console.log(productName)

    const dataReq = {
        "productName": productName
    }

    const api_req_options = {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(dataReq),
    };


    const response = await fetch(`/api/products/search`, api_req_options);
    console.log(response)
    const data = await response.json();
    return data;
};

const fetchProductNames = async () => {
    const response = await fetch('/api/product-names');
    const data = await response.json();
    return data;
};

const Home = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [productName, setProductName] = useState('');
    const [productNames, setProductNames] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);

    const handleSearch = async () => {
        setLoading(true);
        try {
            const products = await fetchProducts(searchTerm, productName);
            setProducts(products);
        } catch (error) {
            console.error('Failed to fetch products:', error);
        }
        setLoading(false);
    };





    const handleSearchAction = async () => {
        setLoading(true);
        try {
            const products = await fetchProductsByCriteria(searchTerm, productName);
            setProducts(products);
        } catch (error) {
            console.error('Failed to fetch products:', error);
        }
        setLoading(false);
    };

    useEffect(() => {
        const getProductNames = async () => {
            try {
                const names = await fetchProductNames();
                setProductNames(names);
            } catch (error) {
                console.error('Failed to fetch product names:', error);
            }
        };
        getProductNames();
    }, []);

    useEffect(() => {
        handleSearch();
    }, []);

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'name', headerName: 'Name', width: 150 },
        { field: 'description', headerName: 'Description', width: 350 },
    ];

    return (
        <Layout title="Product List">
            <Box sx={{ mb: 4, display: 'flex', gap: 2 }}>
                <TextField
                    label="Search Products"
                    variant="outlined"
                    fullWidth
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <TextField
                    select
                    label="Select Product"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    fullWidth
                >
                    {productNames.map((name) => (
                        <MenuItem key={name} value={name}>
                            {name}
                        </MenuItem>
                    ))}
                </TextField>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSearchAction}
                    disabled={loading}
                >
                    {loading ? 'Searching...' : 'Search'}
                </Button>
            </Box>
            <Box sx={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={products}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    disableSelectionOnClick
                />
            </Box>
        </Layout>
    );
};

export default Home;