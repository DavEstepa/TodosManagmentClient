export interface TODO {
    activityName?: string,
    description?: string,
    notes?: string
}

export interface TODODto extends TODO {
    createdAt: string,
    userCreated: string,
}