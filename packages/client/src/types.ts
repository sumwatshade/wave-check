export interface Credentials {
    username: string;
    password: string;
}

export interface MulticamOptions {
    'all-favorites': Array<string>;
    numCams: {
        'all-favorites': number;
        [key: string]: number;
    };
}
