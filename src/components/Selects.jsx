import React from "react"

import BoraBora from "../assets/borabora.jpg"
import BoraBora2 from "../assets/borabora2.jpg"
import KeyWest from "../assets/keywest.jpg"
import Maldives from "../assets/maldives.jpg"
import Maldives2 from "../assets/maldives2.jpg"
import Maldives3 from "../assets/maldives3.jpg"

import SelectsCard from "./SelectsCard"

const Selects = () => {
  return (
    <div className="max-w-[1000px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        <SelectsCard bg={BoraBora} text="Bora Bora"/>
        <SelectsCard bg={BoraBora2} text="Maldives"/>
        <SelectsCard bg={KeyWest} text="Antigua"/>
        <SelectsCard bg={Maldives} text="Cozumel"/>
        <SelectsCard bg={Maldives2} text="Jamaica"/>
        <SelectsCard bg={Maldives3} text="Key West"/>
    </div>
  )
}

export default Selects