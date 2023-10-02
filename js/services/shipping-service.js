export function shipment(order) {

    const x = order.basic;
    let shipmentValue = 0

    if (x < 100) {
        shipmentValue = 20
        return shipmentValue;
    }
    else if (x < 200) {
        shipmentValue = 12
        return shipmentValue;
    }
    else {
        return shipmentValue;
    }
}