function cowsBulls(secret, guess){
    let ss =[...String(secret)]
    let gg = [...String(guess)]
    let cows =0, bulls=0;
    let frq = new Array(10).fill(0);
    for(let i =0 ; i < ss.length; i++){
        if(ss[i] === gg[i]){
            bulls++;
        }
        else{
            if(frq[ss[i]] < 0){
                cows++;
            }
            frq[ss[i]]++;
            if(frq[gg[i]] > 0){
                cows++;
            }
            frq[gg[i]]--;
        }
    }
    return `${bulls}A${cows}B`
    
}
console.log(cowsBulls(1234 , 1243));