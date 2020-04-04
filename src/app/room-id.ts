import { v4 as uuid } from 'uuid';

export class InvalidRoomIdError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'InvalidRoomIdError';
    }
}

export class RoomID {
    static validate(id: string) {
        if (!id.match(/^[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}$/)) {
            throw new InvalidRoomIdError(`Room ID '${id}' is not a valid UUID.`);
        }
    }

    static generate(): string {
        return uuid();
    }
}
