function title(a){
   const titlex = document.createElement('title');
    titlex.textContent = a;
    document.head.appendChild(titlex);
}

function h_script(a) {
    const scripth= document.createElement('script');
    scripth.src =a;
    document.head.appendChild(scripth);
}
function link(a){
    const css=document.createElement('link');
    css.rel='stylesheet';
    css.href=a;
    document.head.appendChild(css);
}
function icon(a){
    const css=document.createElement('link');
    css.rel='icon';
    css.href=a;
    document.head.appendChild(css);
}
