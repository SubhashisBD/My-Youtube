import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
    const [searchQuery, setSearchQuery] = useState("")

    useEffect( () => {
        const search = fetch("http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=Bhubaneswar")
    })

    const dispatch = useDispatch();

    const toggleMenuHandler = () => {
        dispatch(toggleMenu())
    }

    return (
        <div className="grid grid-flow-col m-2 p-4 shadow-lg">
            <div className="flex col-span-1">
                <img onClick={() => toggleMenuHandler()} className="h-7 cursor-pointer" alt="Icon" src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-4.png" />
                <img className="h-12 -mt-2 px-3" alt="youtube" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM2QZ6DKxCknHMUkOUx5nctv2YJu-8sPT__g&s" />
            </div>
            <div className="col-span-10 text-center -ml-10 px-10">
                <input
                    type="text"
                    className="w-1/2 border border-slate-900 rounded-lg px-4 py-1"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                {console.log(searchQuery)}
                <button className="px-4 py-1 bg-gray-200 rounded-xl border border-slate-900 ml-5">
                    Search
                </button>
            </div>
            <div className="col-span-1">
                <img
                    className="h-7"
                    alt="user"
                    src="https://icons.veryicon.com/png/o/miscellaneous/icon-icon-of-ai-intelligent-dispensing/login-user-name-1.png"
                />
            </div>
        </div>
    )
};

export default Head;