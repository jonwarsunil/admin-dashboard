export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  status: 'Active' | 'Inactive' | 'Pending';
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}
