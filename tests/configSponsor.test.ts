import { describe, expect, test } from 'bun:test';
import { SPONSORS } from '../src/features/config/sponsors';

describe('network proxy sponsor', () => {
  test('links to the Wengao relay with Wengao branding', () => {
    expect(SPONSORS).toHaveLength(1);
    expect(SPONSORS[0]).toMatchObject({
      name: '问高云中转站',
      url: 'https://666666.wengaocloud.com/',
    });
    expect(SPONSORS[0]?.logo).toContain('wengao-logo');
  });
});
