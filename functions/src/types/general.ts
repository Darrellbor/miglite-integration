export interface UDetails {
  username?: string;
  password?: string;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  mobile?: string;
  address: string;
  suburb_city: string;
  state: string;
  postcode: string;
  country: string;
  ship_firstname?: string;
  ship_lastname?: string;
  ship_suburb_city?: string;
  ship_state?: string;
  ship_postcode?: string;
  ship_country?: string;
  ship_address?: string;
  bank_name?: string;
  bank_phone?: string;
  ssn?: string;
  dl?: string;
  dob?: string;
  uip?: string;
}

export interface PayDetails {
  card_type: string;
  payby?: string;
  card_name?: string;
  card_no?: string;
  card_ccv?: string;
  card_exp_month?: string;
  card_exp_year?: string;
  md?: string;
  redirecturl?: string;
  useragent?: string;
  browseragent?: string;
  routing_no?: string;
  account_no?: string;
  type?: string;
  regulation_e?: string;
  class?: string;
  receive_name?: string;
}

export interface CartSummary {
  quantity: number;
  amount_purchase: string;
  amount_shipping: string;
  amount_tax?: string,
  amount_coupon?: string,
  currency_code: string;
}

export interface CartItems {
  name: string;
  quantity: number;
  amount_unit: string;
  item_no: string;
  item_desc: string;
}

export interface Cart {
  summary: CartSummary;
  items: CartItems[];
}

export interface TxParams {
  wid?: string;
  tid?: string;
  ref1?: string;
  ref2?: string;
  ref3?: string;
  ref4?: string;
  addinfo?: string;
  cmd?: string;
  postbackurl?: string;
}

export interface Schedules {
  startdate: string;
  amount: string;
  frequency: number;
  frequencyunit: string;
  repeat: string;
}

export interface VerifyResponseItem {
  name: string;
  value: string;
}
