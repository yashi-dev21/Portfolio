/*
  # Create Contact Messages Table

  ## Purpose
  This migration creates a table to store contact form submissions from the portfolio website.

  ## Tables Created
  1. `contact_messages`
     - `id` (uuid, primary key) - Unique identifier for each message
     - `name` (text) - Name of the person sending the message
     - `email` (text) - Email address of the sender
     - `message` (text) - The message content
     - `created_at` (timestamptz) - Timestamp when the message was submitted
     - `read` (boolean) - Flag to track if admin has read the message

  ## Security
  - Enable RLS on the `contact_messages` table
  - Add policy for public INSERT (anyone can submit a message)
  - Add policy for authenticated SELECT (only admin can view messages)

  ## Notes
  - Public users can only insert messages (submit contact form)
  - Only authenticated users can view messages (admin dashboard)
  - Messages are marked as unread by default
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  read boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact messages"
  ON contact_messages
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all messages"
  ON contact_messages
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update message read status"
  ON contact_messages
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);