import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Card = () => {
    const [data, setData] = useState([]);
    const fetchData = async () => {
        await axios
            .get("http://localhost:8880/api/todo")
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div className="flex justify-center my-10">
            <div>
                <div className="text-right mb-10">
                    <button className="bg-blue-500 text-white py-2 px-5 rounded-sm">
                        <Link>
                        Add Todo
                        </Link>
                    </button>
                </div>

                <div className="max-w-[1330px] w-full grid grid-cols-3 gap-4">
                    {data.map((item, index) => (
                        <div
                            key={index}
                            className=" flex flex-col gap-5 px-4 py-6 shadow-lg shadow-gray-350 rounded-lg bg-[#f2f7fb]"
                        >
                            <div className="flex flex-col gap-3">
                                <h1 className="font-semibold text-2xl">
                                    {item.title}
                                </h1>
                                <span>{item.description}</span>
                                <span className="font-bold text-xs">
                                    Created at: {item.created_at.split("T")[0]}
                                </span>
                            </div>
                            <div className="flex justify-between">
                                <button className="bg-green-400 text-white px-6 py-2 rounded-sm">
                                    Done
                                </button>
                                <button className="bg-red-400 text-white px-6 py-2 rounded-sm">
                                    Delete
                                </button>
                                <button className="bg-[#68429C] text-white px-6 py-2 rounded-sm">
                                    Edit
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Card;
