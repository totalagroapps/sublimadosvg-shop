export type ProductCategory = 'todos' | 'camisetas' | 'mugs' | 'mugs-tradicionales' | 'mugs-magicos' | 'mugs-silicona' | 'termos' | 'agendas' | 'cojines' | 'rompecabezas' | 'regalos';

export type MockupType = 'mug' | 'tshirt' | 'puzzle' | 'tumbler' | 'pillow';

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  price: number;
  originalPrice?: number;
  description: string;
  features: string[];
  image: string;
  gallery?: string[];
  mockupType: MockupType;
  availableColors?: { name: string; hex: string }[];
  availableSizes?: string[];
  badge?: string;
  rating: number;
  reviewsCount: number;
}

export interface CustomizationData {
  uploadedImage: string | null;
  customText: string;
  textColor: string;
  fontFamily: string;
  selectedColor?: { name: string; hex: string };
  selectedSize?: string;
  notes?: string;
}

export interface CartItem {
  cartItemId: string;
  product: Product;
  customization: CustomizationData;
  quantity: number;
}

export interface OrderCustomerInfo {
  name: string;
  phone: string;
  city: string;
  address: string;
  notes?: string;
}
