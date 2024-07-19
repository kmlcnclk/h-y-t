export type InvoiceItem = {
  itemName: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
};

export type Invoice = {
  invoiceNumber: string;
  invoiceDate: string;
  sellerName: string;
  sellerTaxOffice: string;
  sellerTaxNumber: string;
  sellerAddress: string;
  sellerPhone: string;
  sellerEmail: string;
  buyerName: string;
  buyerTaxOffice: string;
  buyerTaxNumber: string;
  buyerAddress: string;
  buyerPhone: string;
  buyerEmail: string;
  items: InvoiceItem[];
  subTotal: number;
  vat: number;
  discount: number;
  totalAmount: number;
  paymentTerms: string;
  bankDetails: string;
  notes: string;
  authorizedSignature: string;
};
