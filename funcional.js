let fs = require('fs');

class DAO{

    constructor(fileName) {
        this.fileName = fileName;
        let dao = fs.readFileSync(fileName, 'utf8');
        this.data = JSON.parse(dao);
    }

    productsExistenceMore(n){
            return this.data.filter(product => product.stock > n);
        }

        productsExistenceLess(n){
            return this.data.filter(product => product.stock < n);
        }

        productsSameClassificationAndPriceGreater(price, classification){
            return this.data.filter(product => product.price > price && product.classification === classification);
        }

        productsPriceBetween(num1,num2){
            return this.data.filter(product => product.price > num1 && product.price < num2);
        }

        productsSameClassification(classification){
            return this.data.filter(product => product.classification === classification);
        }
    }

module.exports = DAO;
