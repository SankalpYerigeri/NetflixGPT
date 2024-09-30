const VideoTitle = ({title, overview}) =>
{
    return (
        <div className="w-screen aspect-video pt-[10%] px-24 absolute text-white bg-gradient-to-r from-black">
            <h1 className="text-6xl font-bold">{title}</h1>
            <p className="text-lg w-1/4 py-6">{overview}</p>
            <div>
                <button className="bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg"> ▶️ Play Now</button>
                <button className=" mx-2 bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg">More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle;