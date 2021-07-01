let stri='Я изучаю ю JS';
let stri3=stri; 
let spl=stri.split('');
let stri2;

//поиск всех вхождений определённого символа
for (let i=0; i <= stri.length; i++ )
{
    if (spl[i]=='ю')
        stri3 = stri3.substring(0,i)+'y'+stri3.substring(i+1);
}

//поиск первого вхождения
i=stri.search('ю');
stri2 = stri.substring(0,i)+'y'+stri.substring(i+1); 

console.log(stri.replace(stri.search('ю') ,'й'));
console.log(stri2);
console.log(stri3);
console.log(stri.replace('JS','Frontend'));
