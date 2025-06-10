import '@testing-library/jest-dom';
import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';

// Ensure cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup();
});

// Extend expect with matchers from jest-dom
expect.extend(require('@testing-library/jest-dom'));
