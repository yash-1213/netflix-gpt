const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[20%] px-12 absolute text-white bg-gradient-to-r from-black aspect-video">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/3">{overview}</p>
      <div className="">
        <button className="py-2 px-8 bg-slate-100 text-black mr-2 rounded-md hover:bg-opacity-80">Play</button>
        <button className="py-2 px-8 bg-gray-500 text-black mr-2 rounded-md hover:bg-opacity-60">More Info</button>
      </div>
    </div>
  );
};

export default VideoTitle;
