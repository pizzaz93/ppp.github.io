
import React from 'react';
import { Rocket, Pencil, Telescope, Mail, Lightbulb } from 'lucide-react';
import { SliceItem } from './types';

export const SLICES: SliceItem[] = [
  {
    id: 'past',
    title: 'Past',
    description: 'Learn about your career theme and where you started.',
    link: 'https://past-game.lovable.app',
    iconName: 'rocket',
  },
  {
    id: 'present',
    title: 'Present',
    description: 'Build your personal brand and narrate your current story.',
    link: 'https://v0-present-app.vercel.app/',
    iconName: 'pencil',
  },
  {
    id: 'phuture',
    title: 'Phuture',
    description: 'Inspire yourself with future opportunities and paths ahead.',
    link: 'https://phuture.base44.app/',
    iconName: 'telescope',
  },
];

export const ICONS = {
  rocket: <Rocket size={48} className="text-[#D4AF37]" />,
  pencil: <Pencil size={48} className="text-[#D4AF37]" />,
  telescope: <Telescope size={48} className="text-[#D4AF37]" />,
  mail: <Mail size={32} className="text-[#D4AF37]" />,
  lightbulb: <Lightbulb size={32} className="text-[#D4AF37]" />,
};
