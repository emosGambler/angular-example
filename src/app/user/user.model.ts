export interface IUser {
    id: number,
    firstName: string,
    lastName: string,
    userName: string,
    birthDate: string,
    location: {
        planet: string,
        country: string,
        city: string
    }
}