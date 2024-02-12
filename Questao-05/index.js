const reverseString = () => {

    const str = "hello world";
    let reversedStr = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }

    console.log(reversedStr);
    return reversedStr;

}

reverseString("hello world"); 