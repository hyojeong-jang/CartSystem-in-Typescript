import React from 'react';

type HeaderProps= {
  name: string;
}

const Header = ({ name }: HeaderProps) => {
  return (
    <div>
      {name}
    </div>
  );
}

export default Header
