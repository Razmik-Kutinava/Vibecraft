/** Теги в frontmatter блога (`tag:`), по которым пост попадает на страницу /cases */
export const CASE_STUDY_TAGS = new Set(["Кейс", "Case study"]);

export function isCaseStudyPost(tag: string): boolean {
  return CASE_STUDY_TAGS.has(tag);
}
