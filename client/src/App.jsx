import './App.css'

function App() {
  return (
    <div>
      <header className='p-4 flex justify-between'>
        <a href="" className='flex items-center gap-1'>
          <svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
            width="50px" height="50px" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve">
            <g>
              <path fill="#B4CCB9" d="M56,28c0,11.047-8.953,20-20,20H16V28c0-11.047,8.953-20,20-20h20V28z" />
              <g>
                <path fill="#394240" d="M36,0C20.535,0,8,12.535,8,28v22.344l-6.828,6.828c-1.562,1.562-1.562,4.094,0,5.656
			          C1.953,63.609,2.977,64,4,64s2.047-0.391,2.828-1.172L13.656,56H36c15.465,0,28-12.535,28-28V0H36z M56,28
			          c0,11.047-8.953,20-20,20H16V28c0-11.047,8.953-20,20-20h20V28z"/>
                <path fill="#394240" d="M32,20c0-2.211-1.789-4-4-4s-4,1.789-4,4v14.344l-2.828,2.828c-1.562,1.562-1.562,4.094,0,5.656
			          C21.953,43.609,22.977,44,24,44s2.047-0.391,2.828-1.172l2.824-2.824H44c2.211,0,4-1.789,4-4s-1.789-4-4-4h-6.348l13.176-13.176
			          c1.562-1.562,1.562-4.094,0-5.656s-4.094-1.562-5.656,0L32,26.344V20z"/>
              </g>
            </g>
          </svg>
          <span className='italic text-xl'>Leafy</span>
        </a>
        <div className='flex border border-gray-400 rounded-full py-2.5 px-1 shadow-md shadow-gray-300'>
          <div className='px-2'>About Us</div>
        </div>
        <div className='flex border border-gray-400 rounded-full py-2.5 px-1 shadow-md shadow-gray-300'>
          <div className='px-2'>How we work</div>
        </div>
        <div className='flex border border-gray-400 rounded-full py-2 px-4 shadow-md shadow-gray-300'>
          <div className='px-2'>Search</div>
          <button className='bg-primary text-white p-1 rounded-full'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
        </div>
        <div className='flex items-center gap-2 border border-gray-400 rounded-full py-3 px-4 shadow-md shadow-gray-300'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          <div className='bg-gray-500 text-white rounded-full border border-gray-500 overflow-hidden'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>

          </div>
          
        </div>
      </header>
    </div>
  )
}

export default App

//19:01