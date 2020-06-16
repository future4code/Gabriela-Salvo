import { v4 } from "uuid"

export class IdGenerator {
    public igGenerator(): string {
        const id = v4()
        return id
    }

}