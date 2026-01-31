
export interface SliceItem {
  id: string;
  title: string;
  description: string;
  link: string;
  iconName: 'rocket' | 'pencil' | 'telescope';
}

export interface ModalData {
  isOpen: boolean;
  type: 'newsletter' | 'linkedin' | null;
}
