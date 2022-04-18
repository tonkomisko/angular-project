const web_images = document.getElementsByClassName('col_image');
const source_images = [
{id: 1, path: 'christopher-burns-pzMP-RGJ7mY-unsplash.jpg'},  
{id: 2, path: 'felix-rostig-KohEtqMf85w-unsplash.jpg'},
{id: 3, path: 'luca-bravo-TaCk3NspYe0-unsplash.jpg'},
{id: 4, path: 'luke-stackpoole-FA8HEWO9Vd8-unsplash.jpg'},
{id: 5, path: 'luke-stackpoole-ubSUwrr04Ks-unsplash.jpg'},
{id: 6, path: 'marc-ruaix-pV9_u0zDk4E-unsplash.jpg'},
{id: 7, path: 'meric-dagli-J9LaQhfPoQU-unsplash.jpg'},
{id: 8, path: 'miguel-bautista-vTKGJxps5UA-unsplash.jpg'},
{id: 9, path: 'ronny-rondon-mMlpDj0yZn4-unsplash.jpg'}]
const imageId1 = document.getElementById('1');
const imageId2 = document.getElementById('2');
const imageId3 = document.getElementById('3');
// console.log(imageIds);
const dateTime = document.getElementById('date_time');

// console.log(web_images[2]);
// console.log(source_images);



function testing(images){

for(let i = 0; i< images.length; i++){
    randomId1 = Math.floor(Math.random()*images.length)
    imageId1.setAttribute('src', 'images/' + images[randomId1].path );
    
    randomId2 = Math.floor(Math.random()*images.length)
    imageId2.setAttribute('src', 'images/' + images[randomId2].path );
    
    randomId3 = Math.floor(Math.random()*images.length)
    imageId3.setAttribute('src', 'images/' + images[randomId3].path );

}

    images.forEach(image =>{
        // console.log(image);
    })
}

testing(source_images);

function displayTime(){
    currentDate = new Date();
    currentHour = currentDate.getHours();
    currentMinute = currentDate.getMinutes();
    currentDay = currentDate.getDate();
    currentMonth = currentDate.getMonth()+1;
    currentYear = currentDate.getFullYear();
    weekDays = ['Pondelok', 'Utorok', 'Streda', 'Stvrtok', 'Piatok', 'Sobota', 'Nedela'];
    currentWeekday = weekDays[currentDate.getDay()-1];
    // console.log(currentDay);

    // console.log(currentDay);

    dateTime.innerHTML = currentWeekday + '<br>' + currentHour + ':' + currentMinute + '<br>' + currentDay + '/' + currentMonth + '/' + currentYear;
}

displayTime();
