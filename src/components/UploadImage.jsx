const UploadImage = () => {
  return (
    <>
      <div className="max-w-5xl mx-auto w-full h-full">
        <label className="w-full h-full flex flex-col  justify-center items-center px-4 py-6 bg-slate-100 text-blue rounded-lg  border-2 border-dotted cursor-pointer">
          <svg
            className="w-8 h-8"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
          </svg>
          <span className="mt-2 text-base leading-normal">Add Image</span>
          <input type="file" className="hidden" />
        </label>
      </div>
    </>
  );
};

export default UploadImage;
