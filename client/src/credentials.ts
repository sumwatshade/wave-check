import { Credentials } from './types';

/**
 * Get the user credentials
 */
export const getCredentials = (): Credentials => {
    return {
        username: process.env.SURFLINE_USERNAME,
        password: process.env.SURFLINE_PASSWORD,
    };
};
