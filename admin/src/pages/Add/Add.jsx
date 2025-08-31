import React, { useState } from 'react';
import './Add.css';
import { assets, url } from '../../assets/assets';
import axios from 'axios';
import { toast } from 'react-toastify';

const Add = () => {
    const [data, setData] = useState({
        name: "",
        description: "",
        price: "",
        category: "Earth Moving",
        imageUrl: ""
    });

    const isValidUrl = (url) => {
        try {
            new URL(url);
            return true;
        } catch (_) {
            return false;
        }
    };

    const onSubmitHandler = async (event) => {
        event.preventDefault();

        const { name, description, price, category, imageUrl } = data;

        if (!name || !description || !price || !category || !imageUrl) {
            toast.error('All fields are required');
            return;
        }

        if (isNaN(price) || price <= 0) {
            toast.error('Invalid price');
            return;
        }

        if (!isValidUrl(imageUrl)) {
            toast.error('Invalid image URL');
            return;
        }

        const payload = {
            name,
            description,
            price: Number(price),
            category,
            imageUrl,
        };

        try {
            const response = await axios.post(`${url}/api/food/add`, payload);
            if (response.data.success) {
                toast.success(response.data.message);
                setData({
                    name: "",
                    description: "",
                    price: "",
                    category: data.category,
                    imageUrl: "",
                });
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.error('Error:', error);
            const errorMessage = error.response?.data?.message || 'Error adding product';
            toast.error(errorMessage);
        }
    };

    const onChangeHandler = (event) => {
        const { name, value } = event.target;

        if (name === 'price' && (value < 0 || isNaN(value))) {
            toast.error('Price must be a positive number');
            return;
        }

        if (name === 'imageUrl' && value && !isValidUrl(value)) {
            toast.error('Invalid URL');
            return;
        }

        setData((prevData) => ({ ...prevData, [name]: value }));
    };

    return (
        <div className='add'>
            <form className='flex-col' onSubmit={onSubmitHandler}>
                <div className='add-img-upload flex-col'>
                    <p>Image URL</p>
                    <input
                        name='imageUrl'
                        onChange={onChangeHandler}
                        value={data.imageUrl}
                        type="text"
                        placeholder='Enter image URL'
                        required
                    />
                    {data.imageUrl && (
                        <img src={data.imageUrl} alt="Preview" className='image-preview' />
                    )}
                </div>
                <div className='add-product-name flex-col'>
                    <p>Product name</p>
                    <input
                        name='name'
                        onChange={onChangeHandler}
                        value={data.name}
                        type="text"
                        placeholder='Type here'
                        required
                    />
                </div>
                <div className='add-product-description flex-col'>
                    <p>Product description</p>
                    <textarea
                        name='description'
                        onChange={onChangeHandler}
                        value={data.description}
                        rows={6}
                        placeholder='Write content here'
                        required
                    />
                </div>
                <div className='add-category-price'>
                    <div className='add-category flex-col'>
                        <p>Product category</p>
                        <select
                            name='category'
                            onChange={onChangeHandler}
                            value={data.category}
                        >
                            <option value="Earth Moving">Earth Moving</option>
                            <option value="Lifting">Lifting</option>
                            <option value="Compaction">Compaction</option>
                            <option value="Concrete">Concrete</option>
                            <option value="Asphalt & Haulage">Asphalt & Haulage</option>
                            <option value="Power">Power</option>
                                
                        </select>
                    </div>
                    <div className='add-price flex-col'>
                        <p>Product Price</p>
                        <input
                            type="number"
                            name='price'
                            onChange={onChangeHandler}
                            value={data.price}
                            placeholder='25'
                            required
                        />
                    </div>
                </div>
                <button type='submit' className='add-btn'>
                    ADD
                </button>
            </form>
        </div>
    );
};

export default Add;
