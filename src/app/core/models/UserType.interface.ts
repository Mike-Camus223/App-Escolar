export type UserRole = 'Admin' | 'User' | 'Teacher' | 'Parent';

export interface User {
    email: string;
    password: string;
    role: UserRole
}

export interface Admin {
    email:string;
    password: string;
    role: UserRole
}