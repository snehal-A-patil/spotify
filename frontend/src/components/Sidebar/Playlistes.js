import React from 'react'

function Playlistes() {
  return (
    <div>
      <nav className='mx-6 mt-2 py-2 flex-auto border-t order-white border-opacity-20 overflow-y-auto h-80'>
        <ul>
    {
        new Array(50).fill().map((_, index)=>( 
        <li key={index}>
            <div className='text-sm text-gray-500 hover:text-white flex items-center h-8'>
                My Playlist
            </div>
        </li>
            ))
        }
        </ul>
      </nav>
    </div>
  )
}

export default Playlistes
