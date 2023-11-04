import { useRef, useState } from "react";
import { ImageData } from "../utils/helpers/imageData";
import ImageHeader from "./ImageHeader";
import Checkbox from "./Inputs/Checkbox";
import UploadImage from "./UploadImage";

const ImageContainer = () => {
  const [data, setData] = useState(ImageData);
  const [isChecked, setisChecked] = useState([]);
  const [hoverIndex, setHoverIndex] = useState(null);

  const dragIndex = useRef(null);

  const handleCheckbox = (index) => {
    if (isChecked.includes(index)) {
      setisChecked(isChecked.filter((item) => item !== index));
    } else {
      setisChecked([...isChecked, index]);
    }
  };

  const handleDragStart = (e, index) => {
    dragIndex.current = index;
  };

  const handleDrop = (e, index) => {
    const dragItem = data[dragIndex.current];
    const newData = data.filter((item, i) => i !== dragIndex.current);
    newData.splice(index, 0, dragItem);
    setData(newData);
  };

  const deleteImage = (item) => {
    const newData = data.filter((image, index) => !item.includes(index));
    setData(newData);
    setisChecked([]);
  };

  return (
    <div className="flex justify-center items-center my-2 md:my-10 p-4">
      <div className="max-w-5xl mx-auto my-2 md:my-10 shadow-2xl shadow-slate-500 rounded-2xl p-4 md:p-10">
        <ImageHeader isChecked={isChecked} deleteImage={deleteImage} />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {data.map((image, index) => (
            <div
              key={index}
              className={`relative group cursor-pointer rounded-md bg-white hover:bg-gray-300 ${
                index === 0 ? "row-span-2 col-span-2" : ""
              }`}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
              draggable
              onDragStart={(e) => handleDragStart(e, index)}
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => handleDrop(e, index)}
            >
              <Checkbox
                hoverIndex={hoverIndex}
                isChecked={isChecked}
                handleCheckbox={handleCheckbox}
                index={index}
              />

              <img
                src={image}
                alt={`Image-${index}`}
                className="w-full h-full object-cover border border-gray-300 rounded-md"
              />
              <div className="hidden group-hover:block absolute overflow-hidden rounded-md inset-0 bg-black bg-opacity-40 z-0"></div>
            </div>
          ))}

          <div>
            <UploadImage />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageContainer;
