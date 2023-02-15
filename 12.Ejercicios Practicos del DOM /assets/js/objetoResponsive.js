const d = document;
const w = window;

export default function responsiveMedia(id, mq, mobileContent, dekstopContent) {
    let breakpoint = w.matchMedia(mq)

    const responsive = (e)=> {
        if(e.matches) {
            d.getElementById(id).innerHTML = dekstopContent;
        }else {
            d.getElementById(id).innerHTML = mobileContent; 
        }
    }
    breakpoint.addListener(responsive);
    responsive(breakpoint)
}