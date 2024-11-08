const InfoComponent = ({ info }) => {
  return (
    <div className="flex h-20 items-end justify-center font-bold text-lg text-gray-500">
      <h2>{info}</h2>
    </div>
  );
};

export default InfoComponent;
