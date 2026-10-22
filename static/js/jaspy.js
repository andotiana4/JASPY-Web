(function(){
    const safidy = (singany, rehetra = false) => {
    singany = singany.trim()
    if (rehetra) {
      return [...document.querySelectorAll(singany)]
    } else {
      return document.querySelector(singany)
    }
  }
    const soratana = safidy(".soratana")
  if(soratana) {
    let soratra_aseho =soratana.getAttribute('data-soratra')
    soratra_aseho = soratra_aseho.split(",")
    new Typed('.soratana',{
      strings: soratra_aseho,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    })
  }
})()