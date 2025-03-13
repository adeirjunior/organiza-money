import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://SEU_PROJETO.supabase.co';
const SUPABASE_KEY = 'SUA_CHAVE_ANONIMA';

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
