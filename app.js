var fn_init = function(){
let lignesCdes = [];
let clients = [{
    name: 'client1',
    code: 'cl1'
}, {
        name: 'client2',
        code: 'cl2'
}];
let TVA = [2,10,20.6];
for (let i=0;i<100;i++) {
  let idxTva = Math.round (Math.random()*2);
  let mytva=TVA[idxTva];
  let idxcli = Math.round(Math.random()*2);
  let mycli=clients[idxcli];
let amountHT=Math.random()*1000;
lignesCdes.push(
  [mycli,mytva,amountHT]
);
}
return lignesCdes;
}
console.log(fn_init());
