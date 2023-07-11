const C = 1000; 
 const I = 0.125; 
 const T = 5; 
// CálcuLO
 const montante = C * Math.pow(1 + I, T);

// rESUL
console.log(`O montante após  ${T}   meses é de = R$ ${ montante.toFixed(2)}`);