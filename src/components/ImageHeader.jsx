import DeleteButton from "./Button/DeleteButton";

const ImageHeader = ({ isChecked, deleteImage }) => {
  return (
    <>
      <div className="relative w-full pb-2 md:pb-5 mb-4 md:mb-10 border-b">
        {isChecked.length > 0 ? (
          <div className="flex justify-between flex-col md:flex-row items-center ">
            <div className="flex items-center gap-3 text-xl font-bold">
              <input type="checkbox" defaultChecked />
              {isChecked.length} {isChecked.length > 1 ? "Files" : "File"}{" "}
              Selected
            </div>

            <DeleteButton isChecked={isChecked} handleDelete={deleteImage} />
          </div>
        ) : (
          <div className="px-3 font-semibold text-2xl"> Gallery </div>
        )}
      </div>
    </>
  );
};

export default ImageHeader;
