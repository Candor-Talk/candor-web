import React from 'react'
import ReactPlayer from 'react-player'
import './responsive-player.css'


const ResponsivePlayer = () => {
      return (
        <div className='player-wrapper'>
          <ReactPlayer
            className='react-player'
            url='https://stream.mux.com/emyyISpvcTTP021K31v87aGt601OokNx01z9LtBobqTnt00.m3u8'
            width='100%'
            height='100%'
            controls={true}
          />
        </div>
      )
  }


  export default ResponsivePlayer