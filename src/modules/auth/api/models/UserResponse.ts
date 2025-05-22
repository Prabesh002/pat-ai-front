import { UUID } from "crypto";

export interface UserResponse {
    id: UUID;
    user_name: string;
}