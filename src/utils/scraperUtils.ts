export interface IncludeUrlCommand {
  placeholder: string;
  command: string;
}

export const urlRegex = /https?:\/\/[^\s]+/;
export const checkIncludeUrlCommands = (inputText: string): string[] => {
  const includeUrlCommandRegex =
    /\[include-url:\s*(https?:\/\/[^\s]+)(?:\s+max_execution_time:(\d+))?\s*(filter:(true|false))?\s*(store:(true|false))?\]/g;

  const matches = Array.from(inputText.matchAll(includeUrlCommandRegex)); // Convert the matches into an array

  // Map matches to return the complete command string
  return matches.map((match) => match[0]); // Return the whole matched command
};

export const replaceCommandsWithPlaceholders = (
  inputText: string,
  commands: string[],
): { modifiedText: string; placeholders: IncludeUrlCommand[] } => {
  let modifiedText = inputText;
  const placeholders: IncludeUrlCommand[] = [];

  commands.forEach((command, index) => {
    const placeholder = `{{scrape-placeholder-${index}}}`; // Create a unique placeholder
    placeholders.push({ placeholder, command }); // Store the placeholder and the original command
    modifiedText = modifiedText.replace(command, placeholder); // Replace command with placeholder
  });

  return { modifiedText, placeholders };
};

export const truncateContent = (content: string, limit: number): string => {
  return content.length > limit ? content.slice(0, limit) + '...' : content;
};

export const replaceWebSearchCommands = (inputText: string, replacementText: string) => {
  const webSearchRegex =
    /\[web-search:\s*([^\]]+?)\s*max_execution_time:\d+\s*filter:(true|false)\s*store:(true|false)\]/g;

  return inputText.replace(webSearchRegex, replacementText);
};
