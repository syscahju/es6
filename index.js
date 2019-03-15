class Message{
  constructor(texto =``, agoraMesmo = Date.now()){
    this.agora = texto;
    this.hora = agoraMesmo;
  }
  toString(){
    return `Sempre correndo`;
  }
}

var torresmo = new Message;
console.log(torresmo + ``);
console.log(torresmo);