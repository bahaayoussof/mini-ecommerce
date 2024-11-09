const InfoComponent = ({ info, icon }) => {
  return (
    <div className="flex h-72 gap-2 items-center justify-center font-bold text-lg text-gray-500">
      {icon}
      <h2>{info}</h2>
    </div>
  );
};

export default InfoComponent;
