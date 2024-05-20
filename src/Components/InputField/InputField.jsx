const InputField = ({ labelName, labelId, ...otherProps }) => {
  return (
    <div className="mb-4">
      <label className="font-bold block text-sm mb-2" htmlFor={labelId}>
        {labelName}:
      </label>

      <input
        id={labelId}
        className="block w-full border border-gray-300 rounded-md px-4 py-2 focus:border-secondary focus:ring-secondary"
        {...otherProps}
        required
      />
    </div>
  );
};

export default InputField;
