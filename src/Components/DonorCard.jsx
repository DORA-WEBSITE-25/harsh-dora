import React from "react";

const DonorCard = ({ title, image, description }) => {
    return (
        <div className="w-full bg-white rounded-lg shadow-lg border border-gray-300 my-8">
            {/* Title Bar */}
            <div className="bg-blue-950 py-4 px-8 flex justify-center">
                <h2 className="text-white text-center font-bold underline text-2xl tracking-wide">
                    {title}
                </h2>
            </div>
            {/* Content */}
            <div className="flex flex-row gap-x-8 px-16 py-8 items-center w-full">
                {image ? (
                    <img
                        src={image}
                        alt={title}
                        className="w-48 h-48 object-cover rounded-lg"
                        style={{ background: "#f7f7f7" }}
                    />
                ) : null}
                <div className="ml-12 flex-1">
                    {description}
                </div>
            </div>
            {/* Divider */}
            <div className="h-1 bg-gray-700 mx-16 mt-2 mb-4 rounded" />
        </div>
    );
};

export default DonorCard;
