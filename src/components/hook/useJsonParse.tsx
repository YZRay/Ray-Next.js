interface Project {
  description: string;
}

export function useJsonParse(project: Project): React.ReactNode[] {
  const paragraphs = project.description.split(/[\n]/);

  const parseContent = (content: string): React.ReactNode[] => {
    const parts = content.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return <strong key={index}>{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  const isListItem = (text: string): boolean => {
    return text.trim().startsWith("-") || /^\d+\./.test(text.trim());
  };

  const renderContent = (): React.ReactNode[] => {
    let listItems: React.ReactElement[] = [];
    const renderedContent: React.ReactNode[] = [];

    paragraphs.forEach((paragraph: string, index: number) => {
      if (isListItem(paragraph)) {
        const content = paragraph.replace(/^-|\d+\./, "").trim();
        listItems.push(<li key={`li-${index}`}>{parseContent(content)}</li>);
      } else {
        if (listItems.length > 0) {
          renderedContent.push(<ul key={`ul-${index}`}>{listItems}</ul>);
          listItems = [];
        }
        renderedContent.push(
          <p key={`p-${index}`}>{parseContent(paragraph)}</p>
        );
      }
    });

    if (listItems.length > 0) {
      renderedContent.push(<ol key={`ul-last`}>{listItems}</ol>);
    }

    return renderedContent;
  };

  return renderContent();
}
