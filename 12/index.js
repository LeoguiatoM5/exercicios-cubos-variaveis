const M = 90000; 
const C = 60000; 
const n = 24; 



const i = (Math.pow((M / C), (1 / n)) - 1) * 100;

console.log(`O seu financiamento de  ${C}  
reais teve uma taxa de juros de  ${i.toFixed(3)}  %, pois após  
 ${n}  meses você teve que pagar ${M} reais.`);