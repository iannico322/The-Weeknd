const play = document.querySelector('.play')
      const bgvideo = document.querySelector('.bg-video')
      const text = document.querySelector('.music-text')
      const music = document.querySelector('.music')
      let icon = document.querySelector('#icon')

      const song1 = document.querySelector('.song1')
      const song2 = document.querySelector('.song2')
      const song3 = document.querySelector('.song3')
      const song4 = document.querySelector('.song4')

     function playMusic(){
        
     }
      

     let song_title = "Call out my Name"
     song1.addEventListener('click',()=>{
        bgvideo.src = "./resources/media/video/The Weeknd - Call Out My Name (Official Video).mp4"
      
    })

    song2.addEventListener('click',()=>{
        bgvideo.src = "./resources/media/video/The Weeknd - Die For You.mp4"
        song_title = song2.textContent
        
        song2.style.color = "red"
    })


     
      let i = 2
      icon.addEventListener('click',()=>{
        if (i %2 ==0){
          bgvideo.style.opacity = "100"
          bgvideo.play()
          icon.className = "fa-regular fa-circle-pause"
          i++
        }else{
          bgvideo.style.opacity = "0"
          bgvideo.pause()
          icon.className = "fa-regular fa-circle-play"
          i++
        }
        text.textContent = song_title
      })

      bgvideo.addEventListener("ended",()=>{
        icon.className = "fa-regular fa-circle-pause"
        text.textContent = "Click to play music"
      })
