import { navigation } from '../config/navigation';

export function Header({ title }) {
  return <header className="header"><h1>{title}</h1><nav>{navigation.map(item => <a key={item.href} href={item.href}>{item.label}</a>)}</nav></header>;
}
