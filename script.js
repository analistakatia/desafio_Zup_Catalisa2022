const botao = document.querySelector('button');
const imagens = [];
const nomes = [];
const especies = [];
const condicoes = [];

gerarValorAleatorio = () => {
    return Math.floor(Math.random() * 671);
}

carregarPersonagens = () => {
    var i = 0;
    
    for (i=0; i < 3; i++){     
        pegarPersonagem(i);   
    }


}
pegarPersonagem = (i) => {
    let numeroAleatorio = gerarValorAleatorio();
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
        method:'GET',
        headers:{
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        imagens [i] = document.querySelector(`#img${i+1}`);
        nomes [i]= document.querySelector(`#nome${i+1}`);
        especies [i] = document.querySelector(`#especie${i+1}`);
        condicoes [i] = document.querySelector(`#condicao${i+1}`)

        imagens[i].src = data.image;        
        imagens[i].alt = data.name;
        nomes[i].innerHTML = data.name;
        especies[i].innerHTML = data.species;
        condicoes[i].innerHTML = data.status;
    }); 
}

botao.onclick = carregarPersonagens;