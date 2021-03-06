module.exports = {
  OrderPage: {
    orders_subtab: '#subtab-AdminParentOrders',
    form: '#form-order',
    view_order_button: '//*[@id="form-order"]//tr[%NUMBER]//div[contains(@class,"pull-right")]//a',
    order_state_select: '//*[@id="id_order_state"]',
    update_status_button: '//*[@id="status"]/form//button[@name="submitState"]',
    order_quantity: '//*[@id="orderProducts"]//tr[%NUMBER]/td[4]',
    order_status: '//*[@id="status"]//table[contains(@class,"history-status")]//tr[1]/td[2]',
    shipping_cost: '//*[@id="shipping_table"]//tr[1]//td[5]/span',
    message_order: '//*[@id="content"]//div[@class="message-body"]//p[@class="message-item-text"]',
    product_Url: '//*[@id="orderProducts"]//tr[1]/td[2]/a',
    edit_product_button: '//*[@id="orderProducts"]//button[contains(@class,"edit_product_change_link")]',
    product_basic_price: '//*[@id="orderProducts"]//tr[%NUMBER]//input[contains(@class,"edit_product_price_tax_incl")]',
    product_basic_price_TTC: '(//*[@id="orderProducts"]//span[@class="product_price_show"])[%NUMBER]',
    customer_name: '//*[@id="content"]//div[@class="message-body"]//h4[@class="message-item-heading"]',
    order_submenu: '//*[@id="subtab-AdminOrders"]/a',
    document_submenu: '//*[@id="tabOrder"]//a[@href="#documents"]',
    download_invoice_button: '(//*[@id="documents_table"]//a[contains(@href, "generateInvoicePDF")])[1]',
    download_delivery_button: '//*[@id="documents_table"]//tr[3]/td[3]/a',
    product_name: '//*[@id="orderProducts"]//tr[%NUMBER]//span[@class="productName"]',
    total_price: '//*[@id="total_products"]/td[contains(@class,"amount")]',
    shipping_method: '//*[@id="shipping_table"]//tr/td[3]',
    search_by_reference_input: '//*[@id="form-order"]//table[contains(@class,"order")]//input[@name="orderFilter_reference"]',
    search_order_button: '//*[@id="submitFilterButtonorder"]',
    first_order: '//*[@id="form-order"]//table//tbody//tr[1]//a',
    transform_guest_customer_button: '//*[@id="content"]//input[@name="submitGuestToCustomer"]',
    check_order_id: '(//*[@id="table-cart"]//td[3]/span)[1]',
    dropdown_button: '(//*[@id="table-cart"]/tbody//button[@data-toggle="dropdown"])[1]',
    delete_button: '(//*[@id="table-cart"]//a[@class="delete"])[1]',
    stock_product: '//*[@id="orderProducts"]//tr[%NUMBER]/td[5]',
    total_order: '//*[@id="total_order"]/td[@class="amount text-right nowrap"]/strong',
    total_product_price: '//*[@id="orderProducts"]//tr[%NUMBER]/td[6]'
  },

  CreateOrder: {
    new_order_button: '//*[@id="page-header-desc-order-new_order"]',
    customer_search_input: '//*[@id="customer"]',
    choose_customer_button: '//*[@id="customers"]/div[1]/div/div[2]/button',
    product_search_input: '//*[@id="product"]',
    quantity_input: '//*[@id="qty"]',
    add_to_cart_button: '//*[@id="submitAddProduct"]',
    order_message_textarea: '//*[@id="order_message"]',
    delivery_option: '//*[@id="delivery_option"]',
    payment: '//*[@id="payment_module_name"]',
    total_shipping: '//*[@id="total_shipping"]',
    create_order_button: '//*[@id="summary_part"]//button[@name="submitAddOrder"]',
    product_combination: '//*[@class="id_product_attribute"]',
    basic_price_value: '//*[@id="customer_cart"]//tr[1]//input[@class="product_unit_price"]',
    product_select: '//*[@id="id_product"]'
  },

  ShoppingCart: {
    check_first_order_id: '//*[@id="table-cart"]//tr[1]/td[3]/span',
    check_order_customer: '//*[@id="table-cart"]//tr[1]/td[4]',
    view_order_button: '//*[@id="table-cart"]//td[%NUMBER]//a[@title="View"]',
    total_cart: '//*[@id="box-kpi-cart"]//span[@class="value"]',
    customer_name: '//*[@id="content"]//a[text()="%NAME"]',
    product_unit_price: '//*[@id="orderProducts"]//tr[%NUMBER]/td[3]',
    quantity_product: '//*[@id="orderProducts"]//tr[%NUMBER]/td[4]',
    stock_product: '//*[@id="orderProducts"]//tr[%NUMBER]/td[5]',
    total_product: '//*[@id="orderProducts"]//tr[%NUMBER]/td[6]',
    total_cart_summary: '//*[@id="orderProducts"]//td[2]/strong',
    order_page: '//*[@id="content"]//a[contains(@href,"%s")]',
    export_carts_button: '//*[@id="page-header-desc-cart-export_cart"]',
    search_input: '//*[@id="table-cart"]//thead//input[@name="cartFilter_%searchParam"]',
    search_button: '//*[@id="submitFilterButtoncart"]',
    id: '//*[@id="table-cart"]//tr[%NUMBER]/td[2]',
    order_id: '//*[@id="table-cart"]//tr[%NUMBER]/td[3]',
    customer: '//*[@id="table-cart"]//tr[%NUMBER]/td[4]',
    total: '//*[@id="table-cart"]//tr[%NUMBER]/td[5]',
    carrier: '//*[@id="table-cart"]//tr[%NUMBER]/td[6]',
    date: '//*[@id="table-cart"]//tr[%NUMBER]/td[7]',
    customer_online: '//*[@id="table-cart"]//tr[%NUMBER]/td[8]',
    id_shopping_carts: 'table-cart',
    reset_button: '//*[@name="submitResetcart"]'
  }
};
