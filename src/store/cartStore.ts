import { ProductMenuCartProps } from 'types/menu';
import {create} from 'zustand';
import {persist , createJSONStorage} from 'zustand/middleware'

interface ProductMenuCart extends ProductMenuCartProps {}

interface CartStateProps{
    cart:ProductMenuCartProps[],
    addToCart:(menu:ProductMenuCart)=> void;
    removeFormCart:(id:string)=> void;
    increaseQuantity:(id:string)=> void;
    decreaseQuantity:(id:string)=> void;
    clearCart: () => void;
};

export const useCartStore = create<CartStateProps>()(
  persist(
    (set, get) => ({
      cart: [],

      addToCart: (menu) => set((state)=>{
        return {cart:[...state.cart , menu]};
      }),

      removeFormCart: (id: string) =>set((state)=>({
        cart:state.cart.filter((p)=> p.id !== id)
      })),

      increaseQuantity: (id: string) => {
        set((state)=>({
          cart:state.cart.map((p)=> p.id === id ? {...p , quantity:(p.quantity || 1) + 1} : p)
        }))
      },

      decreaseQuantity: (id: string) => {
        set((state)=>({
          cart:state.cart.map((p)=> p.id === id ? {...p , quantity:Math.max((p.quantity|| 1) -1, 1)}:p)
        }))
      },
      clearCart:()=>set({cart:[]}),
    }),
    {
      name: "cart",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
