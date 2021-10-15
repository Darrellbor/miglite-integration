import type { UDetails, PayDetails, TxParams, Cart } from './general'

export interface PaymentArgs {
  udetails: UDetails
  paydetails: PayDetails
  txparams?: TxParams
  cart: Cart
}

export interface ProcessSettlementArgs {
  txid: string
}

export interface ProcessRequeryRequest {
  txid: string
  reference: string
  postbackurl?: string
}
