import { copy, type Language } from './languages';
import { sections } from './sections';

// This first short note uses only the owner's existing, supplied philosophy.
// Future notes can be added here without changing routes or page templates.
export const notes = [{
  slug: 'humanity-in-science',
  content: (lang: Language) => ({
    title: copy[lang].motto,
    description: sections[lang].note,
    paragraphs: [copy[lang].principleOne, copy[lang].principleTwo],
  }),
}] as const;
export type NoteSlug = (typeof notes)[number]['slug'];
export function getNote(slug: NoteSlug, lang: Language) {
  return notes.find((note) => note.slug === slug)!.content(lang);
}
