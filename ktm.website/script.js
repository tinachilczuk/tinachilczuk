const slideList = [
    {
    id: 1,
    text1: 'As sharp, as ever!', //this is the h3
    text2: '2023 KTM 1290 SUPER DUKE R EVO', //this is the h2
    src: 'images/moto-slide01.png'
  },
  {
    id: 2,
    text1: 'second slide',
    text2: 'h2 copy',
    src: 'images/moto-slide02.png'
  },
  {
    id: 3,
    text1: 'third slide',
    text2: 'h2 copy',
    src: 'images/moto-slide03.png'
  },
]

let count = 0;
let numSlides = 3;


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
      <h3>${slideList[count].text1}</h3>
      <h2>${slideList[count].text2}</h2>
      <img class="slideimg" src=${slideList[count].src}>
  `)
}




$(decreaseCount())
$(increaseCount())