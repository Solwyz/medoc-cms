import React, { useState } from 'react'
import deleteIcon from "../../../Assets/icons/delet.svg";
import uploadImageIcon from "../../../Assets/icons/add_a_photo.svg";
import deleteConf from "../../../Assets/icons/deleteModal.svg";

function BannerCategory() {
  const [images, setImages] = useState({});
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const handleImageUpload = (event, id) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImages((prevImages) => ({ ...prevImages, [id]: imageUrl }));
    }
  };

  const handleDeleteClick = (id) => {
    setSelectedId(id);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    if (selectedId !== null) {
      setImages((prevImages) => {
        const updatedImages = { ...prevImages };
        delete updatedImages[selectedId];
        return updatedImages;
      });
    }
    setShowDeleteModal(false);
    setSelectedId(null);
  };

  return (
    <div>
      <h1 className='text-xl font-medium'>Category Banner Image</h1>
      <div className='bg-white p-6 mt-6 min-h-screen rounded-lg'>
        <table className="w-full text-left text-[14px] border border-[#D6D6D6] font-normal border-collapse">
          <thead className='bg-[#F0F0F0] h-10 border-b'>
            <tr className="text-sm font-medium text-[#2F3139]">
              <th className="px-4 text-sm font-medium text-[#2F3139] py-2">Sl no</th>
              <th className="px-4 text-sm font-medium text-[#2F3139] py-2">Brand Image</th>
              <th className="px-4 text-sm font-medium text-[#2F3139] py-2">Category Name</th>
              <th className="px-4 text-sm font-medium text-[#2F3139] py-2">Image</th>
              <th className="px-4 text-sm font-medium text-[#2F3139] py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4, 5].map((num) => (
              <tr key={num} className="border-b border-[#E6E6E7] hover:bg-[#F6F6F6] h-[71px] text-sm">
                <td className="px-4 py-2">{num}</td>
                <td className="px-4 py-2">
                  {images[num] ? (
                    <img src={images[num]} alt="Uploaded" className="w-[140px] h-10 object-cover" />
                  ) : (
                    <div className="w-[140px] h-10 border border-[#C1C1C1] bg-[#EBEBEB] flex items-center justify-center">
                      <img src={uploadImageIcon} alt="Upload" className="w-6 h-6" />
                    </div>
                  )}
                </td>
                <td className="px-4 py-2">Category {num}</td>
                <td className="px-4 py-2">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(event) => handleImageUpload(event, num)}
                    className="hidden"
                    id={`fileInput-${num}`}
                  />
                  <label htmlFor={`fileInput-${num}`} className="px-8 py-1 hover:shadow-lg border border-[#564FB4] text-[#564FB4] font-medium text-sm rounded-lg h-8 cursor-pointer">
                    Add Image
                  </label>
                </td>
                <td className="px-4 py-2">
                  <img src={deleteIcon} onClick={() => handleDeleteClick(num)} alt="Delete" className="w-6 h-6 cursor-pointer" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showDeleteModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[361px] h-[256px] flex flex-col items-center">
            <img className="w-12 h-12" src={deleteConf} alt="Confirm Delete" />
            <h1 className="mt-6 font-medium text-[16px]">Confirm Delete</h1>
            <h2 className="text-[14px] font-normal text-[#818180] mt-2">
              Are you sure you want to delete this image?
            </h2>
            <div className="flex mt-4">
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
    </div>
  );
}

export default BannerCategory
