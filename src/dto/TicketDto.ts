export type CreateTicketPayload = {
  name: string;
  email: string;
  paymentProof: string;
  year: string;
};

export type CreateTicketResponse = {
  records: CreateTicketRecord[];
};

export type CreateTicketRecord = {
  id: string;
  createdTime: string;
  fields: CreateTicketFields;
};

export type CreateTicketFields = {
  email: string;
  name: string;
  year: string;
  paymentProof: CreateTicketPaymentProof[];
  ticketNumber: number;
  id: string;
  createdAt: string;
  ticketId: string;
};

export type CreateTicketPaymentProof = {
  id: string;
  url: string;
  filename: string;
};

export type GetTicketByIdResponse = {
  id: string;
  createdTime: string;
  fields: GetTicketByIdFields;
};

export type GetTicketByIdFields = {
  email: string;
  name: string;
  year: string;
  paymentProof: GetTicketByIdPaymentProof[];
  ticketNumber: number;
  id: string;
  createdAt: string;
  ticketId: string;
};

export type GetTicketByIdPaymentProof = {
  id: string;
  width: number;
  height: number;
  url: string;
  filename: string;
  size: number;
  type: string;
  thumbnails: GetTicketByIdThumbnails;
};

export type GetTicketByIdThumbnails = {
  small: GetTicketByIdSmall;
  large: GetTicketByIdSmall;
  full: GetTicketByIdSmall;
};

export type GetTicketByIdSmall = {
  url: string;
  width: number;
  height: number;
};
