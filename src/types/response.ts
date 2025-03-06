export interface responseShortUrl {

    active: boolean,
    created_at: Date,
    description: string,
    has_password: boolean,
    hash: string,
    id: number,
    image: string | null,
    long_url: string,
    model_type: string,
    name: string,
    short_url: string,
    type: string,
    updated_at: Date,
    user_id: number,
    workspace_id: number,
}