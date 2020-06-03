"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Commerce_1 = require("./Commerce");
const Residence_1 = require("./Residence");
const Industry_1 = require("./Industry");
const client = {
    name: "Goli",
    registrationNumber: 1,
    consumedEnergy: 100,
    calculateBill: () => {
        return 2;
    }
};
console.log(client);
console.log(client.calculateBill());
const newResidence = new Residence_1.Residence(28, "28970000");
console.log(`CEP NEWRESIDENCE => ${newResidence.getCep()}`);
const newCommerce = new Commerce_1.Commerce(7, "2340000");
console.log(`CEP NEWCOMMERCE => ${newCommerce.getCep()}`);
const newIndustry = new Industry_1.Industry(6, "2897000");
console.log(`CEP INDUSTRY => ${newIndustry.getCep()}`);
//# sourceMappingURL=index.js.map