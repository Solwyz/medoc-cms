import React, { useState } from "react";
import addIcon from "../../../Assets/icons/Add.svg";
import importIcon from "../../../Assets/icons/Import.svg";
import filterIcon from "../../../Assets/icons/filter_alt.svg";
import searchIcon from "../../../Assets/icons/Search Icon.svg";
import exportIcon from "../../../Assets/icons/Export.svg";
import deleteIcon from "../../../Assets/icons/delet.svg";
import editIcon from "../../../Assets/icons/edit.svg";
import deleteConf from "../../../Assets/icons/deleteModal.svg"

const productsData = Array(8).fill({
  id: 652542,
  image: "../../../Assets/images/product.png",
  name: "Multivitamin Vitamin Healthkart Tablet",
  price: "AED 240",
  brand: "Cipla",
  category: "Medicine",
});

function Allproducts() {
  const [products, setProducts] = useState(productsData);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const handleDelete = (id) => {
    setDeleteId(id);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    setProducts(products.filter((product) => product.id !== deleteId));
    setShowDeleteModal(false);
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-medium">All Products</h1>
        <div className="flex">
          <button className="bg-white border border-[#D5D5D5] hover:border-[#8F8F8F] flex items-center font-normal text-sm px-4 py-3 rounded-lg mr-4">
            <img src={importIcon} className="mr-2 w-4 h-4" alt="" /> Import
          </button>
          <button className="hover:bg-[#526EC3] flex items-center font-normal text-sm bg-[#304BA0] text-white px-4 py-3 rounded-lg">
            <img src={addIcon} className="mr-2 w-4 h-4" alt="" /> Add Product
          </button>
        </div>
      </div>

      <div className="bg-white mt-6 p-6 w-full">
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

        <div className=" mt-8">
          <table className=" w-full">
            <thead className="bg-[#F0F0F0] h-10 rounded-lg">
              <tr className="bg-[#F0F0F0] h-[40px] text-left rounded-lg">
                <th className="p-4">
                  <input type="checkbox" />
                </th>
                <th className="p-4 font-medium text-sm text-[#2F3139] ">Product ID</th>
                <th className="p-4 font-medium text-sm text-[#2F3139] ">Image</th>
                <th className="p-4 font-medium text-sm text-[#2F3139] ">Product Detail</th>
                <th className="p-4 font-medium text-sm text-[#2F3139] ">Price</th>
                <th className="p-4 font-medium text-sm text-[#2F3139] ">Brand</th>
                <th className="p-4 font-medium text-sm text-[#2F3139] ">Category</th>
                <th className="p-4 font-medium text-sm text-[#2F3139] ">Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index} className="border-b text-sm">
                  <td className="p-3">
                    <input type="checkbox" />
                  </td>
                  <td className="p-3">{product.id}</td>
                  <td className="p-3">
                    <img src={product.image} alt="Product" className="w-10" />
                  </td>
                  <td className="p-3">{product.name}</td>
                  <td className="p-3">{product.price}</td>
                  <td className="p-3">{product.brand}</td>
                  <td className="p-3">{product.category}</td>
                  <td className="items-center justify-center py-5 flex space-x-2">
                    <button onClick={() => handleDelete(product.id)}>
                      <img src={deleteIcon} alt="Delete" className="w-5 h-5" />
                    </button>
                    <button>
                      <img src={editIcon} alt="Edit" className="w-5 h-5" />
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
                onClick={() => setShowDeleteModal(false)}              >
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
    </div>
  );
}

export default Allproducts;
