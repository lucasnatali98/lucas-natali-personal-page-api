type CategoryDto = {
    name: string
}
export class Category {
    protected name: string
    constructor(categoryDto: CategoryDto){
        this.name = categoryDto.name
    }
}