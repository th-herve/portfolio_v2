const Contributions = () => {
  const arr = new Array(365).fill("");

  return (
    <div className="grid grid-rows-7 grid-flow-col gap-2">
      {arr.map((_, i) => (
        <div key={i} className="size-[10px] bg-gray-800" />
      ))}
    </div>
  );
};

export default Contributions;
