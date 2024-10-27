import { useSelector } from "react-redux";

const FavList=()=>{

    const FavourateData = useSelector(store=>store.fav.item);
    console.log(FavourateData);
    return(
        <h1> Hello {
           
        } </h1>
        
    )
}

export default FavList;