let principal = $('#principal');
let notice = $('#notice');
let swGit = 'path/sw_git.js'
let sw = '/sw.js'

if(navigator.serviceWorker){

    console.log(window.location.hostname)
    console.log(window.location.href)
    if(!window.location.href.includes("localhost")){
        console.log("sw_git");
        sw = swGit
    }
    navigator.serviceWorker.register(sw);
}



$('.btn-follow').on('click',(e)=>{
    e.preventDefault();
    principal.fadeOut(()=>{
        notice.slideDown(1000)
    });
    // notice.fadeOut(()=>{
    //     principal.slideDown(1000)
    // });
})

$('.btn-return').on('click',(e)=>{
    e.preventDefault();
    notice.fadeOut(()=>{
        principal.slideDown(1000)
    });
})