export interface NewArrival {
  id: number;
  productName: string;
  imageUrl: string;
}

export interface newArrivalProducts {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}
