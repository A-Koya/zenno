import { concatParam } from "@/lib/functions/fetch";

describe('concatParam function test', () => {
    // クエリパラメータが1つの場合
    test('Single query parameter', () => {
        const endpoint = 'https://example.com/api';
        const params = [{ key1: 'value1' }];
        const result = concatParam(endpoint, params);
        const expected = 'https://example.com/api?key1=value1';
        expect(result).toBe(expected);
    });

    // クエリパラメータが複数の場合
    test('Multiple query parameters', () => {
        const endpoint = 'https://example.com/api';
        const params = [{ key1: 'value1', key2: 'value2' }];
        const result = concatParam(endpoint, params);
        const expected = 'https://example.com/api?key1=value1&key2=value2';
        expect(result).toBe(expected);
    });

    // クエリパラメータが空の場合
    test('Empty query parameters', () => {
        const endpoint = 'https://example.com/api';
        const result = concatParam(endpoint);
        const expected = 'https://example.com/api';
        expect(result).toBe(expected);
    });
});

