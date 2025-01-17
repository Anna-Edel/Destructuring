// src/js/app.js

export default function getSpecialAttacks({ special }) {
  return special.map(({ id, name, icon, description = 'Описание недоступно' }) => ({
    id,
    name,
    icon,
    description,
  }));
}
