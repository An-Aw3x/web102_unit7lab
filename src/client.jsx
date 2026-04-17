import { createClient } from '@supabase/supabase-js'

const url = "https://jjcmyiuemexubvcozpxk.supabase.co"

const API_KEY = "sb_publishable_L9tzC2odT_ijskpVmcFuCw_UAae3m-F"

export const supabase = createClient(url, API_KEY)

