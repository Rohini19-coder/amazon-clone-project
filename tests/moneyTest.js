import {formatCurrency} from '../scriptss/utils/money.js';
console.log('test site:format currency');
console.log('convert cents into dollars');
if(formatCurrency(2095)==='20.95'){
    console.log('passed');
}else{
    console.log('failed');
}
console.log('works with 0');
if(formatCurrency(0)==='0.00'){
    console.log('passed');
}else{
    console.log('failed');
}
console.log('rounds upto nearesr cents');
if(formatCurrency(2000.5)==='20.01'){
    console.log('passed');
}else{
    console.log('failed');
}

