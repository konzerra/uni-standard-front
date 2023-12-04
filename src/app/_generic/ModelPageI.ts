
export interface ModelPageI<Model> {
    content : Array<Model>
    pageable?: {
        sort: {
            empty: boolean
            sorted: boolean
            unsorted: boolean
        },
        offset: number
        pageNumber: number
        pageSize: number
        unpaged: boolean
        paged: boolean
    },
    last?: boolean,
    totalPages: number
    totalElements: number
    size: number
    number: number
    sort?: {
        empty: boolean,
        sorted: boolean,
        unsorted: boolean
    },
    first: boolean,
    numberOfElements: number
    empty: boolean
}
