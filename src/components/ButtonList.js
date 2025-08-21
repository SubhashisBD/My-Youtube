import React from "react";
import Button from "./Button";

const ButtonList = () => {
    const List = ["All", "Gaming", "Scoccer", "Movies", "Song", "Hollywood", "Tour", "Movies", "Song", "Movies", "Trending", "Bollywood", "Action", "Romance"]
    return (
        <div className="flex">
            {List.map((l, idx) => <Button key={idx} name={l} />)}
        </div>
    );

};

export default ButtonList;