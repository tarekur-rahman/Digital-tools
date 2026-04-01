

const Carddata = ({active,setActive}) => {
   
    return (
        <div className=' w-[85%] md:w-[75%] mx-auto my-10 mt-20 space-y-5 text-center'>
            <h2 className=' text-3xl md:text-4xl font-bold text-center'>Premium Digital Tools</h2>
            <p className=' text-center md:w-[50%] mx-auto'> Choose from our curated collection of premium digital products designedto boost your productivity and creativity.</p>

            <div className="btn-div">
                <button onClick={ ()=> setActive("select")} className={`btn ${active==="select"? "bg-blue-700 text-white" : " btn "} rounded-2xl  `}>Products</button>
                <button onClick={ ()=>setActive("cart")} className={`btn ${active==="cart"? "bg-blue-700 text-white" : "btn"} rounded-2xl ml-3`}>Cart <span>(0)</span></button>
            </div>
        </div>
    );
};

export default Carddata;