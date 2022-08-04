import {useState} from "react";

const EventsNews = () => {
    const [showNews, setShowNews] = useState(false);

    return (
            <div className="flex justify-center mt-4">
                <div className="flex gap-2 text-white">
                    <button style={showNews ? {backgroundColor: "#dadada"}: {backgroundColor: '#000'}} className={"px-7 py-3 rounded-md hover:bg-blue-600"}>
                        Events
                    </button>
                    <button className="bg-blue-800 px-7 py-3 rounded-md hover:bg-blue-600" >
                        News
                    </button>
                </div>
            </div>
    );
};

export default EventsNews;
