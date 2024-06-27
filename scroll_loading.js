const char_div = document.getElementById("char_div")

const koreanLetters = '가나다라마바사아자차카타파하게네데레메베세에제체케테페헤기니디리미비시이지치키티피히고노도로모보소오조초코토포호구누두루무부수우주추쿠투푸후ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

for (let i = 0; i < koreanLetters.length; i++) {
  const letter = koreanLetters[i]
  const pTag = document.createElement('p')
  pTag.innerText = letter
  pTag.classList.add('letter')
  char_div.appendChild(pTag)
}

//스크롤 퍼센트값 계산
const scroll_percentage = document.getElementById('scroll_percentage')
const loading_color = document.getElementById('loading_color')

const scrollYPoistion = () => {
  const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const currentScroll = window.scrollY;
  let percent = Math.ceil((currentScroll / totalHeight) * 100);
  if(percent >= 100){
    percent = 100
  }
  console.log(percent)
  scroll_percentage.innerText = `${percent}%`
  loading_color.style.width = `${percent}%`
}

window.addEventListener("scroll", scrollYPoistion);