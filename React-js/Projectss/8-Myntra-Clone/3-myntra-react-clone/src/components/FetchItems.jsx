import { useSelector } from "react-redux";

function FetchItems(){
    const fetchStatus = useSelector((store)=>store.fetchStatus);
    return  <>
                <div>
                    Fetch Done: {fetchStatus.fetchDone}
                    Currently Fetching: {fetchStatus.currentlyFetching}
                </div>
            </>
}

export default FetchItems;