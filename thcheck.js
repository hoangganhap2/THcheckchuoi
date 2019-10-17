
function isFirstLetterUpperCase(str) {
    regexp=/^[A-Z]/;
    if(regexp.test(str)){
        document.writeln("String's first character is uppercase");
    }else {
        document.writeln("String's first character is not uppercase")
    }
};
isFirstLetterUpperCase("Nguyen van Nam");