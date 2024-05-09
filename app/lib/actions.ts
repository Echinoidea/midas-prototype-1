'use server';

import createSupabaseServerClient from './server';

export async function signInWithEmalAndPassword(data: {
  email: string;
  password: string;
}) {
  const supabase = createSupabaseServerClient();

  const result = (await supabase).auth.signInWithPassword({
    email: data.email,
    password: data.password,
  });
  return JSON.stringify(result);
}

export default async function readUserSession() {
  const supabase = await createSupabaseServerClient();
  return supabase.auth.getSession();
}
