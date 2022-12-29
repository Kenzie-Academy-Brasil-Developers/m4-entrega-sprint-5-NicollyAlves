export interface IAddressRequest {
    district: string
    zipCode: string
    number?: string
    city: string
    state: string
}

export interface IAddressResponse {
    id: string
    district: string
    zipCode: string
    number?: string
    city: string
    state: string
}

export interface IPropertyRequest {
    value: number
    size: number
    address: IAddressRequest
    categoryId: string
}

export interface IPropertyResponse {
    id: string
    value: number
    size: number
    category: string
    address: IAddressRequest
    sold: boolean
    createdAt: Date
    updatedAt: Date
}