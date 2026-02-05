export type Window = {
    isOpen : boolean,
    zIndex: number,
    data: any
}

export type DockApp = {
    id: string,
    name?: string,
    icon?: string,
    canOpen: boolean,
}

export type NavIcon = {
    id: number,
    img: string
}

export type  NavLink = {
    id: number,
    name: string,
    type: string
}