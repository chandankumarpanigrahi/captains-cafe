'use client';

import * as React from 'react';

export function useCopyToClipboard({
  timeout = 2000,
  onCopy
} = {}) {
  const [copied, setCopied] = React.useState(false);

  const copy = (value) => {
    if (typeof window === 'undefined' || !navigator.clipboard.writeText) {
      return;
    }

    if (!value) return;

    navigator.clipboard.writeText(value).then(() => {
      setCopied(true);

      if (onCopy) {
        onCopy();
      }

      setTimeout(() => {
        setCopied(false);
      }, timeout);
    }, console.error);
  };

  return { copied, copy };
}
