const play = document.querySelector('.play')
      const bgvideo = document.querySelector('.bg-video')
      const text = document.querySelector('.music-text')
      const music = document.querySelector('.music')
      let icon = document.querySelector('#icon')


      const list = document.querySelector('.list')
      const list2 = document.querySelector('.list2')
      const song1 = document.querySelector('.song1')
      const song2 = document.querySelector('.song2')
      const song3 = document.querySelector('.song3')
      const song4 = document.querySelector('.song4')

      
     function playMusic(){
        
     }
      
     const songs = [
      "./resources/media/video/The Weeknd - Call Out My Name (Official Video).mp4",
      "./resources/media/video/The Weeknd - Die For You.mp4",
      "./resources/media/video/The Weeknd - Earned It (from Fifty Shades Of Grey) (Official Video - Explicit).mp4",
      "./resources/media/video/The Weeknd - Save Your Tears (Official Music Video).mp4"
    ]

     let song_title = "Call out my Name"
     song1.addEventListener('click',()=>{
        bgvideo.src = songs[0]
        song_title = song1.textContent
        
        song1.style.color = "red"
        song2.style.color = "white"
        song3.style.color = "white"
        song4.style.color = "white"
    })

    song2.addEventListener('click',()=>{
        bgvideo.src = songs[1]
        song_title = song2.textContent
        song1.style.color = "white"
        song2.style.color = "red"
        song3.style.color = "white"
        song4.style.color = "white"
    })

    song3.addEventListener('click',()=>{
        bgvideo.src = songs[2]
        song_title = song3.textContent
        song1.style.color = "white"
        song3.style.color = "red"
        song2.style.color = "white"
        song4.style.color = "white"
    })

    song4.addEventListener('click',()=>{
        bgvideo.src = songs[3]
        song_title = song4.textContent
        song1.style.color = "white"
        song4.style.color = "red"
        song3.style.color = "white"
        song2.style.color = "white"
    })


     
      let i = 2
      icon.addEventListener('click',()=>{
        if (i %2 ==0){
          bgvideo.style.opacity = "100"
          bgvideo.play()
          list.style.opacity = "0"
          list2.style.opacity = "0"

          list.style.pointerEvents = "none"
    

          icon.className = "fa-regular fa-circle-pause"
          i++
        }else{
          bgvideo.style.opacity = "0"
          bgvideo.pause()

          list.style.opacity = "100"
          list.style.pointerEvents = "all"
          list2.style.opacity = "100"

          icon.className = "fa-regular fa-circle-play"
          i++
        }
        text.textContent = song_title
      })

      bgvideo.addEventListener("ended",()=>{
        icon.className = "fa-regular fa-circle-pause"
        text.textContent = "Click to play music"
      })
