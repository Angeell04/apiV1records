export interface WorkoutRecord {
    id: string;
    workout: string;
    record: string;
    memberId?: string;
    member?: string | Miembro;
}

export interface Miembro {
    id: string;
    name: string;
    gender: string;
    dateOfBirth: string;
    email: string;
    password?: string;
}

export interface Database {
    records: WorkoutRecord[];
    members?: Miembro[];
}

export interface FiltrosRecord {
    member: string;
}
