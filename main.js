const buttons = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    divide: '/',
    multiply: '*',
    subtract: '-',
    add: '+',
    equals: '=',
    clear: '',
    decimal: '.'
  }

  let eqn = '';
let number = '0'
$('.digits').on('click',function(e){
  if(buttons[$(this).attr('id')] == '0'){
    if(number.match(/^0/) && !(/\./g).test(number)){
      number = number;
    }else{
      number += buttons[$(this).attr('id')];
    }
  }else if(buttons[$(this).attr('id')] == '.'){
    if(number.match(/^0/) && !(/\./g).test(number)){
      number += '.';
    }
    if((/\./g).test(number)){
      number = number;
    }else{
      number += '.';
    }
  }else{
    if((/\./g).test(number)){
      number += buttons[$(this).attr('id')];
    }else{
    number = number.replace(/^0/,'');
    number += buttons[$(this).attr('id')];
    }
  }
  $('#display').text(number);
  $('#display2').append(buttons[$(this).attr('id')]);
  console.log(eqn);

})
$('.operators').on('click',function(e){
  number ? eqn += number:null;
  if(eqn.match(/\-$/) ){
    eqn = eqn.replace(/.$/,'');
  }
  if(eqn.match(/[\*|\+|\/]$/) && $(this).attr('id')!='subtract'){
    eqn = eqn.replace(/.$/,'');
  }
  if(eqn.match(/=$/)){
    eqn = eqn.replace(/.$/,'');
    eqn = eval(eqn);
     eqn = eqn + $(this).text();
     $('#display2').text(eqn);
  }else{
   eqn += $(this).text();
  }
  number = '';
  $('#display2').text(eqn);
  $('#display').text($(this).text());
    console.log(eqn);

})


$('#equals').on('click',function(){
  eqn+=number;
  number='';
  $('#display').text(eval(eqn));
  $('#display2').text(eqn+'='+eval(eqn));
  eqn += `=`;
  console.log(eqn);
})
$('#clear').on('click',function(){
  eqn='';
  number='';
  $('#display').text(0);
  $('#display2').text('');
})
