import Order from "./models/order.js";
import * as OrderService from "./services/order-service.js";

const data = document.getElementById("orderEntry").innerHTML.split("\n");

const order = new Order(Number(data[0]), Number(data[1]), Number(data[2]));

const total = OrderService.total(order);

console.log(`Pedido código ${order.code}`);
console.log(`Valor total: R$ ${total.toFixed(2)}`);