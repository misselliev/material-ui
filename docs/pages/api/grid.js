import React from 'react';
import MarkdownDocs from 'docs/src/modules/components/MarkdownDocs';
import markdown from './grid.md';

function Page() {
  return <MarkdownDocs markdown={markdown} />;
}

export default Page;
