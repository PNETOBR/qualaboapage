function slugify(text) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function isEmail(value) {
  return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value);
}

function isPhone(value) {
  return /^\(?\d{2}\)?\s?\d{4,5}-\d{4}$/.test(value);
}

function renderInlineText(text, keyPrefix) {
  const parts = text.split(/([A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}|\(?\d{2}\)?\s?\d{4,5}-\d{4})/gi);

  return parts.map((part, index) => {
    const key = `${keyPrefix}-${index}`;

    if (isEmail(part)) {
      return (
        <a key={key} href={`mailto:${part}`} className="legal-link">
          {part}
        </a>
      );
    }

    if (isPhone(part)) {
      const tel = part.replace(/\D/g, '');

      return (
        <a key={key} href={`tel:+55${tel}`} className="legal-link">
          {part}
        </a>
      );
    }

    return <span key={key}>{part}</span>;
  });
}

function renderParagraph(lines, key) {
  return (
    <p key={key} className="legal-document__paragraph">
      {lines.map((line, index) => (
        <span key={`${key}-line-${index}`}>
          {index > 0 ? <br /> : null}
          {renderInlineText(line, `${key}-text-${index}`)}
        </span>
      ))}
    </p>
  );
}

function renderBlock(block, index) {
  const lines = block
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean);

  if (lines.length === 0) {
    return null;
  }

  if (lines.every((line) => line.startsWith('- '))) {
    return (
      <ul key={`list-${index}`} className="legal-document__list">
        {lines.map((line, lineIndex) => (
          <li key={`list-${index}-${lineIndex}`}>{renderInlineText(line.slice(2), `list-${index}-${lineIndex}`)}</li>
        ))}
      </ul>
    );
  }

  if (lines.length === 1 && /^\d+\.\s/.test(lines[0])) {
    return (
      <h3 key={`section-${index}`} id={slugify(lines[0])} className="legal-document__section">
        {lines[0]}
      </h3>
    );
  }

  if (lines.length === 1 && lines[0] === lines[0].toUpperCase()) {
    return (
      <p key={`callout-${index}`} className="legal-document__callout">
        {lines[0]}
      </p>
    );
  }

  return renderParagraph(lines, `paragraph-${index}`);
}

export default function LegalDocument({ id, badge, description, content }) {
  const blocks = content
    .trim()
    .split(/\n\s*\n/g)
    .map((block) => block.trim())
    .filter(Boolean);

  const [title, metaBlock, ...bodyBlocks] = blocks;
  const metaLines = (metaBlock || '')
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean);

  return (
    <article id={id} className="legal-document">
      <div className="legal-document__intro">
        <div className="legal-document__badge">{badge}</div>
        <h2 className="legal-document__title">{title}</h2>
        <p className="legal-document__description">{description}</p>
        <div className="legal-document__meta">
          {metaLines.map((line, index) => (
            <span key={`${id}-meta-${index}`} className="legal-document__meta-item">
              {line}
            </span>
          ))}
        </div>
      </div>

      <div className="legal-document__body">{bodyBlocks.map(renderBlock)}</div>
    </article>
  );
}
