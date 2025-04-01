import React, { useState } from 'react';
import uploadImageIcon from "../../../Assets/icons/add_a_photo.svg";
import save from "../../../Assets/icons/save.svg";
import tickIcon from "../../../Assets/icons/check_circle.svg";

function HeroBanner() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isSaved, setIsSaved] = useState(false);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      setIsSaved(false);
    }
  };

  const handleSave = () => {
    if (selectedImage) {
      setIsSaved(true);
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
  };

  return (
    <div className="bg-white min-h-screen rounded-lg p-8 w-full flex flex-col items-center">
      <h1 className='text-center font-medium text-[#2C2B2B] text-xl'>Hero banner</h1>
      <p className='text-center font-medium mt-5 text-base leading-6 text-[#888888]'>
        Add the hero banner here. This image will be shown in the <br /> home page of the website.
      </p>
      
      <label className="mt-10 w-[80%] max-w-[500px] border-dashed border-2 border-[#B3B3B3] rounded-lg flex items-center justify-center h-[200px] cursor-pointer relative">
        {selectedImage ? (
          <img src={selectedImage} alt="Banner Preview" className="w-full h-full object-cover rounded-lg" />
        ) : (
          <div className="flex flex-col items-center ">
            <img src={uploadImageIcon} alt="Upload Icon" className="w-[56px] h-[56px]" />
          </div>
        )}
        <input type="file" accept="image/*" className="absolute inset-0 opacity-0 cursor-pointer" onChange={handleImageChange} />
      </label>
      <span className="mt-2 text-[#304BA0] font-medium text-base">Click to add banner image</span>
      
      <p className='text-center text-[#A1A1A1] font-medium text-base mt-2'>(Size - 1440x550)</p>
      
      <div className="mt-6 flex gap-3">
        <button 
          className={`px-4 py-2 rounded-lg flex font-normal  items-center transition-all ${selectedImage ? (isSaved ? 'bg-[#304BA0] text-white' : 'bg-[#304BA0] text-white') : 'bg-[#B0B0B0] text-black cursor-not-allowed'}`} 
          onClick={handleSave}
          disabled={!selectedImage}
        >
          <img src={isSaved ? tickIcon : save} alt="Save Icon" className="w-5 h-5 mr-2" /> 
          {isSaved ? 'Saved' : 'Save'}
        </button>
      </div>
    </div>
  );
}

export default HeroBanner;