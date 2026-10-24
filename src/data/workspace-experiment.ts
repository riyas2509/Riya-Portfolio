/** Artwork selection. Previous implementations remain available without a public toggle. */
export const workspaceVariant = "original" as
  "original" | "riya" | "reference";
export const workspaceUsesIllustration = workspaceVariant === "reference";
export const workspaceHasCharacter = workspaceVariant !== "original";
