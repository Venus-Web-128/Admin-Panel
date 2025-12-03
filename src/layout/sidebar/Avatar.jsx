const Avatar = ({ name, imagePath }) => {
  return (
    <div className="flex flex-col items-center py-4">
      <img src={imagePath} alt={name} className="w-12 h-12 rounded-full" />
      <span className="mt-2 text-sm">{name}</span>
    </div>
  );
};


export default Avatar;
