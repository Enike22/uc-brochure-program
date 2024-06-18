
let count = 0
spinner()
function spinner(){
  let wheel = document.querySelector('.spinner-img')
  count++
  wheel.style.transform = `rotate(${count}deg)`
  setTimeout(spinner, 50)
  }

let index = 0
displayText()
function displayText(){
  let textContainer = document.querySelector('.text-content')
  let text = `FUNDRAISING FOR URHOBO COMMUNITY CENTER NEW YORK `
  
  if (index < text.length){
    textContainer.innerHTML += text[index] + ''  
    index++
      setTimeout(displayText, 100)
    }
  }
  
  movement()
  function movement(){
     let spanBox = document.querySelector('.span-box')
    
    let span1 = document.createElement('div')
    let span2 = document.createElement('div')
    spanBox.style.display = 'block'
    // span1.style.marginLeft = '980px'
    // span2.style.marginLeft = '0px'
    
    // span1.style.transition = marginLeft
    
    span1.classList.add ('span1')
    span2.classList.add ('span2')
    spanBox.appendChild(span1)
    spanBox.appendChild(span2)
    
   }   
   
  
   function programDate(){
     let address = document.querySelector('.nav-button2')
     address.style.display = 'block'
    }
    
    

  let timerCount = document.querySelector('.timer-text')
  let cat = document.querySelector('.cat')
  let dateElem = document.querySelector('.timer')
  let expectedDate = new Date('June 19, 2024 14:39:00').getTime()
// console.log(expectedDate.innerHTML)
  setInterval(() => {
    let newDate = new Date().getTime()
    let distance = expectedDate - newDate
    let day = Math.floor(distance / (1000 * 60 * 60 * 24))
    let hour = Math.floor((distance % (1000 * 60 * 60 * 24)) / ( 1000 * 60 * 60))

    let minute = Math.floor((distance %  (1000 * 60 * 60)) / (1000 * 60))

    let seconds = Math.floor((distance % (1000 * 60)) / (1000))
    
    dateElem.innerHTML = `${day} Day, ${hour} Hour, ${minute} Minute, ${seconds} Seconds`

    if ( `${hour}` <= '0' && `${minute}` <= '0' &&  `${seconds}` <= '0') {
      cat.style.display = 'block'
      timerCount.style.display = 'block'
      timerCount.innerHTML = 'This event has already started'
      dateElem.style.display = 'none'
    }
  }, 1000);
  
  let eventDate = document.querySelector('.date')
  let address = document.querySelector('.location-map')
  let specialGuest = document.querySelector('.delegates')
  
  function eventData(n){
    if (n == '1'){
      // alert('hi')
      eventDate.style.display = 'block'
      address.style.display = 'none'
      specialGuest.style.display = 'none'
    } else if (n == '2'){
      address.style.display = 'block'
      eventDate.style.display = 'none'
      specialGuest.style.display = 'none'
    }else if (n == '3'){
      specialGuest.style.display = 'block'
      eventDate.style.display = 'none'
      address.style.display = 'none'
    }
  }
  
  let slide = 0
  display()
  function display(){
    let delegate = document.getElementsByClassName('persons')
    for (i = 0; i < delegate.length; i++){
      delegate[i].style.display = 'none'
    }
    slide++
    if (slide > delegate.length){
      slide = 1
    }
    delegate[slide - 1].style.display = 'block'
    setTimeout(display, 1000)
    // console.log(slide)
  }
  
  function changer(){

  let mainContent = document.querySelector('.project-container')
  let bookContainer = document.querySelector('.book-container')
  bookContainer.style.marginLeft = '0px'
  bookContainer.style.transition  = '10s ease in out'
  mainContent.style.display = 'none'
}

function goBackFub(){
  let mainContent = document.querySelector('.project-container')
  mainContent.style.display = 'block'
}

function iconContRemove(){
  
  address.style.display = 'none'
  eventDate.style.display = 'none'
  specialGuest.style.display = 'none'  
}

      
    




  

