import { describe, expect, test } from 'bun:test';
import { DEFAULT_LANGUAGE, resolveInitialLanguage } from '../src/utils/language';
import en from '../src/i18n/locales/en.json';
import ru from '../src/i18n/locales/ru.json';
import zhCN from '../src/i18n/locales/zh-CN.json';
import zhTW from '../src/i18n/locales/zh-TW.json';

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

  test('keeps the Wengao login brand name in every locale', () => {
    for (const locale of [zhCN, zhTW, en, ru]) {
      expect(locale.title.login).toBe('问高云订阅托管平台');
    }
  });
});
