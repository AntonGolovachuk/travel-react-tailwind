import React from "react"

import {FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaPinterest} from "react-icons/fa"

const Footer = () => {
  return (
    <div className="w-full bg-gray-100 py-16">
        <div className="max-w-[1000px] mx-auto flex flex-col px-4">
            <div className="sm:flex text-center justify-between items-center">
                <h2>BEACHES.</h2>
                <div className="flex justify-between w-full sm:max-w-[280px] my-4">
                    <FaFacebook className="icon" />
                    <FaTwitter className="icon" />
                    <FaYoutube className="icon" />
                    <FaPinterest className="icon" />
                    <FaInstagram className="icon" />
                </div>
            </div>
        </div>
        <div className="flex justify-between">
            <ul className="lg:flex">
                <li>About</li>
                <li>Partnerships</li>
                <li>Carees</li>
                <li>Newsroom</li>
                <li>Advertising</li>
            </ul>
            <ul className="lg:flex text-right">
                <li>Home</li>
                <li>Destinations</li>
                <li>Travel</li>
                <li>View</li>
                <li>Book</li>
            </ul>
        </div>
    </div>
  )
}

export default Footer