import React from "react"
import {RiCustomerService2Fill} from "react-icons/ri"
import {MdOutlineTravelExplore} from "react-icons/md"

const Search = () => {
  return (
    <div className="max-w-[1000px] mx-auto grid lg:grid-cols-3 gap-1 px-1 py-16">
        <div className="lg:col-span-2 flex flex-col justify-evenly">
            <div>
                <h2>LUXURY INCLUDE VACATIONS FOR TWO PEOPLE</h2>
                <p className="py-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores recusandae quasi sapiente accusantium neque maxime quam, inventore, dolorum numquam ducimus doloremque eos totam voluptates excepturi rem. Deserunt ullam corrupti cupiditate. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis labore magni libero voluptates dicta sint recusandae ab deleniti, reiciendis quasi quos in accusantium suscipit earum officiis ducimus, aspernatur et? Iusto. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id facilis voluptatum quos iste recusandae quaerat unde iure perspiciatis molestias, excepturi vero ratione nulla soluta reprehenderit dolorem veritatis suscipit? Porro, veniam!</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 py-4">
                <div className="flex flex-col lg:flex-row items-center text-center"><button><RiCustomerService2Fill size={38}/></button>
                    <div>
                        <h3 className="py-2">LEADING SERVICE</h3>
                        <p>ALL-INCLUSIVE COMPANY FOR 18 YEARS IN-A-ROW</p>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row items-center text-center"><button><MdOutlineTravelExplore size={38}/></button>
                    <div>
                        <h3 className="py-2">LEADING SERVICE</h3>
                        <p>ALL-INCLUSIVE COMPANY FOR 18 YEARS IN-A-ROW</p>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div className="border text-center p-3">
                <p className="pt-1">GET AN ADDITIONAL 10% OFF</p>
                <p className="py-3">10 HOURS LEFT</p>
                <p className="bg-gray-800 text-gray-200 py-1">BOOK NOW AND SAVE</p>
            </div>
            <form className="w-full">
                <div className="flex flex-col my-2">
                    <label>Destination</label>
                    <select className="border rounded-md p-2">
                        <option>Grande Antigua</option>
                        <option>Key West</option>
                        <option>Maldives</option>
                        <option>Cozumel</option>
                    </select>
                </div>
                <div className="flex flex-col my-4">
                    <label>Check-In</label>
                    <input className="border rounded-md p-2" type="date" />
                </div>
                <div className="flex flex-col my-2">
                    <label>Check-Out</label>
                    <input className="border rounded-md p-2" type="date" />
                </div>
                <button className="w-full my-4">Rates & Something</button>
            </form>
        </div>
    </div>
  )
}

export default Search