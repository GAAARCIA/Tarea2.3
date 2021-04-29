const funcional = require('./funcional');

let f = new funcional('./DAO.json');

console.log('1) Número de productos con existencia mayor a 20: ');
console.log(f.productsExistenceMore(20));

console.log('2) Número de productos con existencia menos a 15: ');
console.log(f.productsExistenceLess(15));

console.log('3) Lista de productos con la misma clasificación y precio mayor $15.50: ');
console.log(f.productsSameClassificationAndPriceGreater(15.5,'fruta'));

console.log('4) Lista de productos con precio mayor a $20.30 y menor a $45.00: ');
console.log(f.productsPriceBetween(20.3,45));

console.log('5) Número de productos agrupados por su clasificación: ');
console.log(f.productsSameClassification('belleza'));
