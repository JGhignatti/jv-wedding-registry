import { json } from '@sveltejs/kit';

import type { RequestHandler } from './$types';
import { items } from '$lib/database/items';

export const GET: RequestHandler = async () => {
  return json({ items: items.slice(0, 3) });
};
