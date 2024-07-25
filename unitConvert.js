 function f_t_c(farenheit) {
    return(Math.round((farenheit - 32) * 5/9));
 }

 function c_t_f(celsius) {
     return (Math.round((celsius * (9/5)) + 32));
 }

 let _farenheit = 41;
 let _celsius = 6;


 console.log('First Reading');
 console.log(`The Temperature is ${_farenheit} in farenheit, which is ${f_t_c(_farenheit)} when measured in celsius.`);
 console.log(`The Temperature is ${_celsius}' in celsius, which is  ${c_t_f(_celsius)} when measured in farenheit.`);

 _farenheit = 75;
 _celsius = 32;

 console.log('Second Reading');
 console.log(`The Temperature is ${_farenheit} in farenheit, which is  ${f_t_c(_farenheit)} when measured in celsius.`);
 console.log(`The Temperature is ${_celsius} in celsius, which is ${c_t_f(_celsius)} when measured in farenheit.`);

 console.log('Changes being sent to github');
