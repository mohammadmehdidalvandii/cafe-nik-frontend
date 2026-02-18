import {create} from 'zustand';

interface UserProps{
    id:string,
    username:string,
    phone:string,
    email:string,
    roles:string,
    login_method:string,
    is_guest:boolean,
}

type UpdateUserFields = {
  email?: string;
  username?: string;
  is_guest?: boolean;
};

interface AuthStateProps{
    token:string | null;
    accessTokenExpiry:string | null;
    user:UserProps | null;
    isAuthenticated:boolean;
    login:(token:string , user:UserProps)=>void;
    logout:()=>Promise<void>;
    updateUser:(data:UserProps)=>void;
}

export const useAuthStore = create<AuthStateProps>((set)=>({
    token:typeof window !== 'undefined' ? localStorage.getItem('token'):null,
    accessTokenExpiry:typeof window !== 'undefined' ? localStorage.getItem('accessTokenExpiry'):null,
    user: typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('user')|| 'null'):null,
    isAuthenticated:typeof window !== undefined && !! localStorage.getItem('token'),

    login:(token:string , user:UserProps)=>{
        localStorage.setItem('token', token);
        localStorage.setItem('accessTokenExpiry', (Date.now() + 15 * 60 *1000).toString());
        localStorage.setItem('user', JSON.stringify(user));
        set({token , user , isAuthenticated:true})
    },
    logout:async()=>{
        localStorage.removeItem('token');
        localStorage.removeItem('accessTokenExpiry');
        localStorage.removeItem('user');
        set({token:null , user:null , isAuthenticated:false})
    },
updateUser: (data: UpdateUserFields) => {
  set((state) => {
    if (!state.user) return state;

    const updatedUser = {
      ...state.user,
      ...data,
    };

    localStorage.setItem('user', JSON.stringify(updatedUser));

    return { user: updatedUser };
  });
},
}))