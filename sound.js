document.addEventListener("keypress",function(event){
    playMusic(event.key);
})


function playMusic(ui)
{
    if ("A"==ui) {
        var music = new Audio('a.mp3');
        music.play();
    }

    else if("S"==ui)
    {
        var music = new Audio('s.mp3');
        music.play();
    }
    else if("D"==ui)
    {
        var music = new Audio('d.mp3');
        music.play();
    }
    else if("F"==ui)
    {
        var music = new Audio('f.mp3');
        music.play();
    }
    else if("G"==ui)
    {
        var music = new Audio('G.mp3');
        music.play();
    }
    else if("H"==ui)
    {
        var music = new Audio('h.mp3');
        music.play();
    }
    else if("J"==ui)
    {
        var music = new Audio('j.mp3');
        music.play();
    }
    else if("K"==ui)
    {
        var music = new Audio('k.mp3');
        music.play();
    }
    else if("L"==ui)
    {
        var music = new Audio('l.mp3');
        music.play();
    }
    else if(";"==ui)
    {
        var music = new Audio('l1.mp3');
        music.play();
    }
    else if("'"==ui)
    {
        var music = new Audio('l2.mp3');
        music.play();
    }
}
