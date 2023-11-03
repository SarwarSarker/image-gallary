const Checkbox = ({ hoverIndex, isChecked, handleCheckbox, index }) => {
  return (
    <>
      <input
        type="checkbox"
        className={`absolute top-6 left-6 cursor-pointer z-10 ${
          hoverIndex === index || isChecked.includes(index) ? "" : "hidden"
        }`}
        value={index}
        checked={isChecked.includes(index)}
        onChange={() => handleCheckbox(index)}
      />
    </>
  );
};

export default Checkbox;
