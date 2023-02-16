import contextSlice, { initialState, setTheme, switchTheme } from '../contextSlice';

describe('contextSlice', () => {
    it('should have initial state', () => {
        expect(contextSlice(undefined, { type: undefined })).toEqual(initialState);
    });

    it('should handle setTheme', () => {
        expect(
            contextSlice(initialState, {
                type: setTheme.type,
                payload: 'light',
            })
        ).toEqual({ theme: 'light' });
    });

    it('should handle switchTheme', () => {
        expect(
            contextSlice({ theme: 'light' }, {
                type: switchTheme.type,
            })
        ).toEqual({ theme: 'dark' });
    });
});
