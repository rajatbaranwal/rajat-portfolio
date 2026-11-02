import './Button.css';

const Button = ({ variant = 'primary', size, className = '', children, ...props }) => {
  const classes = ['btn', `btn-${variant}`, size && `btn-${size}`, className]
    .filter(Boolean)
    .join(' ');
  const Tag = props.href ? 'a' : 'button';

  return (
    <Tag className={classes} {...props}>
      {children}
    </Tag>
  );
};

export default Button;
