"use client";

import { addItem } from '@/services/product.service';
import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const AddItemForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        console.log("Item:", data);
        try {
            const result = await addItem(data);
            Swal.fire({
                title: "Good job!",
                text: "You clicked the button!",
                icon: "success"
            });
        } catch (error) {
            console.log("Error posting data: ", error);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!", 
            });
        }

    };

    return (
        <>
            <div className='text-center mt-10 border-b pb-10 w-2/3 mx-auto border-shadeBlack'>
                <h3 className='tex-white font-sans text-xl font-bold uppercase mb-2'>Item Information</h3>
                <p className='tex-gray-300 font-sans text-green-500'>Please fill up the found product information</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="w-[800px] mx-auto p-4 bg-lightBlack shadow-md rounded">
                {/* Name */}
                <div className="mb-4">
                    <label className="block text-gray-300 font-semibold text-xl font-sans mb-4 mt-8 ">Found product name</label>
                    <input
                        type="text"
                        {...register('name', { required: 'Name is required' })}
                        className="w-full px-3 bg-lightBlack py-2 border border-shadeBlack rounded"
                    />
                    {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                </div>


                {/* Division */}
                <div className="mb-4">
                    <label className="block text-gray-300 font-semibold text-xl font-sans mb-4 mt-8">Division</label>
                    <select
                        {...register('division', { required: 'Division is required' })}
                        className="w-full px-3 bg-lightBlack py-2 border border-shadeBlack rounded"
                    >
                        <option value="Barisal">Barisal</option>
                        <option value="Chittagong">Chittagong</option>
                        <option value="Dhaka">Dhaka</option>
                        <option value="Khulna">Khulna</option>
                        <option value="Mymensingh">Mymensingh</option>
                        <option value="Rajshahi">Rajshahi</option>
                        <option value="Rangpur">Rangpur</option>
                        <option value="Sylhet">Sylhet</option>
                    </select>
                    {errors.division && <p className="text-red-500">{errors.division.message}</p>}
                </div>


                {/* City */}
                <div className="mb-4">
                    <label className="block text-gray-300 font-semibold text-xl font-sans mb-4 mt-8 ">City</label>
                    <input
                        type="text"
                        {...register('city', { required: 'City is required' })}
                        className="w-full px-3 bg-lightBlack py-2 border border-shadeBlack rounded"
                    />
                    {errors.city && <p className="text-red-500">{errors.city.message}</p>}
                </div>

                {/* Location */}
                <div className="mb-4">
                    <label className="block text-gray-300 font-semibold text-xl font-sans mb-4 mt-8 ">Location</label>
                    <input
                        type="text"
                        {...register('location')}
                        className="w-full px-3 bg-lightBlack py-2 border border-shadeBlack rounded"
                    />
                </div>


                <div className="mb-4">
                    <label className="block text-gray-300 font-semibold text-xl font-sans mb-4 mt-8">Time </label>
                    <input
                        type="date"
                        defaultValue={new Date().toISOString().split('T')[0]}
                        {...register('time', { required: 'Time is required' })}
                        className="w-full px-3 bg-lightBlack py-2 border border-shadeBlack rounded"
                    />
                    {errors.time && <p className="text-red-500">{errors.time.message}</p>}
                </div>


                {/* Image */}
                <div className="mb-4">
                    <label className="block text-gray-300 font-semibold text-xl font-sans mb-4 mt-8 ">Image URL</label>
                    <input
                        type="text"
                        {...register('image')}
                        className="w-full px-3 bg-lightBlack py-2 border border-shadeBlack rounded"
                    />
                </div>
                {/* product details */}
                <div className="mb-4">
                    <label htmlFor="details" className="text-gray-300 font-semibold text-xl font-sans mb-4 mt-8 ">
                        Details
                    </label>
                    <textarea
                        id="details"
                        {...register('details', { required: 'Details are required' })}
                        className="bg-lightBlack block mt-4 w-full p-2 border border-shadeBlack rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        rows="4"
                    ></textarea>
                    {errors.details && <p className="mt-1 text-sm text-red-600">{errors.details.message}</p>}
                </div>


                {/* Number */}
                <div className="mb-4">
                    <label className="block text-gray-300 font-semibold text-xl font-sans mb-4 mt-8 ">Number</label>
                    <input
                        type="number"
                        {...register('number', { required: 'Number is required' })}
                        className="w-full px-3 bg-lightBlack py-2 border border-shadeBlack rounded"
                    />
                    {errors.number && <p className="text-red-500">{errors.number.message}</p>}
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="btn btn-sm bg-slate-200 text-black text-xl mt-10 py-2 px-4 rounded hover:bg-blue-700"
                >
                    Submit
                </button>
            </form></>
    );
};

export default AddItemForm;
