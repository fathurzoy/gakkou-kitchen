import { recipes, getRecipeBySlug } from '@/data/recipes';
import RecipeDetailClient from './RecipeDetailClient';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return recipes.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const recipe = getRecipeBySlug(slug);
  if (!recipe) return { title: 'Resep tidak ditemukan' };
  return {
    title: `${recipe.name_id} (${recipe.name_jp_plain}) | Gakkou Kitchen`,
    description: recipe.description_id,
    openGraph: {
      title: `${recipe.name_id} — Gakkou Kitchen`,
      description: recipe.description_id,
      images: ['/logo.png'],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${recipe.name_id} — Gakkou Kitchen`,
      description: recipe.description_id,
      images: ['/logo.png'],
    },
  };
}

export default async function RecipePage({ params }) {
  const { slug } = await params;
  const recipe = getRecipeBySlug(slug);
  if (!recipe) notFound();
  return <RecipeDetailClient recipe={recipe} />;
}
