let arr = document.querySelectorAll("button");
let listAudio = ["crash.mp3","kick-bass.mp3","snare.mp3","tom-1.mp3","tom-2.mp3","tom-3.mp3","tom-4.mp3"];

arr.forEach( (btn, key)=>{
	document.addEventListener("keydown", event =>{
        if(btn.textContent == event.key) {
            let audio = new Audio(`sounds/${listAudio[key]}`);
            audio.play(); 
        }   
    });
    
});

