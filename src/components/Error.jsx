export const Error = ({mensaje}) => {
  return (
    <div className="bg-red-800 text-white text-center p-3 uppercase rounded-md font-bold mb-3">
      <p>{mensaje}</p>
    </div>
  );
};
