const input = "hello world"

console.log(input.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '));
