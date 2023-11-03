const DeleteButton = ({ isChecked, handleDelete }) => {
  return (
    <button className="text-red-600" onClick={() => handleDelete(isChecked)}>
      {isChecked.length > 1 ? "Delete Files" : "Delete File"}
    </button>
  );
};

export default DeleteButton;
