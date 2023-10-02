import * as ShippingService from './shipping-service.js';

export function total(order) {
    const discountValue = order.basic * order.discount / 100;
    const shipmentValue = ShippingService.shipment(order);

    return order.basic - discountValue + shipmentValue;
}