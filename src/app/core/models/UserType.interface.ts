export type UserRole = 'Admin' | 'User' | 'Teacher' | 'Parent';

export interface User {
    nombre: string,
    apellido: string,
    contraseña: string,
    rol: UserRole
    email: string,
}

export interface Admin {
    nombre: string,
    apellido: string,
    contraseña: string,
    rol: UserRole
    email: string,
}