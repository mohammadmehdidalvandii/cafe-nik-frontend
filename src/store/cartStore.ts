import { ProductMenuCartProps } from 'types/menu';
import {create} from 'zustand';
import {persist , createJSONStorage} from 'zustand/middleware'

interface ProductMenuCart extends ProductMenuCartProps {}

interface CartStateProps{
    cart:ProductMenuCartProps[],
    addToCart:(menu:ProductMenuCart)=>void;
    removeFormCart:(id:string)=> void;
    increaseQuantity:(id:string)=> void;
    decreaseQuantity:(id:string)=> void;
};

export const useCartStore = create<CartStateProps>()(
  persist(
    (set, get) => ({
      cart: [],

      addToCart: (menu) => set((state)=>{
        return {cart:[...state.cart , menu]};
      }),

      removeFormCart: (id: string) => {
      },

      increaseQuantity: (id: string) => {},

      decreaseQuantity: (id: string) => {},
    }),
    {
      name: "cart",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
