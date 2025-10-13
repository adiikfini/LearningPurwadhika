function romanToInt(s: string): number {
    let count:number = 0; 
    for (let index = 0; index < s.length; index++) {
        const element = s[index];
        if (element === 'I') { // 1
            if (s[index+1] === 'V') {
                count += 4;
                index++; 
            }else if (s[index+1] === 'X'){
                count += 9;
                index++; 
            }else{
                count += 1; 
            }
            
        }else if (element === 'V') { // 5
                count += 5;
        }else if (element === 'X') {// 10
            if (s[index+1] === 'L') {
                count += 40;
                index++; 
            }else if (s[index+1] === 'C') {
                count += 90;
                index++; 
            }else{
                count += 10; 
            }
        }else if (element === 'L') { //50
            count += 50; 
        }else if (element === 'C') { //100
            if (s[index+1] === 'D') {
                count += 400;
                index++; 
            }else if (s[index+1] === 'M') {
                count += 900;
                index++; 
            }else{
                count += 100; 
            }
        }else if (element === 'D') {//500
            count += 500; 
        }else if (element === 'M'){ // 1000
            count += 1000; 
        }
        console.log(element);
    }
    return count;
};

console.log(romanToInt("MMMCMXCIX"));
