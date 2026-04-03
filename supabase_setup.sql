-- SQL Setup for GrowthNudge
-- Run this in your Supabase SQL Editor

-- 1. Create a table for Nudges
CREATE TABLE public.nudges (
  id uuid NOT NULL DEFAULT uuid_generate_v4(),
  created_at timestamp with time zone NULL DEFAULT now(),
  title text NULL,
  description text NULL,
  boost text NULL,
  time_to_complete text NULL,
  category text NULL,
  is_completed boolean DEFAULT false,
  CONSTRAINT nudges_pkey PRIMARY KEY (id)
);

-- 2. Create a table for Community Wins
CREATE TABLE public.community_wins (
  id uuid NOT NULL DEFAULT uuid_generate_v4(),
  created_at timestamp with time zone NULL DEFAULT now(),
  business_name text NULL,
  win_description text NULL,
  reactions integer DEFAULT 0,
  CONSTRAINT community_wins_pkey PRIMARY KEY (id)
);

-- 3. Enable row level security
ALTER TABLE public.nudges ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.community_wins ENABLE ROW LEVEL SECURITY;

-- 4. Create policies (Simplified for MVP)
CREATE POLICY "Allow public read" ON public.nudges FOR SELECT USING (true);
CREATE POLICY "Allow public read" ON public.community_wins FOR SELECT USING (true);
