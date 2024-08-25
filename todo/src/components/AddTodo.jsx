import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function AddTodo() {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        image: null,
    });
    // console.log(formData)
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        setFormData((prev) => ({ ...prev, image: e.target.files[0] }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        await axios
            .post("http://localhost:8880/api/todo", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className="flex items-center justify-center h-[100vh] bg-[#f3f3f3]">
            <div className="max-w-[343px] md:max-w-[550px] w-full flex flex-col gap-5 bg-white px-4 md:px-8 py-6 md:py-8 rounded-md shadow-sm shadow-slate-300">
                <h1 className="text-center font-bold text-3xl">Add Todo</h1>

                <div className="flex flex-col w-full gap-2">
                    <label className="font-medium text-[14px] leading-[20px] tracking-[-0.28px]">
                        Title
                    </label>
                    <input
                        name="title"
                        id="title"
                        onChange={handleChange}
                        type="text"
                        value={formData.title}
                        className="border-2 border-[#5c5c5c] outline-none py-3 px-2 w-full rounded-sm text-[14px] leading-[20px] tracking-[-0.28px]"
                    />
                </div>
                <div className="flex flex-col w-full gap-2">
                    <label className="font-medium text-[14px] leading-[20px] tracking-[-0.28px]">
                        Description
                    </label>
                    <textarea
                        name="description"
                        id="description"
                        onChange={handleChange}
                        value={formData.description}
                        className="border-2 border-[#5c5c5c] outline-none py-3 px-2 w-full rounded-sm text-[14px] leading-[20px] tracking-[-0.28px]"
                    />
                </div>
                <div className="flex flex-col w-full gap-2">
                    <label className="font-medium text-[14px] leading-[20px] tracking-[-0.28px]">
                        Upload Image
                    </label>
                    <input
                        type="file"
                        name="image"
                        id="image"
                        onChange={handleFileChange}
                        className="border-2 border-[#5c5c5c] outline-none py-3 px-2 w-full rounded-sm text-[14px] leading-[20px] tracking-[-0.28px]"
                    />
                </div>

                <button
                    onClick={handleSubmit}
                    className="bg-[#437EF7] text-white py-3 rounded-sm font-semibold tracking-[0.48px]"
                >
                    Add Todo
                </button>
                <button className="text-[#437EF7] font-semibold py-3 rounded-sm border-2 border-[#437EF7]">
                    <Link to="/" className="w-full">
                        Cancel
                    </Link>
                </button>
            </div>
        </div>
    );
}

export default AddTodo;
