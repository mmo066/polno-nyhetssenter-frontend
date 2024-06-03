import DOMPurify from 'dompurify';
import { MainContent } from '../types/cdaTypes';

// We need to do some html class cleanup because
// of mismatch in classes from politiet.no rich
// text editor to design system classes.

DOMPurify.addHook('afterSanitizeElements', (node) => {
  const tagName: string = node.tagName?.toLocaleLowerCase();

  if (!tagName) {
    return;
  }

  switch (tagName) {
    case 'h1':
    case 'h2':
    case 'h3':
    case 'h4':
    case 'h5':
    case 'h6':
      node.setAttribute('class', 'pds-' + tagName);
      break;
    case 'p':
      node.setAttribute('class', 'pds-body-text');
      break;
    case 'a':
      node.setAttribute('class', 'pds-link');
      break;
    case 'ul':
      node.setAttribute('class', 'pds-bullet-list');
      break;
    case 'ol':
      node.setAttribute('class', 'pds-numbered-list');
      break;
    default:
      break;
  }

  return node;
});

export function sanitizeContent(receivedText: MainContent[]) {
  const text = receivedText.map((content) => ({
    ...content,
    content:
      content.type !== 'SatelliteServicePropertyBlock' && typeof content.content === 'string' ? (
        <span
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(content.content),
          }}
        />
      ) : (
        content.content
      ),
  }));

  return text;
}

// Henter content fra CDA
export function getContent(mainContent: MainContent[], contentName: string) {
  const content = mainContent.find(({ name }) => {
    return name === contentName;
  });

  return content ? content.content : `{Missing language string: ${contentName}}`;
}