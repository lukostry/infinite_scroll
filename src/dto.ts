export interface Offer {
  id: number;
  title: string;
  description: string;
  img_url: string;
  price: number;
  discount?: number;
  rating?: number;
  status: OfferStatus;
  created_at: string;
}

export enum OfferStatus {
  Published = 'published',
  InProgress = 'in_progress',
  WaitingForApproval = 'waiting_for_approval',
  Canceled = 'canceled',
}
