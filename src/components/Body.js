import Header from "./Header";

const Body = () =>
    {
        return (
           <div>
            <div className="flex flex-column">
                <Header/>
            </div>
            <p className="font-bold text-teal-800 mt-20">Namste Everyone, This is Body</p>
           </div>
        )
    };
    
    export default Body;