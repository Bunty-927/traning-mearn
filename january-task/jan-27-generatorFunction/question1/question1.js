function* Range(start, end, step=1){
    var count=0;
    for(let i=start; i<end;i+=step){
        count++; 

    }
    return count;
}

let size=Range(48,122);
console.log("size of the generator is "+size.next().value);
