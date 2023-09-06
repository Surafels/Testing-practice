const capitalize = require("./capitalize.js");

it("work", ()=>{
expect(1).toBe(1);
});
it('capitalize the string ', () =>{
expect (capitalize('World')).toBe('World');
});