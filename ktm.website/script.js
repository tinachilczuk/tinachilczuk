const slideList = [
    {
    id: 1,
    text: 'first slide',
    src: 'http://placekitten.com/600/360'
  },
  {
    id: 2,
    text: 'second slide',
    src: 'http://placekitten.com/600/361'
  },
  {
    id: 3,
    text: 'third slide',
    src: 'http://placekitten.com/600/362'
  },
]

let count = 0;
let numSlides = 2;


function increaseCount() { 
  $('.next').click(function () { 
    count++
    console.log(count)
    if (count < numSlides) {
      renderSlide(count)
    } else { 
      count = 0
      renderSlide(count)
    }
  })
  return count

}
function decreaseCount() { 
  $('.prev').click(function () { 

    if (count > 0) {
      count--
      renderSlide(count)
      console.log(count)
    }
    else {
      count = numSlides - 1
      renderSlide(count)
    }
  })
  
  return count

}

function renderSlide(count) { 
  $('#slideContent').html(`
      <!-- id: ${slideList[count].id} -->
      <h2>${slideList[count].text}</h2>
      <img class="slideimg" src=${slideList[count].src}>
  `)
}




$(decreaseCount())
$(increaseCount())