var elementos = document.querySelectorAll('.player-options > div > img');
const enimyOptions = document.querySelectorAll('.enimy-options div');
    var playerOpt = '';
    //var resetInimigo = '';
    var inimigoOpt = '';

    function validarVitoria(){

        let vencedor = document.querySelector('.vencedor');

        if(playerOpt == 'papel'){
            if(inimigoOpt == 'papel'){
                //EMPATE
                vencedor.innerHTML = 'O jogo foi empatado';
            }else if(inimigoOpt == 'tesoura'){
                //INIMIGO GANHOU
                vencedor.innerHTML = 'O inimigo venceu';

            }else if(inimigoOpt == 'pedra'){
                //VENCEU
                vencedor.innerHTML = 'Você ganhou';
            }
        }
        if(playerOpt == 'tesoura'){
            if(inimigoOpt == 'papel'){
                //EMPATE
                vencedor.innerHTML = 'Você ganhou';
            }else if(inimigoOpt == 'tesoura'){
                //INIMIGO GANHOU
                vencedor.innerHTML = 'O jogo foi empatado';

            }else if(inimigoOpt == 'pedra'){
                //VENCEU
                vencedor.innerHTML = 'O inimigo venceu';
            }
        }
        if(playerOpt == 'pedra'){
                if(inimigoOpt == 'papel'){
                    //EMPATE
                    vencedor.innerHTML = 'O inimigo venceu';
                }else if(inimigoOpt == 'tesoura'){
                    //INIMIGO GANHOU
                    vencedor.innerHTML = 'Você ganhou';

                }else if(inimigoOpt == 'pedra'){
                    //VENCEU
                    vencedor.innerHTML = 'O jogo foi empatado';
                }
            }
    }
    

    function resetInimigo() {
        
        for (let i = 0; i < enimyOptions.length; i++) {
                enimyOptions[i].childNodes[0].style.opacity = 0.3;
        }
        
    }

    //AQUI PEGAMOS O INIMIGO
    function inimigoJogar(){
        let rand = Math.floor(Math.random()*2);
        resetInimigo();
        
        for (let i = 0; i < enimyOptions.length; i++) {
            if (i == rand) {
                enimyOptions[i].childNodes[0].style.opacity = 1;
                inimigoOpt = enimyOptions[i].childNodes[0].getAttribute('opt')
            }
        }
        validarVitoria()
        
    }

    function resetOpacityPlayer(){
        for (var i = 0; i < elementos.length; i++) {
        elementos[i].style.opacity = 0.3;
        }
    }

    //AQUI PEGAMOS O NOSSO PLAYER
    for (var i = 0; i< elementos.length; i++) {
        elementos[i].addEventListener('click',(t)=>{
            resetOpacityPlayer();
            t.target.style.opacity = 1;
            playerOpt = t.target.getAttribute('opt');
            inimigoJogar()
            //alert(playerOpt)
        });
    }