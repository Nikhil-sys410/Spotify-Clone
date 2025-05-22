import Navbar from "./Navbar";
import { albumsData } from '../assets/assets'

const DisplayHome = () => {
    return (
        <>
        <Navbar />
        <div className="my-5 font-bold text-2xl">
            {albumsData.map((item,index)=>(<AlbumItem/>))}
        </div>
        </>
    );
}

export default DisplayHome;