const accountId = 1445524
let accountEmail = "nishu@gamil.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2  //not allowed
accountEmail = "sdj@gamil.com"
accountPassword = "216752"
accountCity = "Delhi"

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

/*
Prefer not to use var bcz ofissue in block scope and functional scope
*/