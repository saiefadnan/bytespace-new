import type { Category } from '../types';

export interface CategoryItem {
  id: string;
  name: string;
  slug: string;
}

export const figmaCategoryRows: CategoryItem[][] = [
  // Row 1 (8 items from Figma)
  [
    { id: 'featured', name: 'Featured', slug: 'featured' },
    { id: 'music', name: 'Music', slug: 'music' },
    { id: 'drawing-painting', name: 'Drawing & Painting', slug: 'drawing-painting' },
    { id: 'marketing', name: 'Marketing', slug: 'marketing' },
    { id: 'animation', name: 'Animation', slug: 'animation' },
    { id: 'social-media', name: 'Social Media', slug: 'social-media' },
    { id: 'ui-ux-design', name: 'UI/UX Design', slug: 'design' },
    { id: 'creative-marketing', name: 'Creative Marketing', slug: 'creative-marketing' },
  ],
  // Row 2 (6 items from Figma)
  [
    { id: 'digital-illustration', name: 'Digital Illustration', slug: 'digital-illustration' },
    { id: 'film-video', name: 'Film & Video', slug: 'film-video' },
    { id: 'crafts', name: 'Crafts', slug: 'crafts' },
    { id: 'freelance-entrepreneurship', name: 'Freelance & Entrepreneurship', slug: 'freelance-entrepreneurship' },
    { id: 'graphic-design', name: 'Graphic Design', slug: 'graphic-design' },
    { id: 'photography', name: 'Photography', slug: 'photography' },
  ],
  // Row 3 (4 items + + More from Figma)
  [
    { id: 'productivity', name: 'Productivity', slug: 'productivity' },
    { id: 'web-development', name: 'Web Development', slug: 'dev' },
    { id: 'data-science', name: 'Data Science', slug: 'data' },
    { id: 'cooking', name: 'Cooking', slug: 'cooking' },
  ],
];

export const mockCategories: Category[] = figmaCategoryRows.flat().map((item, idx) => ({
  id: item.id,
  name: item.name,
  slug: item.slug,
  count: 20 + idx * 5,
}));
