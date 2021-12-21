

const main =(props)=>{
    let SubmitHandeler  = props.SubmitHandeler
    let latestStand = props.latestStand
    return (
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
          <div className='inline flex flex-col '>
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
      </main>
    )
}

export default main 