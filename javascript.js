function myzakatf(){

    let amount = document.getElementById("amount").value;
    let gold = document.getElementById("amountOfGold").value;
    let silver = document.getElementById("amountOfSilver").value;

   let fgold = gold*120000/40;
   let fsilver = silver*1500/40;
   let fzakat = fgold+fsilver+amount/40;
   document.getElementById("h1").innerText=fzakat; 
}
