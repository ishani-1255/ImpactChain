import img from '../images/donate.avif'
function Home(){
return(
    <div className="">
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="bg-gray-300 mt-20 text-black text-center bg-opacity-75 rounded-lg px-20 py-4">
      <h1 className="mt-4  pt-4 pb-4 text-4xl font-bold font-serif">Make a Difference Today</h1>
      <div className="flex items-center justify-center bg-orange-400 bg-opacity-65 h-10 w-24 rounded-md mb-5  px-20 py-8 mx-40  mt-5">
        <p className=' font-sans text-xl'>Donate</p>
      </div>
    </div>
  </div>
  <img src={img} alt="Donate" className="h-screen w-full" />
</div>

)
}
export default Home;