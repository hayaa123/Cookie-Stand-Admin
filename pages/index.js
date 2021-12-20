import Head from 'next/head'
import { useState } from 'react';
const Home=()=> {
  const [stand, setStand] = useState([]);
  const [location ,setLocation] = useState("");
  const [min,setMin] = useState(0);
  const [max,setMax] = useState(0);
  const [avg,setAvg] = useState(0);
  const [latestStand ,SetLatestStand] = useState();
  const SubmitHandeler =(e)=>{
    e.preventDefault();
    setMin(e.target.min.value)
    setMax(e.target.max.value)
    setLocation(e.target.location.value)
    setAvg(e.target.avg.value)
    let tempStand = {
      "location":e.target.location.value,
      "minCustomer": e.target.min.value ,
      "maxCustomer": e.target.max.value ,
      "avgCookies": e.target.avg.value
    }
    setStand([...stand,tempStand]);
    SetLatestStand(tempStand)
  }
  return (
    <>
      <Head>
        <title>Cookie stand</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex h-16 bg-amber-500 items-center">
        <h1 className="text-3xl font-semibold px-4">Cookie Stand Admin</h1>
      </header>
      <main >
        <form onSubmit={SubmitHandeler} className="grid w-3/4 bg-amber-300 mx-auto mt-11 rounded-md	">
          <h1 className='text-center text-xl p-3'>
            Create Cookie Stand
          </h1>
          <div className=' mx-auto w-full'>
          <label for="location" className='w-2/12 px-4 text-center'>Location</label>
          <input type="text" name="location" className='w-10/12'/>
          </div>
          <div className='inline flex justify-evenly	py-10'>
          <div className='inline flex flex-col'>
          <label for="min">Minimun Customer per Hour</label>
          <input type="text" name="min"/>
          </div>
          <div className='inline flex flex-col'>
          <label for="max">Maximum Customer per Hour</label>
          <input type="text" name="max"/>
          </div>
          <div className='inline flex flex-col'>
          <label for="avg">Avarage Cookie Sale</label>
          <input type="text" name="avg" />
          </div >
          <input type="submit" name ="Create" className='w-1/4 bg-amber-600'/>  
          </div>
        </form>
        <p className='text-center my-7'>
          Report table comming soon ... 
        </p>
        <p className='text-center'>
          {JSON.stringify(latestStand)}
        </p>
      </main>

      <footer className="bg-amber-500 mt-20 h-10">
      <p> &copy; 2021</p>
      </footer>
    </>
  )
}
export default Home