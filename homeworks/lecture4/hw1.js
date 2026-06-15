// HTML tag validation
// Write a function that validates whether HTML tags are paired correctly or not.
// Example:
// <html><head><title>My Title</title></head></html> - true
// <html><head><title>My Title</title></head></head></html> - false
// <html><head><title>My Title</title></head></html> - true

function checkValidHTML(html) {
    // implement your solution here
    const stack = [];
    const tags = html.match(/<\/?[a-zA-Z]+>/g);
    // console.log(tags);

    for(let tag of tags){
        if(tag[1] === '/'){
            let tagName = tag.match(/[a-zA-Z]+/)[0];
            if(tagName !== stack[stack.length - 1]) return false;
            else{
                stack.pop();
            }
        }else{
            let tagName = tag.match(/[a-zA-Z]+/)[0];
            stack.push(tagName);
        }
    }
    return stack.length === 0;

}

console.log(checkValidHTML('<html><head><title>My Title</title></head></html> '));
console.log(checkValidHTML('<html><head><title>My Title</title></head></head></html> '));
console.log(checkValidHTML('<html><head><title>My Title</title></head></html '));