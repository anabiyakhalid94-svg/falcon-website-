import { Link } from 'react-router-dom';
export default function Button({to,children,variant='primary',href,className=''}){const classes=`button button-${variant} ${className}`;if(href)return <a className={classes} href={href}>{children}<span>→</span></a>;return <Link className={classes} to={to}>{children}<span>→</span></Link>}
