getUserData()

async function getUserData() {

  // подтягиваем данные из папки с проектом:
  try {
    const response = await fetch('./user1.json')
    const userData = await response.json();

    // проверяем полученные данные

    userPage()
    
    function userPage() {

        clearTimeout()

        const user_main = document.querySelector('.my-page')

        const friendsCommon = document.querySelector('.friendlist')
        const friendsContainerLength = 6

        const randomFriends = Object.values(userData.friends)
        .sort(() => 0.5 - Math.random())
        .slice(0, friendsContainerLength)
        
        

        const renderFriends = randomFriends
        .map(friend => 
        `<div class="friend">
                    <img src=${friend.userpic}>
                    <a class="name">
                        ${friend.name}
                    </a>
        </div>`)
        .join(" ")

        const languagesContent = userData.languages
        .map(lang => `<a href="#" class='language'>${lang.language}</a>`)
        .join(', ');
        
        const userQuotes = userData.quotes 
        .map(quote => `<a href="a" class="content">${quote.quote}</a> </br>`)
        .join("")

        const contentMovies = userData.movies 
        .map(movie => `<a href="a" class="content">${movie.movie}</a>`)
        .join(", ")

        
        

        function possessiveName() {

          const usrFirstName = userData.username.firstname
          const lastCharacter = usrFirstName[usrFirstName.length - 1]

          if (lastCharacter === 'н' || lastCharacter === 'м' || lastCharacter === 'р' || lastCharacter === 'л' || lastCharacter === 'д' || lastCharacter === 'с' || lastCharacter === 'к') {
            return `Подписчики ${usrFirstName + 'а'}`
          } else if (lastCharacter === 'й') {
            return `Подписчики ${usrFirstName.slice(0, -1) + 'я'}`

          }
        return
        }

        

        user_main.innerHTML = `
        <div class="user-title">
          <h2 class="h2-title">${userData.username.firstname} ${userData.username.lastname}</h2>
        </div>


        <div class="main-page">

          <div class="user-iteractions">

            <div class="user-picture">
              <img alt="фотография пользователя" class="user-profile-picture" src="${userData.avatar}">
            </div>

            <div class="follow-button">
              <button class="follow">Подписаться</button>
            </div>

            <div class="followers-button">
              <a href='#' class="followers" id="followers-profile-name">${possessiveName()}</a>
              <a href='#' class="followers" id="followers-counter">${userData.followers.length}</a>
            </div>

            <div class="send-gift-button">
              Отправить подарок
            </div>

            <div class="friends-block">

              <div class="friendlist-header">

                <div class="friends-link">
                  <a href="#" class="friendlist-link">Друзья</a>
                  <a href="#" class="feed-link">новости</a>
                </div>

                <div class="friends-counter">
                  <a href="#" class="friendlist-counter" id="friends-count">719 друзей</a>
                </div>

              </div>

              <div class="friendlist">

                ${renderFriends}

              </div>


              <div class="friendlist-header">

                <div class="friends-link">
                  <a href="#" class="friendlist-online-link">Друзья онлайн</a>
                </div>

                <div class="friends-counter">
                  <a href="#" class="friendlist-counter" id="online-count">${userData.friends.length}</a>
                </div>

              </div>

              <div class="friendlist-online">

                ${renderFriends}

              </div>
            </div>
            

          </div>



          <div class="user-info">

            <div class="user-name">
              <h2 class="account-name">${userData.username.firstname} ${userData.username.lastname}</h2>
              <p class="bio">${userData.bio}</p>
            </div>

            <div class="info-place">

              <div class="info-row">
                <div class="label">
                  День рождения:
                </div>

                <div class="content">
                  <a href="#" class="user-birthday">${userData.birthday.day} ${userData.birthday.month} ${userData.birthday.year}.</a>
                </div>
              </div>


              <div class="info-row">
                <div class="label">
                  Место работы:
                </div>

                <div class="content">
                  <a href="#" class="user-job">${userData.workplace}</a>
                </div>

              </div>


              <div class="info-row"> 
                <div class="label">

                  Языки:

                </div>


                <div class="content" id="languages-container">

                    ${languagesContent}

                </div>
              </div>

            </div>

            <div class="hidden-info-spoiler">
              <a class="info-spoiler-button">Показать подробную информацию</a>
            </div>

            <div class="hidden-info-toggle">
              
              <div class="contacts-info">


                <h3 class="info-header">Контактная информация</h3>


                  <div class="info-row" id="user-city-container">
                    <div class="label">
                      Город:
                    </div>
                    <div class="content" id="user-city-name">
                      ${userData.city}
                    </div>
                  </div>

                  <div class="info-row" id="user-mobile-container">
                    <div class="label">
                      Моб. телефон:
                    </div>
                    <div class="content" id="user-mobile-number">
                      ${userData.mobile}
                    </div>
                  </div>

                  <div class="info-row" id="user-messenger-container">
                    <div class="label">
                      telegramm:
                    </div>
                    <div class="content" id="user-messenger-nickname">
                      ${userData.telegram}
                    </div>
                  </div>

                  <div class="info-row" id="user-website-container">
                    <div class="label">
                      Сайт:
                    </div>
                    <div class="content" id="user-website">
                      ${userData.github}
                    </div>
                  </div>


                </div>

              <div class="personal-info">


                <h3 class="info-header">Личная информация</h3>

                <div class="info-row" id="user-activity-container">
                  <div class="label">
                    Деятельность:
                  </div>
                  <div class="content" id="user-activity">
                    ${userData.activity}
                  </div>
                </div>

                <div class="info-row" id="user-hobbies-container">
                  <div class="label">
                    Увлечения:
                  </div>
                  <div class="content" id="user-hobbies">
                    ${userData.hobbies}
                  </div>
                </div>

                <div class="info-row" id="user-favorite-quotes-container">
                  <div class="label">
                    Любимые фильмы:
                  </div>
                  <div class="content" id="user-favorite-quotes">
                    ${contentMovies}
                  </div>
                </div>

                <div class="info-row" id="user-music-genres-container">
                  <div class="label">
                    Любимая музыка:
                  </div>
                  <div class="content" id="user-music-genres">
                    ${userData.musicGenres}
                  </div>
                </div>

                <div class="info-row" id="user-favorite-quotes-container">
                  <div class="label">
                    Любимые цитаты:
                  </div>
                  <div class="content" id="user-favorite-quotes">
                    ${userQuotes}
                  </div>
                </div>


              </div>

            </div>

            <div class="gallery">

              <div class="gallery-header">
                <a href="#" class="image-counter">222 фотографии</a>
                <a href="#" class="gallery-link">все</a>
              </div>

              <div class="image-row">
                <img class="gallery-item">
                <img class="gallery-item">
                <img class="gallery-item">
                <img class="gallery-item">
              </div>

            </div>

            <div class="user-wall">

              <div class="wall-header">
                <a href="#" class="posts-counter">212 записей</a>
              </div>

              <div class="add-post">


                <form class="post-add-form">
                  <textarea class="input-post"></textarea>
                </form>

                <div class="post-attachments-add-button">
                  <button class="post-button">
                    Опубликовать
                  </button>

                  <div class="post-attachments">
                    <a href="#" class="attachment-button">
                    Прикрепить
                    </a>
                  
                    <div class="attachment-menu">
                      <ul class="attachment-list">
                        <li class="attachment"><a>Фотография</a></li>
                        <li class="attachment"><a>Видеозапись</a></li>
                        <li class="attachment"><a>Аудиозапись</a></li>
                        <li class="attachment" id="attach-graffiti"><a>Граффити</a></li>
                        <li class="attachment"><a>Опрос</a></li>
                        <li class="attachment"><a>Файл</a></li>
                      </ul>
                    </div>

                    <dialog id="graffiti-overlay">
                      <div class="graffiti-content">
                        <canvas id="drawing-place" width="600" height="300">
                        </canvas>
                        <button id="clear">
                          очистить
                        </button>
                        <button id="drawing-save">
                          сохранить
                        </button>
                        <button id="drawing-close">
                          закрыть
                        </button>
                      </div>
                    </dialog>

                  </div>
                </div>
                  
                  
              </div>


            </div>

            <div class="wall-content">


                

                  

                

                

                
              
                
              
              
            </div>
        
              

            

        </div>

        `
        const titleName = document.querySelector('.h2-title')
        titleName.innerHTML = `${userData.username.firstname} ${userData.username.lastname}`

        const infoToggle = document.querySelector('.info-spoiler-button')
        const hiddenContainer = document.querySelector('.hidden-info-toggle')

        const attachBtn = document.querySelector('.attachment-button')
        const attachments = document.querySelector('.attachment-menu')
        const attachmentsForm = document.querySelector('.post-attachments')


        attachBtn.addEventListener('mouseenter', () => {
          attachments.style.display = 'block'
        })
        attachmentsForm.addEventListener('mouseleave', () => {
          attachments.style.display = 'none'
        })

        infoToggle.addEventListener('click', (event) => {
          event.preventDefault();

          
          if (hiddenContainer.style.display === 'block') {
            hiddenContainer.style.display = 'none'
            infoToggle.textContent = 'Показать подробную информацию'
          } else {
            hiddenContainer.style.display = 'block'
            infoToggle.textContent = 'Скрыть подробную информацию'
          }
        })

        const userWall = document.querySelector('.wall-content')
        
    
        // массив с записями на стене
        let posts = [
            { id: 1, text: "Вернул стену!", date: "сегодня в 20:45" },
            { id: 2, text: "Стоякцизм — это сила.", date: "сегодня в 18:15" },
            { id: 3, text: "В аудиозаписях «Дневника Паз» из MGSV: The Phantom Pain повествуется вымышленная история, созданная травмированным разумом Веном Снейка. Героиня рассказывает о чудесном спасении, амнезии и мирной жизни на базе, призывая Снейка прекратить войну. Со временем её слова становятся путаными, появляются странные предчувствия и осознание своей иллюзорной природы. Это отражает внутреннюю борьбу Венома, пытающегося забыть ужасы прошлого, прощаясь с мечтой о спокойствии.", image: "https://sun9-15.userapi.com/s/v1/ig2/3xTGF3cvvdR0k005MwX46H2v4EpbNPWNRWS67GGElyDXGpDPNVrbGYyrOEatRL5z4x8W0ycxD1VfZp3PT2oAo-_C.jpg?quality=96&as=32x18,48x27,72x40,108x61,160x90,240x135,360x202,480x270,540x304,640x360,720x405,1080x607,1280x720,1440x810,1920x1080&from=bu&u=scv8p2GMiMt2YAU6UgIk7QdyMq2mcjYEN6qF1gpAJm0&cs=1920x0", date: "сегодня в 16:40" },
            { id: 4, text: "Залутал еву в пабге, зацените", image: "https://sun9-41.userapi.com/s/v1/ig2/pXCMwrZZQ2fNoX68s8ES1p2kd2uEUaTNiKe9zKTgGJmPYwpMyCyAU0Zl8CCTqtcSNpahjJtcWLlDRLiGrLTu9EcG.jpg?quality=95&as=32x18,48x27,72x40,108x61,160x90,240x135,360x202,480x270,540x304,640x360,720x405,1080x607,1280x720,1440x810,2560x1440&from=bu&u=1K1f9yNkcgKdlKDAheNKw9rjjsywzG717uJorUfCEnk&cs=2560x0", date: "сегодня в 15:30" },
            ];

        renderPosts()
        
        const createPostText = document.querySelector('.input-post')
        const deletePost = document.querySelector('.delete-post')

        const sendPost = document.querySelector('.post-button')
        sendPost.addEventListener('click', (event) => {
            event.preventDefault()
            createNewPost()
            renderPosts()
            createPostText.value = ''
        })

        function createNewPost() {

            const id = Date.now() + Math.random()
            const date = new Date()
            const day = `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`
            const time = `${date.getHours()}.${date.getMinutes()}`
            const postCreateTime = `${day} в ${time}`
            const newPost = {id: id, text: createPostText.value, date: `${date}`} // надо дописать в шаблон значения для аудио, видео и картинок
            createPostText.value.length > 0 ? posts.unshift(newPost) : console.log('поле пустое')
            
        }

        // оверлей для рисования
        const modalOpen = document.getElementById('attach-graffiti')
        modalOpen.addEventListener('click', paint_graffity)

        function paint_graffity() {

            const paintOverlay = document.getElementById('graffiti-overlay')
            paintOverlay.showModal()
            

            
            
            const modalClose = document.getElementById('drawing-close')
            


            

            modalClose.addEventListener('click', () => {
            paintOverlay.close()
            })
            
            const graffiti = document.getElementById('drawing-place')
            const ctx = graffiti.getContext('2d')
            const drawClear = document.getElementById('clear')
            const drawSave = document.getElementById('drawing-save')

            let drawing = false

            function save() {

                const id = Date.now() + Math.random()
                const date = new Date()
                
                const drawData = graffiti.toDataURL()
                posts.unshift({id: id, image: `${drawData}`, text: "", date: `${date}`})
                clearCanvas()
                renderPosts()
            
            }


            function start(e) {
            drawing = true
            draw(e)
            }

            function stop() {
            drawing = false
            ctx.beginPath()
            }

            function draw(e) {
            const rect = graffiti.getBoundingClientRect()

            if (drawing === true) {
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            ctx.lineWidth = 10
            ctx.lineHeight = 10

            ctx.strokeStyle = 'red'

            ctx.lineTo(x, y);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(x, y);
            
            function save() {
            const drawData = graffiti.toDataURL()
            posts.push(drawData)
            }

            }
            }

            function clearCanvas() {
            ctx.clearRect(0, 0, graffiti.width, graffiti.height)
            }

        
            graffiti.addEventListener('mousedown', start)
            graffiti.addEventListener('mousemove', draw)
            
            window.addEventListener('mouseup', stop)
            drawClear.addEventListener('click', clearCanvas)


            drawSave.addEventListener('click', save)
            drawSave.addEventListener('click', () => {
            paintOverlay.close()
            })
            
        }
        

        function renderPosts() {

        userWall.innerHTML = posts.map(post => 
        `<div class="post-genuinely" id="${post.id}">

                    <div class="userpic">
                    <img class="userpic-post" src="${userData.avatar}">
                    </div>

                    <div class="content-post">


                    <div class="username">${userData.username.firstname} ${userData.username.lastname} 

                    <button class="delete-post" data-id="${post.id}"> 
                        удалить пост
                    </button> 

                    </div> 

                    <div class="text-content">

                        ${post.text ? `<p class="user-content">${post.text}</p>` : ""}
                        ${post.image ? `<img class="content-picture" src="${post.image}">` : ""}
                        ${post.video ? `<img class="content-video" src="${post.video}">` : ""}
                        ${post.audio ? `<img class="content-audio" src="${post.audio}">` : ""}
                    
                    </div>

                    <div class="like-share-date">

                        <div class="date-time-container">
                        <p class="date-time">${post.date}</p>
                        </div>

                        <div class="like-share-container">
                        <div class="share">
                            поделиться
                        </div>
                        <div class="like">
                            Мне нравится
                        </div>
                        </div>
                        
                    </div>
                    


                    </div>
                
        </div>`)
        .join("")

        }
        
        userWall.addEventListener('click',(event) => {
        if (event.target.classList.contains('delete-post')) {
            const postId = Number(event.target.getAttribute('data-id'))
            posts = posts.filter(post => post.id !== postId)
            renderPosts()
        }
        })


        /////////// музыкальный плеер /////////////

       
    }

    function musicPage() {

      const musicData = userData.userMusic

        const mainSection = document.querySelector('.my-page')

        mainSection.innerHTML = 
        `
          <div id="music-player">

              <div class="mp3-player">
                <div class="mp3-control-buttons"> 
                  <button class="mp3-control" id="play-pause">
                      <svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_308_38)">
                      <path d="M11.303 7.24293L5.12024 11.3648C5.07632 11.394 5.02529 11.4108 4.9726 11.4133C4.9199 11.4158 4.8675 11.404 4.82099 11.3791C4.77448 11.3542 4.73559 11.3171 4.70848 11.2719C4.68136 11.2266 4.66702 11.1749 4.66699 11.1221V2.87843C4.66702 2.82567 4.68136 2.77391 4.70848 2.72866C4.73559 2.6834 4.77448 2.64635 4.82099 2.62145C4.8675 2.59655 4.9199 2.58473 4.9726 2.58725C5.02529 2.58977 5.07632 2.60654 5.12024 2.63576L11.303 6.7576C11.3429 6.78423 11.3757 6.82032 11.3983 6.86265C11.421 6.90498 11.4328 6.95225 11.4328 7.00026C11.4328 7.04828 11.421 7.09554 11.3983 7.13788C11.3757 7.18021 11.3429 7.21629 11.303 7.24293V7.24293Z"/>
                      </g>
                      <defs>
                      <clipPath id="clip0_308_38">
                      <rect width="14" height="14" fill="white"/>
                      </clipPath>
                      </defs>
                      </svg>
                  </button> 
                  <button class="mp3-control" id="previous">
                      <svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_308_48)">
                      <path d="M7.00023 6.22268L12.3803 2.63576C12.4242 2.60654 12.4753 2.58977 12.528 2.58725C12.5807 2.58473 12.6331 2.59655 12.6796 2.62145C12.7261 2.64635 12.765 2.6834 12.7921 2.72866C12.8192 2.77391 12.8335 2.82567 12.8336 2.87843V11.1221C12.8335 11.1749 12.8192 11.2266 12.7921 11.2719C12.765 11.3171 12.7261 11.3542 12.6796 11.3791C12.6331 11.404 12.5807 11.4158 12.528 11.4133C12.4753 11.4108 12.4242 11.394 12.3803 11.3648L7.00023 7.77785V11.1221C7.00021 11.1749 6.98587 11.2266 6.95875 11.2719C6.93163 11.3171 6.89274 11.3542 6.84623 11.3791C6.79972 11.404 6.74733 11.4158 6.69463 11.4133C6.64193 11.4108 6.5909 11.394 6.54698 11.3648L0.364232 7.24293C0.324286 7.21629 0.291533 7.18021 0.26888 7.13788C0.246227 7.09554 0.234375 7.04828 0.234375 7.00026C0.234375 6.95225 0.246227 6.90498 0.26888 6.86265C0.291533 6.82032 0.324286 6.78423 0.364232 6.7576L6.54698 2.63576C6.5909 2.60654 6.64193 2.58977 6.69463 2.58725C6.74733 2.58473 6.79972 2.59655 6.84623 2.62145C6.89274 2.64635 6.93163 2.6834 6.95875 2.72866C6.98587 2.77391 7.00021 2.82567 7.00023 2.87843V6.22268Z"/>
                      </g>
                      <defs>
                      <clipPath id="clip0_308_48">
                      <rect width="14" height="14" fill="white"/>
                      </clipPath>
                      </defs>
                      </svg>
                  </button> 
                  <button class="mp3-control" id="next">
                      <svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_308_53)">
                      <path d="M7.00033 7.77785L1.62024 11.3648C1.57632 11.394 1.52529 11.4108 1.4726 11.4133C1.4199 11.4158 1.3675 11.404 1.32099 11.3791C1.27448 11.3542 1.23559 11.3171 1.20848 11.2719C1.18136 11.2266 1.16702 11.1749 1.16699 11.1221V2.87843C1.16702 2.82567 1.18136 2.77391 1.20848 2.72866C1.23559 2.6834 1.27448 2.64635 1.32099 2.62145C1.3675 2.59655 1.4199 2.58473 1.4726 2.58725C1.52529 2.58977 1.57632 2.60654 1.62024 2.63576L7.00033 6.22268V2.87843C7.00035 2.82567 7.01469 2.77391 7.04181 2.72866C7.06893 2.6834 7.10781 2.64635 7.15433 2.62145C7.20084 2.59655 7.25323 2.58473 7.30593 2.58725C7.35863 2.58977 7.40965 2.60654 7.45358 2.63576L13.6363 6.7576C13.6763 6.78423 13.709 6.82032 13.7317 6.86265C13.7543 6.90498 13.7662 6.95225 13.7662 7.00026C13.7662 7.04828 13.7543 7.09554 13.7317 7.13788C13.709 7.18021 13.6763 7.21629 13.6363 7.24293L7.45358 11.3648C7.40965 11.394 7.35863 11.4108 7.30593 11.4133C7.25323 11.4158 7.20084 11.404 7.15433 11.3791C7.10781 11.3542 7.06893 11.3171 7.04181 11.2719C7.01469 11.2266 7.00035 11.1749 7.00033 11.1221V7.77785V7.77785Z"/>
                      </g>
                      <defs>
                      <clipPath id="clip0_308_53">
                      <rect width="14" height="14" fill="white"/>
                      </clipPath>
                      </defs>
                      </svg>
                  </button>
                </div>
                <div id="mp3-name-and-chrono">
                  <div class="track-info">
                    <div class="mp3-track-name">
                      <p class="band-name">Blood Red Shoes</p> <div class="hyphen"> - </div> <p class="music-name">It's Getting Boring By The Sea</p>
                    </div>
                    <div class="mp3-duration">
                      <div class="mp3-track-time">
                        0:00/
                      </div>
                      <div class="mp3-track-length">
                        3:15
                      </div>
                    </div>
                  </div>
                  
                
                  <div class="mp3-track-line">
                    <input type="range" id="chrono" class="mp3-duration-trail">
                  </div>
                  
                </div>
                <div class="mp3-setting-buttons">
                  <div class="mp3-volume-settings">
                  <input type="range" class="mp3-volume-input" id="volume-range">
                  </div>
                  <div class="mp3-programming-buttons">
                      <button class="mp3-toggle">
                              <svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                              <g clip-path="url(#clip0_307_64)">
                              <path d="M4.66699 11.6665V12.7935C4.66708 12.849 4.65135 12.9034 4.62165 12.9502C4.59194 12.997 4.5495 13.0345 4.49928 13.058C4.44907 13.0816 4.39318 13.0904 4.33816 13.0833C4.28314 13.0762 4.23128 13.0536 4.18866 13.0181L1.78533 11.0155C1.73923 10.9771 1.70611 10.9254 1.6905 10.8674C1.67488 10.8095 1.67753 10.7481 1.69807 10.6917C1.71861 10.6353 1.75605 10.5866 1.80528 10.5523C1.85451 10.518 1.91314 10.4997 1.97316 10.4999H10.5003C10.8097 10.4999 11.1065 10.377 11.3253 10.1582C11.5441 9.93937 11.667 9.64262 11.667 9.3332V4.66654H12.8337V9.3332C12.8337 9.95204 12.5878 10.5455 12.1502 10.9831C11.7127 11.4207 11.1192 11.6665 10.5003 11.6665H4.66699ZM9.33366 2.3332V1.2062C9.33357 1.15073 9.3493 1.09639 9.379 1.04954C9.40871 1.00269 9.45116 0.965289 9.50137 0.941715C9.55158 0.91814 9.60747 0.909372 9.66249 0.91644C9.71751 0.923508 9.76937 0.946119 9.81199 0.98162L12.2153 2.9842C12.2614 3.02261 12.2945 3.07428 12.3101 3.13218C12.3257 3.19008 12.3231 3.25139 12.3027 3.30775C12.2822 3.36412 12.2449 3.41281 12.1957 3.44719C12.1466 3.48157 12.088 3.49996 12.0281 3.49987H3.50033C3.19091 3.49987 2.89416 3.62279 2.67537 3.84158C2.45658 4.06037 2.33366 4.35712 2.33366 4.66654V9.3332H1.16699V4.66654C1.16699 4.0477 1.41282 3.45421 1.85041 3.01662C2.28799 2.57904 2.88149 2.3332 3.50033 2.3332H9.33366Z"/>
                              </g>
                              <defs>
                              <clipPath id="clip0_307_64">
                              <rect width="14" height="14" fill="white"/>
                              </clipPath>
                              </defs>
                              </svg>
                      </button>
                      <button class="mp3-toggle">
                              <svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                              <path d="M10.5003 10.4321V9.33366L13.417 11.0837L10.5003 12.8337V11.6145C9.60866 11.4868 8.76485 11.1318 8.05004 10.5838C7.33523 10.0357 6.77345 9.31288 6.41874 8.48491L6.41699 8.48199L6.41524 8.48549C6.01046 9.42976 5.33751 10.2345 4.4798 10.8C3.62208 11.3656 2.61728 11.667 1.58991 11.667H1.16699V10.5003H1.58991C2.38906 10.5003 3.17065 10.2658 3.83779 9.82582C4.50494 9.38586 5.02832 8.7598 5.34308 8.02524L5.78233 7.00033L5.34308 5.97541C5.02832 5.24085 4.50494 4.61479 3.83779 4.17483C3.17065 3.73487 2.38906 3.50035 1.58991 3.50033H1.16699V2.33366H1.58991C2.61735 2.33371 3.62219 2.63523 4.47992 3.20086C5.33764 3.76649 6.01055 4.57136 6.41524 5.51574L6.41699 5.51866L6.41874 5.51516C6.77353 4.68729 7.33534 3.96463 8.05015 3.41664C8.76496 2.86866 9.60873 2.51379 10.5003 2.38616V1.16699L13.417 2.91699L10.5003 4.66699V3.56858C9.83935 3.69104 9.21883 3.9748 8.69384 4.39467C8.16886 4.81453 7.75566 5.35751 7.49091 5.97541L7.05166 7.00033L7.49091 8.02524C7.75566 8.64314 8.16886 9.18612 8.69384 9.60599C9.21883 10.0259 9.83935 10.3096 10.5003 10.4321V10.4321Z"/>
                              </svg>
                      </button>
                      <button class="mp3-toggle">
                              <svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                              <g clip-path="url(#clip0_307_84)">
                              <path d="M7.00033 2.33366C5.76265 2.33366 4.57566 2.82532 3.70049 3.70049C2.82532 4.57566 2.33366 5.76265 2.33366 7.00033H4.08366C4.39308 7.00033 4.68982 7.12324 4.90862 7.34203C5.12741 7.56083 5.25033 7.85757 5.25033 8.16699V11.0837C5.25033 11.3931 5.12741 11.6898 4.90862 11.9086C4.68982 12.1274 4.39308 12.2503 4.08366 12.2503H2.33366C2.02424 12.2503 1.72749 12.1274 1.5087 11.9086C1.28991 11.6898 1.16699 11.3931 1.16699 11.0837V7.00033C1.16699 3.77858 3.77858 1.16699 7.00033 1.16699C10.2221 1.16699 12.8337 3.77858 12.8337 7.00033V11.0837C12.8337 11.3931 12.7107 11.6898 12.4919 11.9086C12.2732 12.1274 11.9764 12.2503 11.667 12.2503H9.91699C9.60757 12.2503 9.31083 12.1274 9.09203 11.9086C8.87324 11.6898 8.75033 11.3931 8.75033 11.0837V8.16699C8.75033 7.85757 8.87324 7.56083 9.09203 7.34203C9.31083 7.12324 9.60757 7.00033 9.91699 7.00033H11.667C11.667 5.76265 11.1753 4.57566 10.3002 3.70049C9.42499 2.82532 8.238 2.33366 7.00033 2.33366V2.33366ZM2.33366 8.16699V11.0837H4.08366V8.16699H2.33366ZM9.91699 8.16699V11.0837H11.667V8.16699H9.91699Z"/>
                              </g>
                              <defs>
                              <clipPath id="clip0_307_84">
                              <rect width="14" height="14" fill="white"/>
                              </clipPath>
                              </defs>
                              </svg>
                      </button>
                      <button class="mp3-toggle">
                              <svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                              <g clip-path="url(#clip0_307_79)">
                              <path d="M3.43492 9.33302H1.16634C1.01163 9.33302 0.863258 9.27156 0.753862 9.16217C0.644466 9.05277 0.583008 8.9044 0.583008 8.74969V5.24969C0.583008 5.09498 0.644466 4.9466 0.753862 4.83721C0.863258 4.72781 1.01163 4.66635 1.16634 4.66635H3.43492L6.52309 2.13935C6.56582 2.10432 6.61762 2.08215 6.67246 2.07542C6.72731 2.06868 6.78293 2.07767 6.83287 2.10132C6.8828 2.12497 6.92499 2.16232 6.95452 2.20902C6.98405 2.25572 6.99971 2.30985 6.99967 2.3651V11.6343C6.99971 11.6895 6.98405 11.7437 6.95452 11.7904C6.92499 11.837 6.8828 11.8744 6.83287 11.8981C6.78293 11.9217 6.72731 11.9307 6.67246 11.924C6.61762 11.9172 6.56582 11.8951 6.52309 11.86L3.43551 9.33302H3.43492ZM11.3198 11.7445L10.4938 10.9185C11.0468 10.4265 11.4892 9.82283 11.7919 9.14734C12.0945 8.47185 12.2506 7.73988 12.2497 6.99969C12.2504 6.22157 12.0778 5.45307 11.7444 4.74999C11.411 4.04691 10.9253 3.42691 10.3223 2.93502L11.1507 2.10669C11.8614 2.70842 12.4324 3.45797 12.8237 4.30305C13.215 5.14813 13.4173 6.06841 13.4163 6.99969C13.4163 8.87977 12.6078 10.5709 11.3198 11.7445ZM9.25309 9.67777L8.42359 8.84827C8.70678 8.63051 8.93609 8.35053 9.09379 8.02999C9.25148 7.70944 9.33333 7.35692 9.33301 6.99969C9.33301 6.16552 8.89551 5.43344 8.23634 5.02102L9.07576 4.1816C9.51761 4.50663 9.87674 4.9311 10.1241 5.42067C10.3715 5.91024 10.5001 6.45117 10.4997 6.99969C10.4997 8.07419 10.0155 9.03552 9.25309 9.67777Z"/>
                              </g>
                              <defs>
                              <clipPath id="clip0_307_79">
                              <rect width="14" height="14" fill="white"/>
                              </clipPath>
                              </defs>
                              </svg>
                      </button>
                  </div>
                
                </div>
                
              </div>
              
              <div class="mp3-track-list">
                <div class="mp3-track-list-items">
                  <div class="track">
                    <button class="play" data-id="1" data-music-band="Blood Red Shoes" data-music-name="It's Getting Boring By The Sea">▶</button>
                    <div class="track-name">
                        <p class="music-name">It's Getting Boring By The Sea</p>
                        <p class="band-name">Blood Red Shoes</p>
                    </div>
                  
                  <div class="audio-file">
                      <audio class="audio" src="src/media/audios/Blood Red Shoes - It's Getting Boring By The Sea.mp3" data-id="1"></audio>
                  </div>
                  
                  </div>
                </div>

                <div class="mp3-track-list-aside">

                  <div class="mp3-aside-navigation-items-container">
                    <a class="mp3-aside-navigation-item">Мои аудиозаписи</a>
                    <a class="mp3-aside-navigation-item">Обновления друзей</a>
                    <a class="mp3-aside-navigation-item">Рекомендации</a>
                    <a class="mp3-aside-navigation-item">Популярное</a>
                    <a class="mp3-aside-navigation-item">Мои альбомы</a>
                  </div>

                  <div class="mp3-aside-friends-container">
                    <input class='mp3-friends-search'>
                    <div class="mp3-friendlist">
                      <div class="mp3-friendlist-account-container">
                        <img src="./gera-bratan.jpg" class="mp3-friendlist-account-userpic">
                        <a class="mp3-friendlist-account-name">Гера Брательник</a>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
          </div>
        `

        const musicPlayer = document.querySelector('.mp3-track-list-items')
        

        ////// рендер каждой музыкальной композиции ///////////
        const musicRendered = userData.userMusic.map(track => 
          
        `<div class="track" data-id="${track.id}">
            <button class="play" data-id="${track.id}" data-music-band="${track.band}" data-music-name="${track.title}">▶</button>
            <div class="track-item" track-id="${track.id}">
              <div class="track-name">
                <p class="band-name">${track.band}</p>
                <div class="hyphen"> - </div>
                <p class="music-name">${track.title}</p>
              </div>

              <div class="mp3-duration" id="${track.id}">
                  <div class="mp3-track-time"></div>
                  <div class="mp3-track-length"></div>
              </div>
            </div>
            
            <div class="audio-file">
            <audio class="audio" src="${track.src}" data-id="${track.id}"></audio>
            </div>
            
        </div>`
        )
        .join("")

        musicPlayer.innerHTML = musicRendered 

        

        

          const audio = userData.userMusic.map(async track => {
            const audio = new Audio()
            audio.src = track.src
            const sourcedAudio = audio.src
            const name = track.title
            const band = track.band
            const id = track.id
            
            audio.addEventListener('loadedmetadata', () => {
              const minutes = Math.floor(audio.duration / 60)
              const seconds = Math.floor(audio.duration % 60)
              const timing = `${minutes}:${seconds}`
              const audioId = document.querySelector(`.track[data-id="${track.id}"]`)
              const duration_container = audioId.querySelector('.mp3-track-length')
              duration_container.innerHTML = timing
            })
              
          })
          // попробовать обратиться к полоске хронометража и на её основе сделать счётчик вида 0:00/3:15
          
        
        

        let isAudioLoading = false
        //////// взаимодействие с музыкальной композицией 
        //////// (воспроизведение, громкость и т.п.)
        const volumeRange = document.querySelector('.mp3-volume-input')
        volumeRange.value = volumeRange.value

        musicPlayer.addEventListener('click', async (event) => {
        
        const playBtn = event.target.closest('.play')

        const audioId = playBtn.getAttribute('data-id')
        const nameId = playBtn.getAttribute('data-music-name')
        const bandId = playBtn.getAttribute('data-music-band')

        const currentAudio = musicPlayer.querySelector(`audio[data-id="${audioId}"]`);

    
        if (isAudioLoading) {
          console.log("загрузка ещё не окончена")
          return
        }
        

          if (currentAudio.paused) {
              const audios = document.querySelectorAll('.audio')
              const play = document.querySelectorAll('.play')

              audios.forEach(audio => {
              audio.pause()
              })
              play.forEach(start => {
              start.innerHTML = "▶"
              })

          
          
          
              volumeRange.addEventListener('input', () => {
                  const volumeValue = volumeRange.value / 100
                  audios.forEach(audio => {
                  audio.volume = volumeValue
                  })
                  
                  
              })
          

              const musicNameContainer = document.querySelector('.mp3-track-name')
              const musicName = musicNameContainer.querySelector('.music-name')
              const musicBandName = musicNameContainer.querySelector('.band-name')

              musicName.innerHTML = `${nameId}`
              musicBandName.innerHTML = `${bandId}`

          
          
          
              try {
                isAudioLoading = true
                currentAudio.currentTime = 0

                await currentAudio.play()
                
                isAudioLoading = false
                event.target.innerHTML = "❚❚"
                musicPlayer.addEventListener('timeupdate', (event) => {
                const durationTrail = document.querySelector('.mp3-duration-trail')
                if (currentAudio.duration) {
                    const currentTime = (currentAudio.currentTime / currentAudio.duration) * 100
                    durationTrail.value = currentTime
                }
                }, true)

              } catch (error) {
                isAudioLoading = false
                console.log('загрузка прервана:', error)
              }
              
      
          
          
              }  else {
                      currentAudio.pause()
                      
                      event.target.innerHTML = "▶"
                      
              }
              }
              )

    }
      
        
        

    function feedPage() {

        const mainSectionContainer = document.querySelector('.my-page')
        mainSectionContainer.innerHTML = ""

        const feedPosts = userData.userCommunities

        const feedDiv = document.createElement('div')
        feedDiv.className = 'feed-container'

        const feedPostsBlock = document.createElement('div')
        feedPostsBlock.className = 'feed-posts-container'

        const feedHeader = document.createElement('div')
        feedHeader.className = 'feed-container-header-panel'

        feedHeader.innerHTML = `
        <div class=feed-header-buttons>
            <button class="feed-navigation">Новости</button>
            <button class="feed-navigation">Обновления</button>
            <button class="feed-navigation">Комментарии</button>
        </div>
        <div class="feed-header-input">
            <input class="input-post" placeholder="расскажите что-нибудь друзьям...">
        </div>  
            `

            infiniteFeed()
            

            const maxPosts = 5
            let postIndex = 0

        function infiniteFeed() {
                const randomDelay = Number((Math.random() * (3000 - 1000) + 1000).toFixed())
                
                setTimeout(() => {

                
                const currentPost = feedPosts[postIndex]

                feedPostsBlock.insertAdjacentHTML('afterbegin',  
                `<div class="post-genuinely" data-id="${currentPost.id}">

                            <div class="userpic">
                            <img class="userpic-post" src="${currentPost.imgSrc}">
                            </div>

                            <div class="content-post">
                            <div class="username">${currentPost.communityName} 
                            <button class="delete-post" data-id="${currentPost.id}"> 
                                удалить пост
                            </button> 
                            </div> 

                            <div class="text-content">

                                ${currentPost.textContent ? `<p class="user-content">${currentPost.textContent}</p>` : ""}
                                ${currentPost.imgContent ? `<img class="content-picture" src="${currentPost.imgContent}">` : ""}
                            </div>

                            <div class="like-share-date">

                                <div class="date-time-container">
                                <p class="date-time">20.01.2016</p>
                                </div>

                                <div class="like-share-container">
                                <div class="share">
                                    поделиться
                                </div>
                                <div class="like">
                                    Мне нравится
                                </div>
                                </div>
                                
                            </div>
                            


                            </div>
                        
                    </div>`);
                postIndex++

                if (postIndex >= feedPosts.length) {
                postIndex = 0
                }

                if (feedPostsBlock.children.length > maxPosts) {
                feedPostsBlock.lastElementChild.remove();
                
                }
                infiniteFeed()
            }, randomDelay)}
          //////////////////////////////////////////////////////////////////////////////////////////////////
          //////////////////////////////////// clearTimeout() ///////////////////////////////////////////// <=== добавить после переключения с новостей на другую категорию 
          ////////////////////////////////////////////////////////////////////////////////////////////////

      
      mainSectionContainer.appendChild(feedDiv)
      feedDiv.appendChild(feedHeader)
      feedDiv.appendChild(feedPostsBlock)
    
    }


    const musicButton = document.getElementById('user-audio')
    const mainButton = document.getElementById('user-page')
    const feedButton = document.getElementById('feed-lenta')


    musicButton.addEventListener('click', musicPage)
    feedButton.addEventListener('click', feedPage)
    mainButton.addEventListener('click', userPage)
    
   
  } catch (error) {
    console.error('Данные не получены. Причина:', error)

  }
  
  
}
//<svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <path d="M38 12.83L35.17 10L24 21.17L12.83 10L10 12.83L21.17 24L10 35.17L12.83 38L24 26.83L35.17 38L38 35.17L26.83 24L38 12.83Z" fill="currentColor"/>
// </svg>