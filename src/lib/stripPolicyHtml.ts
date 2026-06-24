/** Remove a leading document title from policy HTML; LegalPage already renders the page h1. */
export const stripPolicyHtmlTitle = (html: string) =>
  html.replace(/^\s*<h1[^>]*>[\s\S]*?<\/h1>\s*/i, "");
