import React, { useState } from "react";
import addIcon from "../../../Assets/icons/Add.svg";
import filterIcon from "../../../Assets/icons/filter_alt.svg";
import searchIcon from "../../../Assets/icons/Search Icon.svg";
import exportIcon from "../../../Assets/icons/Export.svg";
import deleteIcon from "../../../Assets/icons/delet.svg";
import editIcon from "../../../Assets/icons/edit.svg";
import deleteConf from "../../../Assets/icons/deleteModal.svg";
import closeIcon from "../../../Assets/icons/close_icon.svg";
import dropdownIcon from "../../../Assets/icons/arrow_back_ios.svg";

const ProductBrands = () => {
  const [brands, setBrands] = useState([
    {
      id: 62542,
      name: "Foxtale",
      category: "Beauty care",
      childCategory: "Dermocosmetics",
      subCategory: "Facial",
    },
    {
      id: 62542,
      name: "Cipla",
      category: "Beauty care",
      childCategory: "Dermocosmetics",
      subCategory: "Facial",
    },
    {
      id: 62542,
      name: "Mamaearth",
      category: "Beauty care",
      childCategory: "Dermocosmetics",
      subCategory: "Facial",
    },
    {
      id: 62542,
      name: "Himalaya",
      category: "Beauty care",
      childCategory: "Dermocosmetics",
      subCategory: "Facial",
    },
    {
      id: 62542,
      name: "Glowa3",
      category: "Beauty care",
      childCategory: "Dermocosmetics",
      subCategory: "Facial",
    },
    {
      id: 62542,
      name: "Dove",
      category: "Beauty care",
      childCategory: "Dermocosmetics",
      subCategory: "Facial",
    },
  ]);

  const [showAddBrand, setShowAddBrand] = useState(false);
  const [newBrand, setNewBrand] = useState("");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const handleDelete = (id) => {
    setDeleteId(id);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    setBrands(brands.filter((brand) => brand.id !== deleteId));
    setShowDeleteModal(false);
  };

  const addBrand = () => {
    if (newBrand.trim()) {
      setBrands([
        ...brands,
        {
          id: Date.now(),
          name: newBrand,
          category: "Beauty care",
          childCategory: "Dermocosmetics",
          subCategory: "Facial",
        },
      ]);
      setNewBrand("");
      setShowAddBrand(false);
    }
  };

  return (
    <div className="">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-medium">All Brands</h2>
        <button
          className="hover:bg-[#526EC3] flex items-center font-normal text-sm bg-[#304BA0] text-white px-4 py-3 rounded-lg"
          onClick={() => setShowAddBrand(true)}
        >
          <img src={addIcon} alt="Add" className="mr-2" /> Add new brand
        </button>
      </div>
      <div className="bg-white min-h-screen mt-6 p-6 w-full">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="relative w-[584px]">
              <input
                type="text"
                placeholder="Search Product, Product ID"
                className="border border-[#D5D5D5] focus:outline-none text-[#696A70] text-sm font-normal rounded-lg p-2 pl-10 w-full h-[48px]"
              />
              <img
                src={searchIcon}
                alt="Search"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
              />
            </div>
            <button className="border border-[#D5D5D5] flex items-center font-normal text-sm text-[#2C2B2B] p-2 ml-2 rounded-lg w-[87px] h-[48px]">
              <img src={filterIcon} className="mr-2" alt="Filter" /> Filter
            </button>
          </div>
          <button className="bg-white border border-[#D5D5D5] hover:border-[#8F8F8F] flex items-center font-normal text-sm px-4 py-3 rounded-lg">
            <img src={exportIcon} className="mr-2 w-4 h-4" alt="" /> Export
          </button>
        </div>

        <div className=" mt-8 overflow-x-auto">
          <table className="w-full text-left text-[14px] border  font-normal border-collapse">
            <thead className="bg-[#F0F0F0] h-10 border-b border-[#D6D6D6]">
              <tr className="text-sm font-medium text-[#2F3139]">
                <th className="px-4 py-2 w-10 rounded-tl-lg">
                  <input type="checkbox" />
                </th>
                <th className="px-4 font-medium text-[#2F3139]  py-2">
                  Brand ID
                </th>
                <th className="px-4 font-medium text-[#2F3139]  py-2">
                  Brand Name
                </th>
                <th className="px-4 font-medium text-[#2F3139]  py-2">
                  Category
                </th>
                <th className="px-4 font-medium text-[#2F3139]  py-2">
                  Child Category
                </th>
                <th className="px-4 font-medium text-[#2F3139]  py-2">
                  Sub Category
                </th>
                <th className="px-4 font-medium text-[#2F3139]  py-2">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {brands.map((brand, index) => (
                <tr
                  key={index}
                  className="border-b h-[56px] hover:bg-[#F6F6F6] text-sm"
                >
                  <td className="px-4 py-2 w-10">
                    <input type="checkbox" />
                  </td>
                  <td className="px-4 py-2">{brand.id}</td>
                  <td className="px-4 py-2">{brand.name}</td>
                  <td className="px-4 py-2">{brand.category}</td>
                  <td className="px-4 py-2">{brand.childCategory}</td>
                  <td className="px-4 py-2">{brand.subCategory}</td>
                  <td className="px-4 py-2 ">
                    <button className="mr-2" onClick={() => handleDelete(brand.id)}>
                      <img
                        src={deleteIcon}
                        alt="Delete"
                        className="w-[22px] h-[22px]"
                      />
                    </button>

                    <button>
                      <img
                        src={editIcon}
                        alt="Edit"
                        className="w-[22px] h-[22px]"
                      />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {showDeleteModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[361px] h-[256px]">
            <img className="w-12 h-12" src={deleteConf} alt="" />
            <h1 className="mt-6 font-medium text-[16px]">Confirm Delete</h1>
            <h2 className="text-[14px] font-normal text-[#818180] mt-2">
              Are you sure you want to delete this?
            </h2>
            <div className="flex  mt-4">
              <button
                className="px-[52px] py-[14px] border hover:border-[#656565] border-[#CDCDCD] rounded-lg mr-2"
                onClick={() => setShowDeleteModal(false)}
              >
                Cancel
              </button>
              <button
                className="px-[52px] py-[14px] bg-[#FFCFCF] hover:bg-[#FFA0A0] text-[#D41515] rounded-lg"
                onClick={confirmDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {showAddBrand && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
  <div className="bg-white  shadow-lg">
    {/* Modal Header */}
    <div className="flex bg-[#DEE2EF] items-center px-6 h-[66px] justify-between">
      <h1 className="text-base text-[#180F32] font-medium">Create new brand</h1>
      <img
        src={closeIcon}
        onClick={() => setShowAddBrand(false)}
        className="w-6 h-6 cursor-pointer hover:bg-white"
        alt="Close"
      />
    </div>

    {/* Modal Body */}
    <div className="p-6">
      <div className="flex space-x-6 ">
        {/* Brand Name Input */}
        <div className="w-[269px]">
          <label className="font-normal text-sm block mb-2">Select Brand</label>
          <input
            type="text"
            value={newBrand}
            onChange={(e) => setNewBrand(e.target.value)}
            placeholder="Enter brand name"
            className="border border-[#BDBDBD] focus:outline-none rounded-lg px-4 h-[48px] w-full"
          />
        </div>

        {/* Category Dropdown */}
        <div className="w-[269px]">
          <label className="font-normal text-sm block mb-2">Select Category</label>
          <div className="relative">
            <select className="border border-[#BDBDBD] font-normal focus:outline-[#75689C] px-4 h-[48px] w-full rounded-lg appearance-none">
            <option value="" disabled hidden>Select a category</option>
              <option>Beauty</option>
              <option>Health</option>
            </select>
            <img src={dropdownIcon} className="absolute right-3 top-4 w-4 h-4" alt="Dropdown" />
          </div>
        </div>
      </div>

      {/* Child & Sub Category */}
      <div className="flex space-x-6 mt-4">
        <div className="w-[269px]">
          <label className="font-normal text-sm block mb-2">Child Category</label>
          <div className="relative">
            <select className="border border-[#BDBDBD] font-normal focus:outline-[#75689C] px-4 h-[48px] w-full rounded-lg appearance-none">
            <option value="" disabled hidden>Select a category</option>
              <option>Beauty</option>
              <option>Health</option>
            </select>
            <img src={dropdownIcon} className="absolute right-3 top-4 w-4 h-4" alt="Dropdown" />
          </div>
        </div>

        <div className="w-[269px]">
          <label className="font-normal text-sm block mb-2">Sub Category</label>
          <div className="relative">
            <select className="border border-[#BDBDBD] font-normal focus:outline-[#75689C] px-4 h-[48px] w-full rounded-lg appearance-none">
            <option value="" disabled hidden>Select a category</option>
              <option>Beauty</option>
              <option>Health</option>
            </select>
            <img src={dropdownIcon} className="absolute right-3 top-4 w-4 h-4" alt="Dropdown" />
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end mt-[56px]">
        <button
          onClick={() => setShowAddBrand(false)}
          className="px-4 py-2 border text-[#2C2B2B] font-normal text-base rounded-lg mr-2"
        >
          Cancel
        </button>
        <button
          onClick={addBrand}
          className="px-4 py-2 bg-[#6C55B2] font-normal text-white rounded-lg"
        >
          Add Brand
        </button>
      </div>
    </div>
  </div>
</div>

      )}
    </div>
  );
};

export default ProductBrands;
