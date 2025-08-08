export interface Service {
    id: string;
    title: string;
    description: string;
    image: string;
  }
  
  export interface Testimonial {
    id: number;
    name: string;
    event: string;
    rating: number;
    text: string;
    image: string;
  }
  
  export interface GalleryImage {
    id: number;
    src: string;
    category: string;
    alt: string;
  }