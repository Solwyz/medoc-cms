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

function ProductCategories() {
  const [showAddCategory, setShowAddCategory] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [categories, setCategories] = useState([
    { id: 1, name: "Electronics", childCategory: 2, products: 10 },
    { id: 2, name: "Clothing", childCategory: 3, products: 15 },
  ]);
  const [categoryToDelete, setCategoryToDelete] = useState(null);

  const handleDelete = (id) => {
    setCategoryToDelete(id);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    setCategories(categories.filter((category) => category.id !== categoryToDelete));
    setShowDeleteModal(false);
  };

  const addCategory = () => {
    const newCategory = {
      id: categories.length + 1,
      name: "New Category",
      childCategory: 0,
      products: 0,
    };
    setCategories([...categories, newCategory]);
    setShowAddCategory(false);
  };
  return (
    <div className="">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-medium">All Categories</h2>
        <button
          className="hover:bg-[#526EC3] flex items-center font-normal text-sm bg-[#304BA0] text-white px-4 py-3 rounded-lg"
          onClick={() => setShowAddCategory(true)}
        >
          <img src={addIcon} alt="Add" className="mr-2" /> Add Category
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
                  Category ID
                </th>
                <th className="px-4 font-medium text-[#2F3139]  py-2">
                  Category Name
                </th>
                <th className="px-4 font-medium text-[#2F3139]  py-2">
                  Number of Child category
                </th>
                <th className="px-4 font-medium text-[#2F3139]  py-2">
                  Number of products
                </th>

                <th className="px-4 font-medium text-[#2F3139]  py-2">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category, index) => (
                <tr
                  key={index}
                  className="border-b h-[56px] hover:bg-[#F6F6F6] text-sm"
                >
                  <td className="px-4 py-2 w-10">
                    <input type="checkbox" />
                  </td>
                  <td className="px-4 py-2">{category.id}</td>
                  <td className="px-4 py-2">{category.name}</td>
                  <td className="px-4 py-2">{category.childCategory}</td>
                  <td className="px-4 py-2">{category.products}</td>
                  <td className="px-4 py-2 ">
                    <button className="mr-2" onClick={() => handleDelete(category.id)}>
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
              Are you sure you want to delete this order?
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

      {showAddCategory && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white w-[420px]  shadow-lg">
            {/* Modal Header */}
            <div className="flex bg-[#DEE2EF] items-center px-6 h-[66px] justify-between">
              <h1 className="text-base text-[#180F32] font-medium">
                Create new brand
              </h1>
              <img
                src={closeIcon}
                onClick={() => setShowAddCategory(false)}
                className="w-6 h-6 cursor-pointer hover:bg-white"
                alt="Close"
              />
            </div>

            {/* Modal Body */}
            <div className="p-6">
              <div className="flex space-x-6 ">
                {/* Brand Name Input */}
                <div className="w-full">
                <label className="font-normal text-sm block mb-2">
                    Category Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter category name"
                    className="border border-[#BDBDBD] focus:outline-[#75689C] rounded-lg px-4 h-[48px] w-full"
                  />
                </div>

               
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end mt-[56px]">
                <button
                  onClick={() => setShowAddCategory(false)}
                  className="px-4 py-2 border text-[#2C2B2B] hover:border-[#8F8F8F] font-normal text-base rounded-lg mr-2"
                >
                  Cancel
                </button>
                <button
                  onClick={addCategory}
                  className="px-4 py-2 bg-[#6C55B2] font-normal text-white rounded-lg"
                >
                  Add Category
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductCategories;
