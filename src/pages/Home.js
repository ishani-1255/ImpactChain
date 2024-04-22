
import React from 'react';
function Home(){
return(
   
    <div>
    
    <div  
    style ={{backgroundImage : "url('https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
    }}
    
    className=" bg-cover  h-[580px] text-gray-300 text-center px-20 py-4  flex flex-col"  >
      <div className="  flex items-center justify-center">     
        <h1 className="mt-[220px]  pt-4 pb-4 text-4xl font-bold font-serif">Make a Difference Today</h1>
        </div>
        <div className="flex items-center justify-center">
      <div className="flex items-center justify-center bg-[#FF7133] bg-opacity-75 h-10 w-24  rounded-md mb-5  px-[60px] py-8   ">
        <p className=' font-sans text-xl'>Donate</p>
      </div>
      </div>
     
    
  </div>

  <div className = " bg-white h-[500px] flex flex-row space-x-[60px] justify-center items-center">
      <div className = " bg-[#FF7133]  w-1/3 h-[350px] font-mono flex flex-col ">
        <p className='text-2xl px-10 text-wrap pt-10'>Served Over </p>
        
        <p className='text-6xl px-10 text-wrap pt-6'>1,321,901</p>
        
        <p className='text-2xl px-10 text-wrap pt-7'>Children in 150 Countries.</p>
        <div className = " bg-white h-[20px] mt-8">

        </div>
      </div>
     
      <div className = " bg-white w-1/2 h-[350px] mr-[55px] font-sans" >
        <p className='text-6xl font-serif text-wrap'> What We Do ?</p>
        <br/>
        <p className='text-xl text-wrap'>Through our platform, we provide a seamless and transparent way for donors to discover, 
          support, and engage with a wide range of impactful projects and initiatives. 
          <br />
          <br/>
          We empower NGOs by offering them a platform to showcase their work, connect with potential 
          donors, and access the resources they need to fulfill their missions.</p>

          <div className = " bg-[#FF7133] w-[140px] h-[40px] mt-8  font-sans text-white shadow-xl " > 
          <p className='pt-2 px-4 pb-2 pl-5 text-wrap'>LEARN MORE</p>
          </div>

      </div>
      </div> 

      <div className='bg-gray-100 h-[800px] flex flex-col  items-center pt-10' >
        <p className='text-4xl font-serif mb-6 mt-5' >  Latest Fundraisers</p>
        <p className='text-xl font-serif mb-2 pb-6'> A short glimpse of some of our latest fundraisers. </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mr-5 ml-5 mt-10">
      
        <div className="bg-white shadow-md flex flex-col justify-start">
        <img src="https://images.unsplash.com/photo-1605786184846-7f9ca4e461a1?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        alt="Water is Life" className="w-full " />
          <h3 className="text-lg font-semibold font-sans px-2 py-2 mb-2">Water Is Life</h3>
          <p className="text-gray-600 px-2 py-2 mb-4">Access to clean water is a fundamental human right, 
          yet millions around the world still lack this basic necessity. Our 'Water is Life' 
          fundraiser aims to provide clean and safe drinking water to communities in need</p>
          <button className="text-[#FF7133]  px-4 py-2 mt-auto   hover:text-blue-800 transition duration-300">Donate Now</button>
        </div>
        <div className="bg-white flex flex-col justify-start shadow-md">
        <img src="https://plus.unsplash.com/premium_photo-1663126288619-f8ef33cd006b?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        alt="Water is Life" className="w-full " />
          <h3 className="text-lg px-2 py-2 font-semibold mb-2">Children Needs Education</h3>
          <p className="text-gray-600  px-2 py-2 mb-4">Education is key to breaking the cycle of poverty and empowering 
          future generations. Our 'Children Needs Education' fundraiser is dedicated to providing quality 
          education to underprivileged children.</p>
          <button className="text-[#FF7133]  px-4 py-2 mt-auto  hover:text-blue-800 transition duration-300">Donate Now</button>
        </div>
        <div className="bg-white flex flex-col justify-start shadow-md">
        <img src="https://plus.unsplash.com/premium_photo-1683140516842-74c378a43d76?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        alt="Water is Life" className="w-full " />
          <h3 className="text-lg px-2 py-2 font-semibold mb-2">Need Shelter</h3>
          <p className="text-gray-600 px-2 py-2 mb-4">A safe and stable home is essential for individuals 
          and families to thrive. Our 'Need Shelter' fundraiser aims to provide 
          shelter to those who are homeless or living in inadequate housing conditions. </p>
          <button className="text-[#FF7133] px-2 py-2 mt-auto  hover:text-blue-800 transition duration-300">Donate Now</button>
        </div>
        <div className="bg-white flex flex-col justify-start shadow-md">
        <img src="https://images.unsplash.com/photo-1505155485412-30b3a45080ec?q=80&w=2681&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        alt="Water is Life" className="w-full " />
          <h3 className="text-lg font-semibold px-2 py-2 mb-2">Refugees Needs Fund</h3>
          <p className="text-gray-600 px-2 py-2 mb-4">Millions of people worldwide have been displaced leaving them in urgent need of assistance.Our 'Refugees Needs Fund' 
          fundraiser is dedicated to providing essential aid to refugees and displaced populations.</p>
          <button className="text-[#FF7133]  px-4 py-2 mt-auto  hover:text-blue-800 transition duration-300">Donate Now</button>
        </div>
      </div>
      </div>


      <div className='bg-white h-[600px] flex flex-col  items-center pt-10' >
        <p className='text-4xl font-serif mb-6 mt-5' >  Latest Donars</p>
        <p className='text-xl font-serif mb-2 pb-6'> A short glimpse of some of our latest donars. </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mr-5 ml-5 mt-10">
      
        <div className="bg-white flex flex-col justify-center items-center">
        <img src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?q=80&w=2676&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        alt="Water is Life" className="w-full " />
          <h3 className="text-lg font-semibold font-sans px-2  mb-2">Jorge Smith</h3>
          <p className="text-gray-600 px-2  mb-4">Donated Just now</p>
          <p className="text-black  px-4    hover:text-blue-800 transition duration-300">Donated 
          <span className="text-[#FF7133]"> $900</span> </p>
        </div>
        <div className="bg-white flex flex-col justify-center items-center">
        <img src="https://plus.unsplash.com/premium_photo-1671823917954-dc943c1bd9df?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        alt="Water is Life" className="w-full " />
          <h3 className="text-lg px-2  font-semibold mb-2">Christine Charles</h3>
          <p className="text-gray-600 px-2 mb-4">Donated 1 hour ago</p>
          <p className="text-black  px-4  hover:text-blue-800 transition duration-300">Donated 
          <span className="text-[#FF7133]"> $150</span> </p>
        </div>
        <div className="bg-white flex flex-col justify-center items-center">
        <img src="https://images.unsplash.com/photo-1537511446984-935f663eb1f4?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        alt="Water is Life" className="w-full " />
          <h3 className="text-lg px-2  font-semibold mb-2">Albert Sluyter</h3>
          <p className="text-gray-600 px-2  mb-4">Donated 4 hours ago </p>
          <p className="text-black  px-4 hover:text-blue-800 transition duration-300">Donated 
          <span className="text-[#FF7133]"> $1200</span> </p>
        </div>
        <div className="bg-white flex flex-col justify-center items-center">
        <img src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        alt="Water is Life" className="w-full " />
          <h3 className="text-lg font-semibold px-2  mb-2">Andrew Holloway</h3>
          <p className="text-gray-600 px-2  mb-4">Donated 9 hours ago</p>
          <p className="text-black  px-4 hover:text-blue-800 transition duration-300">Donated 
          <span className="text-[#FF7133]"> $200</span> </p>
        </div>
      </div>
      </div>

      <div  
    style ={{backgroundImage : "url('https://images.unsplash.com/photo-1517488629431-6427e0ee1e5f?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
    }} className=" bg-cover  h-[500px] ">

      <div className='bg-[#FF7133] bg-opacity-75 w-full h-[500px] grid grid-cols-2 gap-5'>
      <div className ='flex justify-center items-center'>
      
      <img src="https://images.unsplash.com/photo-1517488629431-6427e0ee1e5f?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Volunteer" className="w-[500px] h-[360px] rounded-md shadow-xl " />
        
        </div>
        <div className=" p-4">
  <h2 className="text-xl text-white font-mono mt-16 mb-4">Be a Volunteer Today</h2>
  <form>
    <div className="mb-4">
      
      <input type="text" id="name" name="name" className="w-3/4 border border-white  px-3 py-2 bg-transparent placeholder-font italic placeholder-white" placeholder="Enter your name" />
    </div>
    <div className="mb-4">
     
      <input type="email" id="email" name="email" className="w-3/4 border border-white  px-3 py-2 bg-transparent placeholder-font italic placeholder-white" placeholder="Enter your email" />
    </div>
    <div className="mb-4">
      
      <textarea id="message" name="message" rows="4" className="w-3/4 border border-white  px-3 py-2 bg-transparent placeholder-font italic placeholder-white " placeholder="Enter your message" ></textarea>
    </div>
    <button type="submit" className="bg-black text-white py-2  px-6  font-mono hover:bg-white hover:text-black">SEND</button>
  </form>
</div>
    </div>
    </div>

      <footer className="bg-[#54504E] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
            <div className="footer-info">
              <h3 className="text-lg font-sans mb-4">About Us</h3>
              <p className="text-sm font-sans">
              Through our platform, we provide a seamless and transparent way for donors to discover, 
              support, and engage with a wide range of impactful projects and initiatives. 
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
            <div className="footer-contact font-sans">
              <h3 className="text-lg font-sans mb-4">Contact Us</h3>
              <p className="text-sm">Email: donate@yourcharity.org</p>
              <p className="text-sm">Phone: +1234567890</p>
              <p className="text-sm">Address: 123 Charity Ave, City, Country</p>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <p className="text-sm">&copy; {new Date().getFullYear()} Your Charity. All rights reserved.</p>
        </div>
      </div>
    </footer>
</div>



)
}
export default Home;