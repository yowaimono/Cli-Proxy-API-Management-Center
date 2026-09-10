import { describe, expect, test } from 'bun:test';
import { DEFAULT_LANGUAGE, resolveInitialLanguage } from '../src/utils/language';

describe('default language', () => {
  test('uses Simplified Chinese when no preference has been saved', () => {
    expect(DEFAULT_LANGUAGE).toBe('zh-CN');
    expect(resolveInitialLanguage(null)).toBe('zh-CN');
  });

  test('preserves an explicitly saved language preference', () => {
    expect(resolveInitialLanguage('en')).toBe('en');
    expect(resolveInitialLanguage('zh-TW')).toBe('zh-TW');
    expect(resolveInitialLanguage('ru')).toBe('ru');
  });
});
