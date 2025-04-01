import React, { useState } from "react";
import dropdownIcon from "../../../Assets/icons/arrow_back_ios.svg";
import uploadImageIcon from "../../../Assets/icons/add_a_photo.svg";
import closeIcon from "../../../Assets/icons/close_icon.svg";
import save from  "../../../Assets/icons/save.svg"

function AddProduct() {
  const [images, setImages] = useState([]);

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    setImages([...images, ...files.map((file) => URL.createObjectURL(file))]);
  };

  const removeImage = (index) => {
    setImages(images.filter((_, i) => i !== index));
  };

  return (
    <div className="">
      {/* Header */}
      <div className="bg-white h-[50px] p-4 rounded-lg w-full">
        <h1 className="font-medium text-[16px]">Product basic details</h1>
      </div>

      {/* Form Section */}
      <div className="bg-white mt-2 px-4 rounded-lg py-6 w-full">
        <div className="flex justify-between space-x-4">
          <div>
            <label className="font-normal text-sm ">Product Name</label>
            <input
              type="text"
              className="border-[#BDBDBD] border focus:outline-[#75689C] px-4 mt-2 placeholder:text-[#696A70] rounded-lg h-[48px] w-[428px]"
              placeholder="Enter product name"
            />
          </div>
          <div>
            <label className="font-normal text-sm ">Product Price</label>
            <input
              type="text"
              className="border-[#BDBDBD] border focus:outline-[#75689C] px-4 mt-2 placeholder:text-[#696A70] rounded-lg h-[48px] w-[220px]"
              placeholder="Enter product price"
            />
          </div>
          <div>
            <label className="font-normal text-sm ">Select Brand</label>
            <div className="relative">
              <select className="border-[#BDBDBD] border font-normal focus:outline-[#75689C] px-4 mt-2 placeholder:text-[#696A70] rounded-lg h-[48px] w-[146px] appearance-none">
                <option>Foxtale</option>
                <option>L'Oreal</option>
              </select>
              <img
                src={dropdownIcon}
                className="absolute right-3 top-6 w-4 h-4"
                alt="Dropdown"
              />
            </div>
          </div>
          <div>
            <label className="font-normal text-sm ">Discount</label>
            <input
              type="text"
              className="border-[#BDBDBD] border focus:outline-[#75689C] px-4 mt-2 placeholder:text-[#696A70] rounded-lg h-[48px] w-full"
              placeholder="Enter discount"
            />
          </div>
          <div>
            <label className="font-normal text-sm ">Select Quantity</label>
            <div className="relative">
              <input
                type="text"
                className="border-[#BDBDBD] border focus:outline-[#75689C] px-4 mt-2 placeholder:text-[#696A70] rounded-lg h-[48px] w-[143px]"
              />
              <select className="absolute right-0 top-2 h-12 px-2 focus:outline-none w-[72px] rounded-lg bg-[#E0E0E0]">
                <option>Kg</option>
                <option>g</option>
                <option>lbs</option>
              </select>
            </div>
          </div>
        </div>

        <div className="mt-4 grid">
          <label className="font-normal text-sm ">Product Description</label>
          <textarea
            className="border-[#BDBDBD] border focus:outline-[#75689C] resize-none p-4 mt-2 placeholder:text-[#696A70] rounded-lg h-[100px] w-full"
            placeholder="Enter product description"
          ></textarea>
        </div>

        <div className="flex  space-x-4 mt-4">
          <div className="grid">
            <label className="font-normal text-sm ">Marketer Details</label>
            <textarea
              className="border-[#BDBDBD] border resize-none font-normal focus:outline-[#75689C] p-4 mt-2 placeholder:text-[#696A70] rounded-lg h-[103px] w-[550px]"
              placeholder="Enter marketer details"
            ></textarea>
          </div>
          <div className="grid">
            <label className="font-normal text-sm ">Manufacturer Details</label>
            <textarea
              className="border-[#BDBDBD] resize-none font-normal border focus:outline-[#75689C] p-4 mt-2 placeholder:text-[#696A70] rounded-lg h-[103px] w-[550px]"
              placeholder="Enter manufacturer details"
            ></textarea>
          </div>
        </div>

        {/* Category Section */}
        <div className="flex space-x-4 mt-4">
          {/* Parent Category */}
          <div>
            <label className="font-normal text-sm">Parent category</label>
            <div className="relative">
              <select className="border-[#BDBDBD] border focus:outline-[#75689C] px-4 mt-2 placeholder:text-[#696A70] rounded-lg h-[48px] w-[265px] appearance-none">
                <option>Beauty Care</option>
              </select>
              <img
                src={dropdownIcon}
                className="absolute right-3 top-6 w-4 h-4"
                alt="Dropdown"
              />
            </div>
          </div>

          {/* Child Category */}
          <div>
            <label className="font-normal text-sm">Child category</label>
            <div className="relative">
              <select className="border-[#BDBDBD] border focus:outline-[#75689C] px-4 mt-2 placeholder:text-[#696A70] rounded-lg h-[48px] w-[265px] appearance-none">
                <option>Select</option>
              </select>
              <img
                src={dropdownIcon}
                className="absolute right-3 top-6 w-4 h-4"
                alt="Dropdown"
              />
            </div>
          </div>

          {/* Sub Category */}
          <div>
            <label className="font-normal text-sm">Sub category</label>
            <div className="relative">
              <select className="border-[#BDBDBD] border focus:outline-[#75689C] px-4 mt-2 placeholder:text-[#696A70] rounded-lg h-[48px] w-[265px] appearance-none">
                <option>Select</option>
              </select>
              <img
                src={dropdownIcon}
                className="absolute right-3 top-6 w-4 h-4"
                alt="Dropdown"
              />
            </div>
          </div>

          {/* Micro Category */}
          <div>
            <label className="font-normal text-sm">Micro category</label>
            <div className="relative">
              <select className="border-[#BDBDBD] border focus:outline-[#75689C] px-4 mt-2 placeholder:text-[#696A70] rounded-lg h-[48px] w-[265px] appearance-none">
                <option>Select</option>
              </select>
              <img
                src={dropdownIcon}
                className="absolute right-3 top-6 w-4 h-4"
                alt="Dropdown"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white mt-6 p-4 rounded-lg  w-full">
        <h1 className="font-medium text-[16px]">Product Images</h1>
      </div>
      <div className="bg-white mt-2 px-4 rounded-lg py-6 w-full">
        {/* Image Upload Section */}
        <div className="">
          <h2 className="font-medium text-[16px]">Upload Image</h2>
          <div className="flex gap-2 mt-2">
            <label className="border-dashed border-2 border-[#B3B3B3] p-4 rounded-lg cursor-pointer flex items-center justify-center w-[120px] h-[120px]">
              <input
                type="file"
                accept="image/*"
                className="hidden"
                multiple
                onChange={handleImageUpload}
              />
              <img src={uploadImageIcon} alt="Upload" className="w-10 h-10" />
            </label>

            {images.map((img, index) => (
              <div key={index} className="relative  border rounded-lg">
                <img
                  src={img}
                  alt="Product"
                  className="w-[120px] h-[120px] object-cover rounded-lg"
                />
                <button
                  onClick={() => removeImage(index)}
                  className="absolute top-1 right-1 bg-white rounded-md  p-1 shadow"
                >
                  <img src={closeIcon} alt="Remove" className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-end mt-6">
        <button className="px-4 py-2 border hover:border-[#8F8F8F] border-[#E6E6E7] bg-white rounded-lg mr-2">
          Cancel
        </button>
        <button className="px-4 py-2 flex bg-[#304BA0] font-normal text-sm hover:bg-[#5167AB] items-center text-white rounded-lg">
        <img src={save} className="w-4 h-4 mr-2" alt="" />
          Add Product
        </button>
      </div>
    </div>
  );
}

export default AddProduct;
