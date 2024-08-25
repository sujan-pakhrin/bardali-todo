import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Card = () => {
    const [data, setData] = useState([]);
    // console.log(data)
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
    }, [data]);

    const handleDone = (id) => {
        axios
            .put(`http://localhost:8880/api/todostatus/${id}`)
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <div className="flex justify-center my-10">
            <div className="max-w-[1330px] w-full">
                <div className="text-right mb-10">
                    <button className="bg-blue-500 text-white py-2 px-5 rounded-sm">
                        <Link to={"/add"}>Add Todo</Link>
                    </button>
                </div>

                <div className="max-w-[1330px] w-full grid grid-cols-3 gap-4">
                    {data.map((item, index) => (
                        <div
                            key={index}
                            className={`${item.status===1 ? "bg-green-400" : "bg-[#f2f7fb]"} flex flex-col gap-5 px-4 py-6 shadow-lg shadow-gray-400 rounded-md `}
                        >
                            <div className="flex flex-col gap-3">
                                <h1 className="font-semibold text-2xl uppercase">
                                    {item.title}
                                </h1>
                                <img src={`http://localhost:8880/${item.image}`} className='h-[250px] object-cover' alt="img" />
                                <span className="capitalize">{item.description}</span>
                                <span className="font-bold text-xs">
                                    Created at: {item.created_at.split("T")[0]}
                                </span>
                            </div>
                            <div className="flex justify-between">
                                <button
                                    onClick={()=>handleDone(item.id)}
                                    className={`${item.status===1 ? "border-2 border-white":""}bg-green-400 text-white px-6 py-2 rounded-sm`}
                                >
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
