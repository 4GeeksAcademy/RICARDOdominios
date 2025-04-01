
let pronoum = ['the', 'our', 'your', 'notMy'];
let adjetive = ['green', 'dark', 'easy', 'incredible'];
let named = ['fault', 'smokin', 'plan', 'name'];
let finalDoc = ['.com', '.es', '@yahoo.com', '_scriptnmd']

for (let p = 0; p < pronoum.length; p++) {
    for (let a = 0; a < adjetive.length; a++) {
        for (let n = 0; n < named.length; n++) {
            for (let f = 0; f < finalDoc.length; f++) {
                console.log(pronoum[p] + adjetive[a] + named[n] + finalDoc[f])
            }
        }
    }
}