export interface IHumanData {
    pages: number
    items: IHuman[]
}

export interface IHuman {
    id: number
    name: string
    status: string
    type: string
    gender: string
    origin: HumanOrigin
    location: LocationOrigin
    image: string
}

interface HumanOrigin {
    name: string
}

interface LocationOrigin {
    name: string
}