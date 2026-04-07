import { assetUrl } from "../utils/assetUrl";

const BASE = import.meta.env.BASE_URL;

export function galleryUrl(path) {
  return `${BASE}gallery/${path}`;
}

export const categories = [
  {
    id: "cat-1",
    titleKey: "galleryCat1",
    cover: assetUrl("first-met.png"),
    media: [],
  },
  {
    id: "cat-2",
    titleKey: "galleryCat2",
    cover: assetUrl("into-merry.png"),
    media: [],
  },
  {
    id: "cat-3",
    titleKey: "galleryCat3",
    cover: assetUrl("with-story.png"),
    media: [],
  },
  {
    id: "cat-4",
    titleKey: "galleryCat4",
    cover: assetUrl("wedding.png"),
    media: [],
  },
];
